(function() {
  var HTML_spec_url = "http://www.w3.org/TR/html5/embedded-content-0.html";
  var DOM_spec_url = "http://dom.spec.whatwg.org/";
  var HRTIME_spec_url = "http://www.w3.org/TR/hr-time/";

  function eventdfn_helper(doc, df, id, text) {
    df.appendChild($("<dfn/>").attr({id: 'dom-evt-' + text.toLowerCase()}).wrapInner($("<code/>").text(text))[0]);
  }

  function idlref_helper(doc, df, id, text) {
    df.appendChild($("<code/>").wrapInner($("<a/>").attr({href: "#" + id}).text(text))[0]);
  }

  function eventref_helper(doc, df, id, text) {
    df.appendChild($("<code/>").wrapInner($("<a/>").attr({href: "#dom-evt-" + id}).text(text))[0]);
  }

  function videoref_helper(doc, df, id, text) {
    link_helper(doc, df, HTML_spec_url + '#' + id, text);
  }

  function code_videoref_helper(doc, df, id, text) {
    df.appendChild($("<code/>").wrapInner($("<a/>").attr({href: HTML_spec_url + "#" + id}).text(text))[0]);
  }

  function fileapi_helper(doc, df, id, text) {
    link_helper(doc, df, 'http://www.w3.org/TR/FileAPI/#' + id, text);
  }

  function hrtime_helper(doc, df, id, text) {
    link_helper(doc, df, HRTIME_spec_url + '#' + id, text);
  }


  function webappapis_helper(doc, df, id, text) {
    link_helper(doc, df, 'http://www.w3.org/TR/html5/webappapis.html#' + id, text);
  }

  function browsers_helper(doc, df, id, text) {
      link_helper(doc, df, 'http://www.w3.org/TR/html5/browsers.html#' + id, text);
  }

  function term_helper(doc, df, id, text) {
    link_helper(doc, df, '#'+ id, text);
  }

  function var_helper(doc, df, id, text) {
    df.appendChild($("<var/>").wrapInner($("<a/>").attr({href: id}).text(text))[0]);
  }

  function link_helper(doc, df, id, text) {
    df.appendChild($("<a/>").attr({href: id}).text(text)[0]);
  }

  function exception_helper(doc, df, id, text) {
    df.appendChild($("<code/>").wrapInner($("<a/>").attr({href: DOM_spec_url + '#dom-domexception-' + id}).text(text))[0]);
  }

  function webmref_helper(doc, df, id, text) {
    link_helper(doc, df, 'http://www.webmproject.org/code/specs/container/#' + id, text);
  }

  function queue_and_fire_helper(doc, df, id, text) {
    webappapis_helper(doc, df, 'queue-a-task', text);
    df.appendChild(doc.createTextNode(' to '));
    webappapis_helper(doc, df, 'fire-a-simple-event', 'fire a simple event');
    df.appendChild(doc.createTextNode(' named'));
  }

  function queue_and_fire_track_event_helper(doc, df, id, text) {
    webappapis_helper(doc, df, 'queue-a-task', 'Queue a task');
    df.appendChild(doc.createTextNode(' to fire a '));
    webappapis_helper(doc, df, 'concept-events-trusted', 'trusted event');
    df.appendChild(doc.createTextNode(' named '));
    code_videoref_helper(doc, df, 'handler-tracklist-on' + text, text);
    df.appendChild(doc.createTextNode(', that does not bubble and is not cancelable, and that uses the '));
    code_videoref_helper(doc, df, 'trackevent', 'TrackEvent');
    df.appendChild(doc.createTextNode(' interface,'));
  }

  function fragment_helper(doc, df, id, text) {
    var f = doc.createElement('span')
    f.innerHTML = text;
    df.appendChild(f);
  }

  function contributors_helper(doc, df, id, text) {
    var contributors = [
      "Bob Lund",
      "Alex Giladi",
      "Duncan Rowden",
      "Mark Vickers",
      "Glenn Adams",
      "Frank Galligan",
      "Steven Robertson",
      "Matt Ward",
      "David Dorwin",
      "Kevin Streeter",
      "Joe Steele",
      "Michael Thornburgh",
      "Philip Jägenstedt",
      "John Simmons",
      "Jerry Smith",
      "Pierre Lemieux",
      "Cyril Concolato",
      "Ralph Giles",
      "David Singer",
    ];

    contributors.sort();

    var str = "";
    for (var i = 0; i < contributors.length - 1; ++i) {
      if (i > 0)
	str += ", ";
      str += contributors[i];
    }
    str += ", and ";
    str += contributors[contributors.length - 1];

    df.appendChild(doc.createTextNode(str));
  }

  function eos_decode_helper(doc, df, id, text) {
    link_helper(doc, df, '#end-of-stream-algorithm', 'end of stream algorithm');
    df.appendChild(doc.createTextNode(' with the '));
    df.appendChild($("<var/>").text('error')[0]);
    df.appendChild(doc.createTextNode(' parameter set to '));
    idlref_helper(doc, df, 'idl-def-EndOfStreamError.decode', '"decode"');
  }

  var rep = {
    'sourceBuffers': { func: idlref_helper, fragment: 'widl-MediaSource-sourceBuffers', link_text: 'sourceBuffers',  },
    'activeSourceBuffers': { func: idlref_helper, fragment: 'widl-MediaSource-activeSourceBuffers', link_text: 'activeSourceBuffers',  },
    'addSourceBuffer': { func: idlref_helper, fragment: 'widl-MediaSource-addSourceBuffer-SourceBuffer-DOMString-type', link_text: 'addSourceBuffer()',  },
    'endOfStream': { func: idlref_helper, fragment: 'widl-MediaSource-endOfStream-void-EndOfStreamError-error', link_text: 'endOfStream()',  },
    'eos-decode': { func: eos_decode_helper, fragment: '#end-of-stream-algorithm', link_text: 'end of stream algorithm with <var>error</var> parameter set to "decode"',  },
    'readyState': { func: idlref_helper, fragment: 'widl-MediaSource-readyState', link_text: 'readyState',  },
    'duration': { func: idlref_helper, fragment: 'widl-MediaSource-duration', link_text: 'duration',  },

    'appendBuffer': { func: idlref_helper, fragment: 'widl-SourceBuffer-appendBuffer-void-ArrayBufferView-data', link_text: 'appendBuffer()',  },
    'appendStream': { func: idlref_helper, fragment: 'widl-SourceBuffer-appendStream-void-Stream-stream-unsigned-long-long-maxSize', link_text: 'appendStream()',  },
    'abort': { func: idlref_helper, fragment: 'widl-SourceBuffer-abort-void', link_text: 'abort()',  },
    'remove': { func: idlref_helper, fragment: 'widl-SourceBuffer-remove-void-double-start-double-end', link_text: 'remove()',  },
    'updating': { func: idlref_helper, fragment: 'widl-SourceBuffer-updating', link_text: 'updating',  },
    'sourcebuffer-audioTracks': { func: idlref_helper, fragment: 'widl-SourceBuffer-audioTracks', link_text: 'audioTracks',  },
    'sourcebuffer-videoTracks': { func: idlref_helper, fragment: 'widl-SourceBuffer-videoTracks', link_text: 'videoTracks',  },
    'sourcebuffer-textTracks': { func: idlref_helper, fragment: 'widl-SourceBuffer-textTracks', link_text: 'textTracks',  },
    'buffered': { func: idlref_helper, fragment: 'widl-SourceBuffer-buffered', link_text: 'buffered',  },
    'timestampOffset': { func: idlref_helper, fragment: 'widl-SourceBuffer-timestampOffset', link_text: 'timestampOffset',  },
    'appendWindowStart': { func: idlref_helper, fragment: 'widl-SourceBuffer-appendWindowStart', link_text: 'appendWindowStart', },
    'appendWindowEnd': { func: idlref_helper, fragment: 'widl-SourceBuffer-appendWindowEnd', link_text: 'appendWindowEnd', },
    'AppendMode-segments': { func: idlref_helper, fragment: 'idl-def-AppendMode.segments', link_text: '"segments"',  },
    'AppendMode-sequence': { func: idlref_helper, fragment: 'idl-def-AppendMode.sequence', link_text: '"sequence"',  },
    'mode': { func: idlref_helper, fragment: 'widl-SourceBuffer-mode', link_text: 'mode',  },

    'length': { func: idlref_helper, fragment: 'widl-SourceBufferList-length', link_text: 'length',  },
    'creationTime': { func: idlref_helper, fragment: 'widl-VideoPlaybackQuality-creationTime', link_text: 'creationTime',  },
    'totalVideoFrames': { func: idlref_helper, fragment: 'widl-VideoPlaybackQuality-totalVideoFrames', link_text: 'totalVideoFrames',  },
    'droppedVideoFrames': { func: idlref_helper, fragment: 'widl-VideoPlaybackQuality-droppedVideoFrames', link_text: 'droppedVideoFrames',  },
    'corruptedVideoFrames': { func: idlref_helper, fragment: 'widl-VideoPlaybackQuality-corruptedVideoFrames', link_text: 'corruptedVideoFrames',  },
    'playbackJitter': { func: idlref_helper, fragment: 'widl-VideoPlaybackQuality-playbackJitter', link_text: 'playbackJitter',  },
    'createObjectURL': { func: idlref_helper, fragment: 'widl-URL-createObjectURL-DOMString-MediaSource-mediaSource', link_text: 'createObjectURL()',  },
    'open': { func: idlref_helper, fragment: 'idl-def-ReadyState.open', link_text: '"open"',  },
    'closed': { func: idlref_helper, fragment: 'idl-def-ReadyState.closed', link_text: '"closed"',  },
    'ended': { func: idlref_helper, fragment: 'idl-def-ReadyState.ended', link_text: '"ended"',  },
    'network': { func: idlref_helper, fragment: 'idl-def-EndOfStreamError.network', link_text: '"network"',  },
    'decode': { func: idlref_helper, fragment: 'idl-def-EndOfStreamError.decode', link_text: '"decode"',  },

    'updatestart': { func: eventref_helper, fragment: 'updatestart', link_text: 'updatestart',  },
    'update': { func: eventref_helper, fragment: 'update', link_text: 'update', },
    'updateend': { func: eventref_helper, fragment: 'updateend', link_text: 'updateend', },
    'updateerror': { func: eventref_helper, fragment: 'error', link_text: 'error',  },
    'updateabort': { func: eventref_helper, fragment: 'abort', link_text: 'abort',  },

    'sourceopen': { func: eventref_helper, fragment: 'sourceopen', link_text: 'sourceopen',  },
    'sourceended': { func: eventref_helper, fragment: 'sourceended', link_text: 'sourceended',  },
    'sourceclose': { func: eventref_helper, fragment: 'sourceclose', link_text: 'sourceclose',  },
    'addsourcebuffer': { func: eventref_helper, fragment: 'addsourcebuffer', link_text: 'addsourcebuffer',  },
    'removesourcebuffer': { func: eventref_helper, fragment: 'removesourcebuffer', link_text: 'removesourcebuffer',  },

    'init-segment': { func: term_helper, fragment: 'init-segment', link_text: 'initialization segment', },
    'init-segments': { func: term_helper, fragment: 'init-segment', link_text: 'initialization segments', },
    'media-segment': { func: term_helper, fragment: 'media-segment', link_text: 'media segment', },
    'media-segments': { func: term_helper, fragment: 'media-segment', link_text: 'media segments', },
    'presentation-start-time': { func: term_helper, fragment: 'presentation-start-time', link_text: 'presentation start time', },
    'random-access-point': { func: term_helper, fragment: 'random-access-point', link_text: 'random access point', },
    'track-id': { func: term_helper, fragment: 'track-id', link_text: 'Track ID', },
    'track-ids': { func: term_helper, fragment: 'track-id', link_text: 'Track IDs', },
    'track-description': { func: term_helper, fragment: 'track-description', link_text: 'track description', },
    'track-descriptions': { func: term_helper, fragment: 'track-description', link_text: 'track descriptions', },
    'coded-frame': { func: term_helper, fragment: 'coded-frame', link_text: 'coded frame', },
    'coded-frames': { func: term_helper, fragment: 'coded-frame', link_text: 'coded frames', },
    'parent-media-source': { func: term_helper, fragment: 'parent-media-source', link_text: 'parent media source', },
    'coded-frame-group': { func: term_helper, fragment: 'coded-frame-group', link_text: 'coded frame group', },
    'display-duration-error': { func: term_helper, fragment: 'display-duration-error', link_text: 'display duration error', },
    'display-duration-errors': { func: term_helper, fragment: 'display-duration-error', link_text: 'display duration errors', },
    'append-window': { func: term_helper, fragment: 'append-window', link_text: 'append window', },
    'enough-data': { func: term_helper, fragment: 'enough-data', link_text: 'enough data to ensure uninterrupted playback', },
    'active-track-buffers': { func: term_helper, fragment: 'active-track-buffers', link_text: 'active track buffers', },

    'duration-change-algorithm': { func: link_helper, fragment: '#duration-change-algorithm', link_text: 'duration change algorithm', },
    'end-of-stream-algorithm': { func: link_helper, fragment: '#end-of-stream-algorithm', link_text: 'end of stream algorithm', },
    'segment-parser-loop': { func: link_helper, fragment: '#sourcebuffer-segment-parser-loop', link_text: 'segment parser loop', },
    'append-state': { func: var_helper, fragment: '#sourcebuffer-append-state', link_text: 'append state', },
    'waiting-for-segment': { func: link_helper, fragment: '#sourcebuffer-waiting-for-segment', link_text: 'WAITING_FOR_SEGMENT', },
    'parsing-init-segment': { func: link_helper, fragment: '#sourcebuffer-parsing-init-segment', link_text: 'PARSING_INIT_SEGMENT', },
    'parsing-media-segment': { func: link_helper, fragment: '#sourcebuffer-parsing-media-segment', link_text: 'PARSING_MEDIA_SEGMENT', },
    'byte-stream-format-spec': { func: link_helper, fragment: '#byte-stream-formats', link_text: 'byte stream format specification', },
    'byte-stream-format-specs': { func: link_helper, fragment: '#byte-stream-formats', link_text: 'byte stream format specifications', },
    'sourcebuffer-byte-stream-format-spec': { func: link_helper, fragment: '#sourcebuffer-byte-stream-format-spec', link_text: 'SourceBuffer byte stream format specification', },
    'append-error-algorithm': { func: link_helper, fragment: '#sourcebuffer-append-error', link_text: 'append error algorithm', },
    'reset-parser-state-algorithm': { func: link_helper, fragment: '#sourcebuffer-reset-parser-state', link_text: 'reset parser state algorithm', },
    'stream-append-loop': { func: link_helper, fragment: '#sourcebuffer-stream-append-loop', link_text: 'stream append loop', },
    'prepare-append': { func: link_helper, fragment: '#sourcebuffer-prepare-append', link_text: 'prepare append', },
    'buffer-append': { func: link_helper, fragment: '#sourcebuffer-buffer-append', link_text: 'buffer append ', },
    'init-segment-received-algorithm': { func: link_helper, fragment: '#sourcebuffer-init-segment-received', link_text: 'initialization segment received algorithm', },
    'coded-frame-processing-algorithm': { func: link_helper, fragment: '#sourcebuffer-coded-frame-processing', link_text: 'coded frame processing algorithm', },
    'coded-frame-removal-algorithm': { func: link_helper, fragment: '#sourcebuffer-coded-frame-removal', link_text: 'coded frame removal algorithm', },
    'coded-frame-eviction-algorithm': { func: link_helper, fragment: '#sourcebuffer-coded-frame-eviction', link_text: 'coded frame eviction algorithm', },
    'audio-splice-frame-algorithm': { func: link_helper, fragment: '#sourcebuffer-audio-splice-frame-algorithm', link_text: 'audio splice frame algorithm', },
    'audio-splice-rendering-algorithm': { func: link_helper, fragment: '#sourcebuffer-audio-splice-rendering-algorithm', link_text: 'audio splice rendering algorithm', },
    'text-splice-frame-algorithm': { func: link_helper, fragment: '#sourcebuffer-text-splice-frame-algorithm', link_text: 'text splice frame algorithm', },
    'input-buffer': { func: var_helper, fragment: '#sourcebuffer-input-buffer', link_text: 'input buffer', },
    'buffer-full-flag': { func: var_helper, fragment: '#sourcebuffer-buffer-full-flag', link_text: 'buffer full flag', },
    'group-start-timestamp': { func: var_helper, fragment: '#sourcebuffer-group-start-timestamp', link_text: 'group start timestamp', },
    'highest-presentation-end-timestamp': { func: var_helper, fragment: '#sourcebuffer-highest-presentation-end-timestamp', link_text: 'highest presentation end timestamp', },
    'MediaSource-object-URL': { func: link_helper, fragment: '#mediasource-object-url', link_text: 'MediaSource object URL', },
    'first-init-segment-flag': { func: var_helper, fragment: '#first-init-segment-flag', link_text: 'first initialization segment flag', },

    'track-buffer': { func: term_helper, fragment: 'track-buffer', link_text: 'track buffer', },
    'track-buffers': { func: term_helper, fragment: 'track-buffer', link_text: 'track buffers', },
    'last-decode-timestamp': { func: var_helper, fragment: '#last-decode-timestamp', link_text: 'last decode timestamp', },
    'last-frame-duration': { func: var_helper, fragment: '#last-frame-duration', link_text: 'last frame duration', },
    'highest-presentation-timestamp': { func: var_helper, fragment: '#highest-presentation-timestamp', link_text: 'highest presentation timestamp', },
    'need-RAP-flag': { func: var_helper, fragment: '#need-RAP-flag', link_text: 'need random access point flag', },

    'blob-uri': { func: fileapi_helper, fragment: 'url', link_text: 'Blob URI',  },
    'blob-origin': { func: fileapi_helper, fragment: 'originOfBlob', link_text: 'Origin of Blob URIs', },
    'File': { func: fileapi_helper, fragment: 'dfn-file', link_text: 'File', },
    'Blob': { func: fileapi_helper, fragment: 'dfn-Blob', link_text: 'Blob',  },
    'URL': { func: fileapi_helper, fragment: 'URL-object', link_text: 'URL',  },
    'file-createObjectURL': { func: fileapi_helper, fragment: 'dfn-createObjectURL', link_text: 'createObjectURL()',  },
    'file-revokeObjectURL': { func: fileapi_helper, fragment: 'dfn-revokeObjectURL', link_text: 'revokeObjectURL()',  },

    'eventdfn': { func: eventdfn_helper, fragment: '', link_text: '', },

    'videoref': { func: videoref_helper, fragment: '', link_text: '', },
    'media-timeline': { func: videoref_helper, fragment: 'media-timeline', link_text: 'media timeline',  },
    'media-element-load-algorithm': { func: videoref_helper, fragment: 'media-element-load-algorithm', link_text: 'media element load algorithm',  },
    'resource-fetch-algorithm': { func: videoref_helper, fragment: 'concept-media-load-resource', link_text: 'resource fetch algorithm',  },
    'intrinsic-width-and-height': { func: videoref_helper, fragment: 'concept-video-intrinsic-width', link_text: 'intrinsic width and height',  },
    'normalized-timeranges-object': { func: videoref_helper, fragment: 'normalized-timeranges-object', link_text: 'normalized TimeRanges object',  },
    'current-playback-position': { func: videoref_helper, fragment: 'current-playback-position', link_text: 'current playback position',  },
    'media-data-is-corrupted': { func: videoref_helper, fragment: 'fatal-decode-error', link_text: 'media data is corrupted',  },
    'media-src': { func: code_videoref_helper, fragment: 'attr-media-src', link_text: 'src',  },
    'timerange': { func: code_videoref_helper, fragment: 'timeranges', link_text: 'TimeRange',  },
    'timeranges': { func: code_videoref_helper, fragment: 'timeranges', link_text: 'TimeRanges',  },
    'tracklist-change': { func: code_videoref_helper, fragment: 'handler-tracklist-onchange', link_text: 'change',  },
    'video-track': { func: code_videoref_helper, fragment: 'videotrack', link_text: 'VideoTrack',  },
    'video-track-list': { func: code_videoref_helper, fragment: 'videotracklist', link_text: 'VideoTrackList', },
    'videotrack-id': { func: code_videoref_helper, fragment: 'dom-videotrack-id', link_text: 'id', },
    'videotrack-kind': { func: code_videoref_helper, fragment: 'dom-videotrack-kind', link_text: 'kind', },
    'videotrack-language': { func: code_videoref_helper, fragment: 'dom-videotrack-language', link_text: 'language', },
    'videotrack-selected': { func: code_videoref_helper, fragment: 'dom-videotrack-selected', link_text: 'selected', },
    'videotrack-sourceBuffer': { func: idlref_helper, fragment: 'widl-VideoTrack-sourceBuffer', link_text: 'sourceBuffer', },
    'videotracklist-length': { func: code_videoref_helper, fragment: 'dom-videotracklist-length', link_text: 'length',  },
    'videotracks': { func: code_videoref_helper, fragment: 'dom-media-videotracks', link_text: 'videoTracks',  },
    'audio-track': { func: code_videoref_helper, fragment: 'audiotrack', link_text: 'AudioTrack',  },
    'audio-track-list': { func: code_videoref_helper, fragment: 'audiotracklist', link_text: 'AudioTrackList', },
    'audiotracklist-length': { func: code_videoref_helper, fragment: 'dom-audiotracklist-length', link_text: 'length', },
    'audiotracks': { func: code_videoref_helper, fragment: 'dom-media-audiotracks', link_text: 'audioTracks',  },
    'audiotrack-id': { func: code_videoref_helper, fragment: 'dom-audiotrack-id', link_text: 'id',  },
    'audiotrack-kind': { func: code_videoref_helper, fragment: 'dom-audiotrack-kind', link_text: 'kind', },
    'audiotrack-language': { func: code_videoref_helper, fragment: 'dom-audiotrack-language', link_text: 'language', },
    'audiotrack-enabled': { func: code_videoref_helper, fragment: 'dom-audiotrack-enabled', link_text: 'enabled', },
    'audiotrack-sourceBuffer': { func: idlref_helper, fragment: 'widl-AudioTrack-sourceBuffer', link_text: 'sourceBuffer', },
    'text-track': { func: code_videoref_helper, fragment: 'texttrack', link_text: 'TextTrack',  },
    'text-track-list': { func: code_videoref_helper, fragment: 'texttracklist', link_text: 'TextTrackList', },
    'texttracks': { func: code_videoref_helper, fragment: 'dom-media-texttracks', link_text: 'textTracks', },
    'texttrack-mode': { func: code_videoref_helper, fragment: 'dom-texttrack-mode', link_text: 'mode',  },
    'texttrack-kind': { func: code_videoref_helper, fragment: 'dom-texttrack-kind', link_text: 'kind', },
    'texttrack-language': { func: code_videoref_helper, fragment: 'dom-texttrack-language', link_text: 'language', },
    'texttrack-showing': { func: code_videoref_helper, fragment: 'dom-texttrack-showing', link_text: '"showing"', },
    'texttrack-hidden': { func: code_videoref_helper, fragment: 'dom-texttrack-hidden', link_text: '"hidden"',  },
    'texttrack-sourceBuffer': { func: idlref_helper, fragment: 'widl-TextTrack-sourceBuffer', link_text: 'sourceBuffer', },
    'ready-state': { func: code_videoref_helper, fragment: 'dom-media-readystate', link_text: 'HTMLMediaElement.readyState',  },
    'have-nothing': { func: code_videoref_helper, fragment: 'dom-media-have_nothing', link_text: 'HAVE_NOTHING',  },
    'have-metadata': { func: code_videoref_helper, fragment: 'dom-media-have_metadata', link_text: 'HAVE_METADATA',  },
    'have-current-data': { func: code_videoref_helper, fragment: 'dom-media-have_current_data', link_text: 'HAVE_CURRENT_DATA',  },
    'have-future-data': { func: code_videoref_helper, fragment: 'dom-media-have_future_data', link_text: 'HAVE_FUTURE_DATA',  },
    'have-enough-data': { func: code_videoref_helper, fragment: 'dom-media-have_enough_data', link_text: 'HAVE_ENOUGH_DATA',  },
    'loadedmetadata': { func: code_videoref_helper, fragment: 'event-media-loadedmetadata', link_text: 'loadedmetadata',  },
    'loadeddata': { func: code_videoref_helper, fragment: 'event-media-loadeddata', link_text: 'loadeddata',  },
    'canplay': { func: code_videoref_helper, fragment: 'event-media-canplay', link_text: 'canplay',  },
    'canplaythrough': { func: code_videoref_helper, fragment: 'event-media-canplaythrough', link_text: 'canplaythrough',  },
    'htmlmediaelement': { func: code_videoref_helper, fragment: 'htmlmediaelement', link_text: 'HTMLMediaElement',  },
    'hme-duration': { func: code_videoref_helper, fragment: 'media-controller-duration', link_text: 'media controller duration',  },
    'hme-buffered': { func: code_videoref_helper, fragment: 'dom-media-buffered', link_text: 'HTMLMediaElement.buffered',  },
    'hme-seek-algorithm': { func: videoref_helper, fragment: 'dom-media-seek', link_text: 'seek algorithm',  },
    'hme-duration-change-algorithm': { func: videoref_helper, fragment: 'durationChange', link_text: 'HTMLMediaElement duration change algorithm',  },
    'htmlvideoelement': { func: code_videoref_helper, fragment: 'htmlvideoelement', link_text: 'HTMLVideoElement',  },

    'total-video-frame-count': { func: var_helper, fragment: '#total-video-frame-count', link_text: 'total video frame count', },
    'dropped-video-frame-count': { func: var_helper, fragment: '#dropped-video-frame-count', link_text: 'dropped video frame count', },
    'corrupted-video-frame-count': { func: var_helper, fragment: '#corrupted-video-frame-count', link_text: 'corrupted video frame count', },
    'display-duration-error-sum': { func: var_helper, fragment: '#display-duration-error-sum', link_text: 'display duration error sum', },

    'invalid-access-err': { func: exception_helper, fragment: 'invalid_access_err', link_text: 'INVALID_ACCESS_ERR',  },
    'invalid-state-err': { func: exception_helper, fragment: 'invalid_state_err', link_text: 'INVALID_STATE_ERR',  },
    'not-found-err': { func: exception_helper, fragment: 'not_found_err', link_text: 'NOT_FOUND_ERR',  },
    'not-supported-err': { func: exception_helper, fragment: 'not_supported_err', link_text: 'NOT_SUPPORTED_ERR',  },
    'quota-exceeded-err': { func: exception_helper, fragment: 'quota_exceeded_err', link_text: 'QUOTA_EXCEEDED_ERR',  },

    'queue-a-task-to-fire-an-event-named': { func: queue_and_fire_helper, fragment: '', link_text: 'queue a task',  },
    'Queue-a-task-to-fire-an-event-named': { func: queue_and_fire_helper, fragment: '', link_text: 'Queue a task',  },
    'Queue-and-fire-addtrack': { func: queue_and_fire_track_event_helper, fragment: '', link_text: 'addtrack',  },
    'Queue-and-fire-removetrack': { func: queue_and_fire_track_event_helper, fragment: '', link_text: 'removetrack',  },
    'provide-a-stable-state': { func: webappapis_helper, fragment: 'provide-a-stable-state', link_text: 'provide a stable state',  },

    'origin': { func: browsers_helper, fragment: 'origin-0', link_text: 'origin', },

    'webm-spec': { func: webmref_helper, fragment: 'webm-guidelines', link_text: 'WebM spec',  },
    'webm-ebml-header': { func: webmref_helper, fragment: 'ebml-basics', link_text: 'EBML Header',  },
    'webm-segment': { func: webmref_helper, fragment: 'segment', link_text: 'Segment',  },
    'webm-info': { func: webmref_helper, fragment: 'segment-information', link_text: 'Segment Information',  },
    'webm-tracks': { func: webmref_helper, fragment: 'track', link_text: 'Tracks',  },
    'webm-cues': { func: webmref_helper, fragment: 'cueing-data', link_text: 'Cues',  },
    'webm-chapters': { func: webmref_helper, fragment: 'chapters', link_text: 'Chapters',  },
    'webm-cluster': { func: webmref_helper, fragment: 'cluster', link_text: 'Cluster',  },
    'webm-muxer-guidelines': { func: webmref_helper, fragment: 'muxer-guidelines', link_text: 'WebM Muxer Guidelines',  },
    'webm-init-segment': { func: link_helper, fragment: '#webm-init-segments', link_text: 'WebM initialization segment', },

    'iso-14496-12': { func: link_helper, fragment: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/c061988_ISO_IEC_14496-12_2012.zip', link_text: 'ISO/IEC 14496-12', },

    'iso-13818-1': { func: link_helper, fragment: 'http://www.iso.org/iso/home/store/catalogue_tc/catalogue_detail.htm?csnumber=44169', link_text: 'ISO/IEC 13818-1', },

    'mpeg2ts-timestampOffset': { func: var_helper, fragment: '#mpeg2ts-timestampOffset', link_text: 'MPEG2TS_timestampOffset', },


    'media-data-cannot-be-fetched': { func: fragment_helper, fragment: '', link_text: '&quot;<i>If the media data cannot be fetched at all, due to network errors, causing the user agent to give up trying to fetch the resource</i>&quot;', },
    'perform-potentially-cors-enabled-fetch': { func: fragment_helper, fragment: '', link_text: '&quot;<i>Perform a potentially CORS-enabled fetch</i>&quot;', },

    'contributors': { func: contributors_helper, fragment: '', link_text: '', },

    'performance-now': { func: hrtime_helper, fragment: 'dom-performance-now', link_text: 'Performance.now()',  },
  };

  function mediaSourcePreProcessor() {
     $("a[def-id]").each(function () {
       $(this).addClass('externalDFN');
     });
  }

  function mediaSourcePostProcessor() {
    var doc = document;
    doc.normalize();

    var usedMap = {};

    $("a[def-id]").each(function () {
      var $ant = $(this);
      var def_id = $ant.attr('def-id');
      var info = rep[def_id];
      if (info) {
	if (!usedMap[def_id]) {
	  usedMap[def_id] = 1;
	} else {
	  usedMap[def_id]++;
	}

	var id = info.fragment;
	var text = info.link_text;

	if ($ant.attr('name')) {
	  id = $ant.attr('name');
	}

	var element_text = this.innerHTML;
	if (element_text) {
	  text = element_text;
	}

	var df = doc.createDocumentFragment();
        info.func(doc, df, id, text);
	this.parentNode.replaceChild(df, this);

      } else {
        console.log("Found def-id '" + def_id + "' but it does not correspond to anything");
      }
    });

    // Update links to external type definitions.
    var externalClassInfo = {
      'Stream': { spec: 'streams-api', fragment: 'idl-def-Stream' },
      'AudioTrackList': {spec: 'html5', fragment: 'audiotracklist' },
      'TextTrackList': {spec: 'html5', fragment: 'texttracklist' },
      'TimeRanges': { spec: 'html5', fragment: 'timeranges' },
      'VideoTrackList': {spec: 'html5', fragment: 'videotracklist' },
      'EventTarget': { spec: 'dom', fragment: 'eventtarget' },
      'DOMString': { spec: 'webidl', fragment: 'idl-DOMString' },
      'boolean': { spec: 'webidl', fragment: 'idl-boolean' },
      'double': { spec: 'webidl', fragment: 'idl-double' },
      'unrestricted double': { spec: 'webidl', fragment: 'idl-unrestricted-double' },
      'unsigned long': { spec: 'webidl', fragment: 'idl-unsigned-long' },
      'unsigned long long': { spec: 'webidl', fragment: 'idl-unsigned-long-long' },
      'void': { spec: 'webidl', fragment: 'idl-void' },
      'ArrayBuffer': { spec: 'typed-array', fragment: 'ArrayBuffer' },
      'ArrayBufferView': { spec: 'typed-array', fragment: 'ArrayBufferView' },
      'DOMHighResTimeStamp': { spec: 'hr-time', fragment: 'sec-DOMHighResTimeStamp'},
    };
    $("a:not([href])").each(function () {
      var $ant = $(this);
      var className = this.innerHTML;
      var info = externalClassInfo[className];
      if (info) {
	var id = info.fragment;
	var df = doc.createDocumentFragment();
	var baseURL = null;
	if (info.spec == 'streams-api') {
	  baseURL = "http://dvcs.w3.org/hg/streams-api/raw-file/tip/Overview.htm";
        } else if (info.spec == 'html5') {
	  baseURL = HTML_spec_url;
	} else if (info.spec == 'dom') {
	  baseURL = DOM_spec_url;
        } else if (info.spec == 'webidl') {
	  baseURL = "http://dev.w3.org/2006/webapi/WebIDL/";
        } else if (info.spec == 'typed-array') {
	  baseURL = "http://www.khronos.org/registry/typedarray/specs/latest/";
        } else if (info.spec == 'hr-time') {
	  baseURL = HRTIME_spec_url;
	}

	if (baseURL) {
	  df.appendChild($("<code/>").wrapInner($("<a/>").attr({href: baseURL + "#" + id, 'class': 'idlType'}).text(className))[0]);
	  this.parentNode.replaceChild(df, this);
	}
      }
    });

    // Move algorithm text after method parameter & return value information.
    $("ol.method-algorithm").each(function() {
      var parent = this.parentNode;
      parent.removeChild(this);
      parent.appendChild($("<p/>").text("When this method is invoked, the user agent must run the following steps:")[0]);
      parent.appendChild(this);
    });

    // Validate that all defined def-ids are actually used.
    for (var k in rep) {
      if (!usedMap[k]) {
	console.log("def-id '" + k + "' never used.");
      }
    }

    $("a[href]").each(function () {
      var link = $(this);
      var href = link.attr('href');
      var matched = /^#(.+)$/.exec(href);
      if (matched) {
	var id = matched[1];
	if (!document.getElementById(id)) {
	  console.log("Internal link to an id '" + id + "' which does not exist");
	}
      }
    });

    return;
  }

  window.mediaSourcePreProcessor = mediaSourcePreProcessor;
  window.mediaSourcePostProcessor = mediaSourcePostProcessor;
})();