# Media Source Extensions: Codec Switching Explainer

###### Author: Matthew Wolenetz, [Google Inc.](www.google.com) - March 15, 2018.  Last update September 17, 2018.

## tl;dr

We propose adding a `changeType` method on `SourceBuffer` that allows the _type_
(bytestream and codec(s)) of media bytes subsequently appended to the
`SourceBuffer` to be changed.  We plan to incubate this idea via the WICG, with
goal of eventually working with WebPlatformWG to get the result of WICG
incubation as part of the next version of the [Media Source Extensions
API](https://www.w3.org/TR/media-source/) (MSE).


### Implementation status as of last update

* Chrome [M70 shipped SourceBuffer.changeType()](https://www.chromestatus.com/features/5719220952236032).
* Firefox [63 shipped SourceBuffer.changeType()](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/63).
* Safari Technical Preview [Release 64 added Experimental Feature support for SourceBuffer.changeType()](https://developer.apple.com/safari/technology-preview/release-notes/)
* Current experimental web-platform-test results:
  * [mediasource-changetype](https://wpt.fyi/results/media-source/mediasource-changetype.html?label=experimental)
  * [mediasource-changetype-play](https://wpt.fyi/results/media-source/mediasource-changetype-play.html?label=experimental)

## Background

Web authors have consistently requested that MSE afford a mechanism for
switching codecs and bytestreams:

* [MSE spec issue](https://github.com/w3c/media-source/issues/155)
* [Ad insertion use case](https://www.w3.org/wiki/HTML/Media_Task_Force/MSE_Ad_Insertion_Use_Cases)
* [Implementation Use Cases and Specification Gaps](https://www.w3.org/wiki/HTML/Media_Task_Force/MSE_Ad_Insertion_Use_Cases#Implementation_Use_Cases)

In the absence of such mechanisms, web authors are forced to switch among
multiple `MediaSource` instances programmatically to approach work-arounds for the
specification gaps. Beyond complexity, a primary concern of those workarounds is
that they are limited to the scheduling of javascript execution; there can be
significant delays at transition points that impair the user experience.

Design consideration was given to alternative ideas that are not in scope of
this proposal:

* Leveraging in-band or application-provided text track cues to control the
  timing of track transitions among a dynamic set of SourceBuffers. Though this
  could possibly apply to any HTMLMediaElement (not just those extended by MSE),
  the complexity of this approach led us to propose a simpler change scoped to
  just MSE.
* Likewise, we rejected pursuing a new HTMLMediaElement (or perhaps TrackList)
  API that would enable web apps to programmatically declare similar kinds of
  track-change timings.
* We could continue to require same bytestream, but allow codec to vary with
  tracks of the same kind of media (e.g. audio or video) across initialization
  segments. This would be insufficient for supporting cross-bytestream
  switching.

Note that this proposal does not preclude separate effort to pursue these other
ideas.

## Proposed Plan

This proposal is focused on enabling cross-codec and cross-bytestream buffering
and playback of media in a single `MediaSource` instance.

While the REC version of [Media Source Extensions
API](https://www.w3.org/TR/media-source/) (MSE) supports adaptive playback of media,
that adaptation requires that any media appended to a `SourceBuffer` must
conform to the mimetype provided when initially creating the `SourceBuffer` via
`MediaSource.addSourceBuffer(`_type_`)`.

With the addition of a proposed `changeType` method on `SourceBuffer`, with a
_type_ parameter similar to that in the existing `addSourceBuffer` method on
`MediaSource`, a SourceBuffer could buffer and support playback across different
bytestream formats and codecs. This new method would retain previously buffered
media modulo future MSE coded frame eviction or removal, and leverage the
splicing and buffering logic in the existing MSE coded frame processing
algorithm.

If _type_ is not supported by the user agent for the `SourceBuffer`
and `MediaSource`, `changeType` would synchronously throw a `NotSupportedError`
exception (modulo the API would be unaware of potentially unsupported content
transitions, including those implicitly occurring via codec changes in
subsequent initialization segments when the codecs parameter of the
`SourceBuffer`'s MIME type is ambiguous, and including transitions involving
encrypted content - see also the Media Capabilities API's stream transitioning
work referenced in Resolved Questions, below.)

## Resolved Questions

##### Should the _initialization segment received algorithm_ continue to require the same number of audio, video and text tracks - and if more than one of a particular type, that the set of track IDs for that type be the same?

###### Pros:

For a long time, user agents (such as Chrome) chose the route of allowing a
maximum of one audio and one video track across all `SourceBuffers` in a
`MediaSource` instance. Practically, this met the REC MSE requirement; further,
it intended to improve the user experience such that only the expected media
would be fetched and incur resource utilization.

###### Cons:

Retaining this restriction precludes one of the
[Implementation Use Cases](https://www.w3.org/wiki/HTML/Media_Task_Force/MSE_Ad_Insertion_Use_Cases#Implementation_Use_Cases).

###### Route taken:

For simplicity, and due to the prevalence of MSE apps that use single-track
bytestreams and up to two `SourceBuffers` (one each for audio and video) to manage
adaptation of each independently, the _initialization segment received algorithm_
continues to require the same number of audio, video and text tracks - and if
more than one of a particular type, that the set of track IDs for that type
remain the same.  The algorithm is adjusted to allow codecs to change in the
initialization segment when the bytestream format does not change, even without
explicitly signalling `changeType()`. In this latter "implicit codec change"
situation, there is new non-normative text guiding both the API users and user
agent implementors, as some user agents may in short-term continue to disallow
implicit codec switching until they relax their codec-strictness for
`addSourceBuffer()` and `changeType()`.


##### Other than the existing `MEDIA_ERR_DECODE` and `MediaError.message` error reporting mechanism, is there a way applications could (ideally proactively, before fetching and buffering) determine whether or not the user agent has the capability of supporting playback across various levels of mixed encrypted and unencrypted content along with bytestream and codec changes?

###### Initial Thoughts:

This proposal is focused on the MSE API alone.  [Media
Capabilities](https://wicg.github.io/media-capabilities/) and [Encrypted Media
Extensions](https://www.w3.org/TR/encrypted-media/) may need work to support
such proactive queries.

###### Route taken:

Proactive codec and bytestream switching capability detection is being worked on
as part of the [Media Capabilities API: Transitioning between stream configurations proposal](https://github.com/WICG/media-capabilities/blob/master/explainer.md#transitioning-between-stream-configurations).


##### Should the proposed `changeType` method implicitly perform the _reset parser state algorithm_, or should it instead require the application to ensure the parser is reset (via `abort()`, if necessary)?

###### Initial Thoughts:

As there is no way currently for an application to be certain of the
`SourceBuffer`'s current _append state_, `changeType` should probably run the
_reset parser state algorithm_.

###### Route taken:

`changeType` includes running the _reset parser state algorithm_ once
preliminary state and support checks have passed.


##### To what level should we specify "seamless" playback across bytestream, codec (and perhaps encryption) changes?

###### Initial Thoughts and Route Taken:

This is likely a quality-of-implementation output, rather than a specified
input. Decoder reconfiguration, for instance, may not be sufficient in all
implementation instances, to support precision across a transition. This is
analogous to the same treatment of playback quality across adaptations allowed
by REC MSE today: implicitly quality-of-implementation.
