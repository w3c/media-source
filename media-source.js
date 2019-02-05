(function() {
  var MSE_spec_url = "https://www.w3.org/TR/media-source/";
  var HTML5_spec_url = "https://www.w3.org/TR/html51/semantics-embedded-content.html";
  var HTML5_infrastructure_spec_url = "https://www.w3.org/TR/html51/infrastructure.html";
  var HTML5_browsers_spec_url = "https://www.w3.org/TR/html51/browsers.html";
  var HTML5_webappapis_spec_url = "https://www.w3.org/TR/html51/webappapis.html";
  var DOM_spec_url = "https://dom.spec.whatwg.org/";
  var HRTIME_spec_url = "https://www.w3.org/TR/hr-time/";
  var W3C_STREAMS_spec_url = "https://www.w3.org/TR/streams-api/"; // Make sure this matches the localBiblio entry.
  var WHATWG_STREAMS_spec_url = "https://streams.spec.whatwg.org/"; // Make sure this matches the localBiblio entry.
  var FILE_spec_url = "https://www.w3.org/TR/FileAPI/";
  var WEBIDL_spec_url = "https://www.w3.org/TR/WebIDL-1/";

  function url_helper(doc, url) {
    if (url[0] == "#" && doc.mseDefGroupName != window.respecConfig.mseDefGroupName) {
      return groupBaseURLs[doc.mseDefGroupName] + url;
    }
    return url;
  }

  function eventdfn_helper(doc, df, id, text) {
    df.appendChild($("<dfn/>").attr({id: 'dom-evt-' + text.toLowerCase()}).wrapInner($("<code/>").text(text))[0]);
  }

  function idlref_helper(doc, df, id, text) {
    df.appendChild($("<code/>").wrapInner($("<a/>").attr({href: url_helper(doc, "#" + id)}).text(text))[0]);
  }

  function eventref_helper(doc, df, id, text) {
    df.appendChild($("<code/>").wrapInner($("<a/>").attr({href: url_helper(doc, "#dom-evt-" + id)}).text(text))[0]);
  }

  function videoref_helper(doc, df, id, text) {
    link_helper(doc, df, HTML5_spec_url + '#' + id, text);
  }

  function code_videoref_helper(doc, df, id, text) {
    df.appendChild($("<code/>").wrapInner($("<a/>").attr({href: HTML5_spec_url + "#" + id}).text(text))[0]);
  }

  function fileapi_helper(doc, df, id, text) {
    link_helper(doc, df, FILE_spec_url + '#' + id, text);
  }

  function hrtime_helper(doc, df, id, text) {
    link_helper(doc, df, HRTIME_spec_url + '#' + id, text);
  }

  function webappapis_helper(doc, df, id, text) {
    link_helper(doc, df, HTML5_webappapis_spec_url + '#' + id, text);
  }

  function infrastructure_helper(doc, df, id, text) {
    link_helper(doc, df, HTML5_infrastructure_spec_url + '#' + id, text);
  }

  function browsers_helper(doc, df, id, text) {
    link_helper(doc, df, HTML5_browsers_spec_url + '#' + id, text);
  }

  function term_helper(doc, df, id, text) {
    link_helper(doc, df, url_helper(doc, '#' + id), text);
  }

  function var_helper(doc, df, id, text) {
    df.appendChild($("<var/>").wrapInner($("<a/>").attr({href: url_helper(doc, id)}).text(text))[0]);
  }

  function link_helper(doc, df, id, text) {
    df.appendChild($("<a/>").attr({href: url_helper(doc, id)}).text(text)[0]);
  }

  function exception_helper(doc, df, id, text) {
    df.appendChild($("<code/>").wrapInner($("<a/>").attr({href: WEBIDL_spec_url + '#' + id}).text(text))[0]);
  }

  function typeerror_helper(doc, df, id, text) {
    df.appendChild($("<code/>").text(text)[0]);
  }

  function webmref_helper(doc, df, id, text) {
    link_helper(doc, df, 'http://www.webmproject.org/code/specs/container/#' + id, text);
  }

  function whatwg_streams_helper(doc, df, id, text) {
    link_helper(doc, df, WHATWG_STREAMS_spec_url + '#' + id, text);
  }

  function queue_and_fire_helper(doc, df, id, text) {
    webappapis_helper(doc, df, 'queuing', text);
    df.appendChild(doc.createTextNode(' to '));
    infrastructure_helper(doc, df, 'fire', 'fire a simple event');
    df.appendChild(doc.createTextNode(' named'));
  }

  function queue_and_fire_track_event_helper_with_track_attr_initialized_to(doc, df, id, text) {
    webappapis_helper(doc, df, 'queuing', 'queue a task');
    df.appendChild(doc.createTextNode(' to fire a '));
    infrastructure_helper(doc, df, 'trusted', 'trusted event');
    df.appendChild(doc.createTextNode(' named '));
    code_videoref_helper(doc, df, 'dom-' + id + 'tracklist-on' + text, text);
    df.appendChild(doc.createTextNode(', that does not bubble and is not cancelable, and that uses the '));
    code_videoref_helper(doc, df, 'trackevent-trackevent', 'TrackEvent');
    df.appendChild(doc.createTextNode(' interface, with the '));
    code_videoref_helper(doc, df, 'dom-trackevent-track', 'track');
    df.appendChild(doc.createTextNode(' attribute initialized to '));
  }

  function fragment_helper(doc, df, id, text) {
    var f = doc.createElement('span')
    f.innerHTML = text;
    df.appendChild(f);
  }

  function contributors_helper(doc, df, id, text) {
    var contributors = window.respecConfig.mseContributors;
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

  function append_error_helper(doc, df, id, text) {
    link_helper(doc, df, id, 'append error algorithm');
  }

  var mseDefinitions = {
    'mse-spec': { func: link_helper, fragment: '#', link_text: 'Media Source Extensions™', },
    'live-seekable-range': { func: var_helper, fragment: '#live-seekable-range', link_text: 'live seekable range', },
    'sourceBuffers': { func: idlref_helper, fragment: 'dom-mediasource-sourcebuffers', link_text: 'sourceBuffers',  },
    'activeSourceBuffers': { func: idlref_helper, fragment: 'dom-mediasource-activesourcebuffers', link_text: 'activeSourceBuffers',  },
    'addSourceBuffer': { func: idlref_helper, fragment: 'dom-mediasource-addsourcebuffer', link_text: 'addSourceBuffer()',  },
    'endOfStream': { func: idlref_helper, fragment: 'dom-mediasource-endofstream', link_text: 'endOfStream()',  },
    'readyState': { func: idlref_helper, fragment: 'dom-readystate', link_text: 'readyState',  },
    'duration': { func: idlref_helper, fragment: 'dom-mediasource-duration', link_text: 'duration',  },
    'setLiveSeekableRange': { func: idlref_helper, fragment: 'dom-mediasource-setliveseekablerange', link_text: 'setLiveSeekableRange()',  },
    'clearLiveSeekableRange': { func: idlref_helper, fragment: 'dom-mediasource-clearliveseekablerange', link_text: 'clearLiveSeekableRange()',  },
    'isTypeSupported': { func: idlref_helper, fragment: 'dom-mediasource-istypesupported', link_text: 'isTypeSupported()',  },

    'appendBuffer': { func: idlref_helper, fragment: 'dom-sourcebuffer-appendbuffer', link_text: 'appendBuffer()',  },
    'abort': { func: idlref_helper, fragment: 'dom-sourcebuffer-abort', link_text: 'abort()',  },
    'remove': { func: idlref_helper, fragment: 'dom-sourcebuffer-remove', link_text: 'remove()',  },
    'updating': { func: idlref_helper, fragment: 'dom-sourcebuffer-updating', link_text: 'updating',  },
    'sourcebuffer-audioTracks': { func: idlref_helper, fragment: 'dom-sourcebuffer-audiotracks', link_text: 'audioTracks',  },
    'sourcebuffer-videoTracks': { func: idlref_helper, fragment: 'dom-sourcebuffer-videotracks', link_text: 'videoTracks',  },
    'sourcebuffer-textTracks': { func: idlref_helper, fragment: 'dom-sourcebuffer-texttracks', link_text: 'textTracks',  },
    'buffered': { func: idlref_helper, fragment: 'dom-sourcebuffer-buffered', link_text: 'buffered',  },
    'timestampOffset': { func: idlref_helper, fragment: 'dom-sourcebuffer-timestampoffset', link_text: 'timestampOffset',  },
    'appendWindowStart': { func: idlref_helper, fragment: 'dom-sourcebuffer-appendwindowstart', link_text: 'appendWindowStart', },
    'appendWindowEnd': { func: idlref_helper, fragment: 'dom-sourcebuffer-appendwindowend', link_text: 'appendWindowEnd', },
    'AppendMode-segments': { func: idlref_helper, fragment: 'idl-def-AppendMode.segments', link_text: '"segments"',  },
    'AppendMode-sequence': { func: idlref_helper, fragment: 'idl-def-AppendMode.sequence', link_text: '"sequence"',  },
    'mode': { func: idlref_helper, fragment: 'dom-sourcebuffer-mode', link_text: 'mode',  },

    'SourceBufferList-length': { func: idlref_helper, fragment: 'dom-sourcebufferlist-length', link_text: 'length',  },
    'createObjectURL': { func: fileapi_helper, fragment: 'dfn-createObjectURL', link_text: 'createObjectURL()',  },
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
    'random-access-points': { func: term_helper, fragment: 'random-access-point', link_text: 'random access points', },
    'track-id': { func: term_helper, fragment: 'track-id', link_text: 'Track ID', },
    'track-ids': { func: term_helper, fragment: 'track-id', link_text: 'Track IDs', },
    'track-description': { func: term_helper, fragment: 'track-description', link_text: 'track description', },
    'track-descriptions': { func: term_helper, fragment: 'track-description', link_text: 'track descriptions', },
    'coded-frame': { func: term_helper, fragment: 'coded-frame', link_text: 'coded frame', },
    'coded-frames': { func: term_helper, fragment: 'coded-frame', link_text: 'coded frames', },
    'coded-frame-duration': { func: term_helper, fragment: 'coded-frame-duration', link_text: 'coded frame duration', },
    'coded-frames-duration': { func: term_helper, fragment: 'coded-frame-duration', link_text: 'coded frame\'s duration', },
    'coded-frame-end-timestamp': { func: term_helper, fragment: 'coded-frame-end-timestamp', link_text: 'coded frame end timestamp', },
    'parent-media-source': { func: term_helper, fragment: 'parent-media-source', link_text: 'parent media source', },
    'coded-frame-group': { func: term_helper, fragment: 'coded-frame-group', link_text: 'coded frame group', },
    'decode-timestamp': { func: term_helper, fragment: 'decode-timestamp', link_text: 'decode timestamp', },
    'decode-timestamps': { func: term_helper, fragment: 'decode-timestamp', link_text: 'decode timestamps', },
    'presentation-interval': { func: term_helper, fragment: 'presentation-interval', link_text: 'presentation interval', },
    'presentation-order': { func: term_helper, fragment: 'presentation-order', link_text: 'presentation order', },
    'presentation-timestamp': { func: term_helper, fragment: 'presentation-timestamp', link_text: 'presentation timestamp', },
    'presentation-timestamps': { func: term_helper, fragment: 'presentation-timestamp', link_text: 'presentation timestamps', },
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
    'byte-stream-formats-section': { func: link_helper, fragment: '#byte-stream-formats', link_text: 'byte stream formats section', },
    'byte-stream-format-spec': { func: link_helper, fragment: '#byte-stream-format-specs', link_text: 'byte stream format specification', },
    'byte-stream-format-specs': { func: link_helper, fragment: '#byte-stream-format-specs', link_text: 'byte stream format specifications', },
    'sourcebuffer-byte-stream-format-spec': { func: link_helper, fragment: '#sourcebuffer-byte-stream-format-spec', link_text: 'SourceBuffer byte stream format specification', },
    'sourcebuffer-configuration': { func: link_helper, fragment: '#sourcebuffer-configuration', link_text: 'SourceBuffer configuration', },
    'append-decode-error-algorithm': { func: append_error_helper, fragment: '#sourcebuffer-append-error', link_text: 'true', },
    'reset-parser-state-algorithm': { func: link_helper, fragment: '#sourcebuffer-reset-parser-state', link_text: 'reset parser state algorithm', },
    'prepare-append': { func: link_helper, fragment: '#sourcebuffer-prepare-append', link_text: 'prepare append', },
    'buffer-append': { func: link_helper, fragment: '#sourcebuffer-buffer-append', link_text: 'buffer append', },
    'range-removal': { func: link_helper, fragment: '#sourcebuffer-range-removal', link_text: 'range removal', },
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
    'group-end-timestamp': { func: var_helper, fragment: '#sourcebuffer-group-end-timestamp', link_text: 'group end timestamp', },
    'generate-timestamps-flag': { func: var_helper, fragment: '#sourcebuffer-generate-timestamps-flag', link_text: 'generate timestamps flag', },
    'MediaSource-object-URL': { func: link_helper, fragment: '#mediasource-object-url', link_text: 'MediaSource object URL', },
    'first-init-segment-received-flag': { func: var_helper, fragment: '#first-init-segment-received-flag', link_text: 'first initialization segment received flag', },

    'track-buffer': { func: term_helper, fragment: 'track-buffer', link_text: 'track buffer', },
    'track-buffers': { func: term_helper, fragment: 'track-buffer', link_text: 'track buffers', },
    'track-buffer-ranges': { func: term_helper, fragment: 'track-buffer-ranges', link_text: 'track buffer ranges', },
    'last-decode-timestamp': { func: var_helper, fragment: '#last-decode-timestamp', link_text: 'last decode timestamp', },
    'last-frame-duration': { func: var_helper, fragment: '#last-frame-duration', link_text: 'last frame duration', },
    'highest-end-timestamp': { func: var_helper, fragment: '#highest-end-timestamp', link_text: 'highest end timestamp', },
    'need-RAP-flag': { func: var_helper, fragment: '#need-RAP-flag', link_text: 'need random access point flag', },

    'blob-uri': { func: fileapi_helper, fragment: 'url', link_text: 'Blob URI',  },
    'File': { func: fileapi_helper, fragment: 'dfn-file', link_text: 'File', },
    'Blob': { func: fileapi_helper, fragment: 'dfn-Blob', link_text: 'Blob',  },
    'URL': { func: fileapi_helper, fragment: 'URL-object', link_text: 'URL',  },
    'file-createObjectURL': { func: fileapi_helper, fragment: 'dfn-createObjectURL', link_text: 'createObjectURL()',  },
    'file-revokeObjectURL': { func: fileapi_helper, fragment: 'dfn-revokeObjectURL', link_text: 'revokeObjectURL()',  },

    'eventdfn': { func: eventdfn_helper, fragment: '', link_text: '', },

    'videoref': { func: videoref_helper, fragment: '', link_text: '', },
    'media-timeline': { func: videoref_helper, fragment: 'media-timeline', link_text: 'media timeline',  },
    'mediatracklist-change': { func: code_videoref_helper, fragment: 'dom-mediatracklist-onchange', link_text: 'change',  },
    'resource-fetch-algorithm': { func: videoref_helper, fragment: 'resource-fetch-algorithm', link_text: 'resource fetch algorithm',  },
    'media-data-processing-steps-list': { func: videoref_helper, fragment: 'media-data-processing-steps-list', link_text: 'media data processing steps list', },
    'delaying-the-load-event-flag': {func: videoref_helper, fragment: 'delaying-the-load-event-flag', link_text: 'delaying-the-load-event-flag', },
    'intrinsic-width-and-height': { func: videoref_helper, fragment: 'video-intrinsic-width', link_text: 'intrinsic width and height',  },
    'normalized-timeranges-object': { func: videoref_helper, fragment: 'normalized-timeranges-object', link_text: 'normalized TimeRanges object',  },
    'current-playback-position': { func: videoref_helper, fragment: 'current-position', link_text: 'current playback position',  },
    'media-data-is-corrupted': { func: videoref_helper, fragment: 'fatal-decode-error', link_text: 'media data is corrupted',  },
    'media-src': { func: code_videoref_helper, fragment: 'element-attrdef-media-src', link_text: 'src',  },
    'timerange': { func: code_videoref_helper, fragment: 'timeranges-timeranges', link_text: 'TimeRange',  },
    'timeranges': { func: code_videoref_helper, fragment: 'timeranges-timeranges', link_text: 'TimeRanges',  },
    'video-track': { func: code_videoref_helper, fragment: 'videotrack-videotrack', link_text: 'VideoTrack',  },
    'video-track-list': { func: code_videoref_helper, fragment: 'videotracklist-videotracklist', link_text: 'VideoTrackList', },
    'videotrack-id': { func: code_videoref_helper, fragment: 'dom-videotrack-id', link_text: 'id', },
    'videotrack-kind': { func: code_videoref_helper, fragment: 'dom-videotrack-kind', link_text: 'kind', },
    'videotrack-label': { func: code_videoref_helper, fragment: 'dom-videotrack-label', link_text: 'label', },
    'videotrack-language': { func: code_videoref_helper, fragment: 'dom-videotrack-language', link_text: 'language', },
    'videotrack-selected': { func: code_videoref_helper, fragment: 'dom-videotrack-selected', link_text: 'selected', },
    'videotrack-sourceBuffer': { func: idlref_helper, fragment: 'dom-videotrack-sourcebuffer', link_text: 'sourceBuffer', },
    'videotracklist-length': { func: code_videoref_helper, fragment: 'dom-videotracklist-length', link_text: 'length',  },
    'videotracks': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-videotracks', link_text: 'videoTracks',  },
    'audio-track': { func: code_videoref_helper, fragment: 'audiotrack-audiotrack', link_text: 'AudioTrack',  },
    'audio-track-list': { func: code_videoref_helper, fragment: 'audiotracklist-audiotracklist', link_text: 'AudioTrackList', },
    'audiotracklist-length': { func: code_videoref_helper, fragment: 'dom-audiotracklist-length', link_text: 'length', },
    'audiotracks': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-audiotracks', link_text: 'audioTracks',  },
    'audiotrack-id': { func: code_videoref_helper, fragment: 'dom-audiotrack-id', link_text: 'id',  },
    'audiotrack-kind': { func: code_videoref_helper, fragment: 'dom-audiotrack-kind', link_text: 'kind', },
    'audiotrack-label': { func: code_videoref_helper, fragment: 'dom-audiotrack-label', link_text: 'label', },
    'audiotrack-language': { func: code_videoref_helper, fragment: 'dom-audiotrack-language', link_text: 'language', },
    'audiotrack-enabled': { func: code_videoref_helper, fragment: 'dom-audiotrack-enabled', link_text: 'enabled', },
    'audiotrack-sourceBuffer': { func: idlref_helper, fragment: 'dom-audiotrack-sourcebuffer', link_text: 'sourceBuffer', },
    'text-track': { func: code_videoref_helper, fragment: 'texttrack-texttrack', link_text: 'TextTrack',  },
    'text-track-list': { func: code_videoref_helper, fragment: 'texttracklist-texttracklist', link_text: 'TextTrackList', },
    'texttracks': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-texttracks', link_text: 'textTracks', },
    'texttrack-mode': { func: code_videoref_helper, fragment: 'dom-texttrack-mode', link_text: 'mode',  },
    'texttrack-id': { func: code_videoref_helper, fragment: 'dom-texttrack-id', link_text: 'id', },
    'texttrack-kind': { func: code_videoref_helper, fragment: 'dom-texttrack-kind', link_text: 'kind', },
    'texttrack-label': { func: code_videoref_helper, fragment: 'dom-texttrack-label', link_text: 'label', },
    'texttrack-language': { func: code_videoref_helper, fragment: 'dom-texttrack-language', link_text: 'language', },
    'texttracklist-change': { func: code_videoref_helper, fragment: 'dom-texttracklist-onchange', link_text: 'change',  },
    'texttrackmode-showing': { func: code_videoref_helper, fragment: 'dom-texttrackmode-showing', link_text: '"showing"', },
    'texttrackmode-hidden': { func: code_videoref_helper, fragment: 'dom-texttrackmode-hidden', link_text: '"hidden"',  },
    'texttrackmode-disabled': { func: code_videoref_helper, fragment: 'dom-texttrackmode-disabled', link_text: '"disabled"', },
    'texttrack-sourceBuffer': { func: idlref_helper, fragment: 'dom-texttrack-sourcebuffer', link_text: 'sourceBuffer', },
    'ready-state': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-readystate', link_text: 'HTMLMediaElement.readyState',  },
    'ready-states' : { func: code_videoref_helper, fragment: 'ready-states', link_text: 'HTMLMediaElement ready states', },
    'have-nothing': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-have_nothing', link_text: 'HAVE_NOTHING',  },
    'have-metadata': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-have_metadata', link_text: 'HAVE_METADATA',  },
    'have-current-data': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-have_current_data', link_text: 'HAVE_CURRENT_DATA',  },
    'have-future-data': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-have_future_data', link_text: 'HAVE_FUTURE_DATA',  },
    'have-enough-data': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-have_enough_data', link_text: 'HAVE_ENOUGH_DATA',  },
    'loadedmetadata': { func: code_videoref_helper, fragment: 'eventdef-media-loadedmetadata', link_text: 'loadedmetadata',  },
    'htmlmediaelement': { func: code_videoref_helper, fragment: 'htmlmediaelement-htmlmediaelement', link_text: 'HTMLMediaElement',  },
    'hme-duration': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-duration', link_text: 'media duration',  },
    'hme-buffered': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-buffered', link_text: 'HTMLMediaElement.buffered',  },
    'hme-error': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-error', link_text: 'HTMLMediaElement.error',  },
    'hme-seekable': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-seekable', link_text: 'HTMLMediaElement.seekable',  },
    'hme-seek-algorithm': { func: videoref_helper, fragment: 'seek', link_text: 'seek algorithm',  },
    'hme-duration-change-algorithm': { func: videoref_helper, fragment: 'durationChange', link_text: 'HTMLMediaElement duration change algorithm',  },
    'htmlvideoelement': { func: code_videoref_helper, fragment: 'htmlvideoelement-htmlvideoelement', link_text: 'HTMLVideoElement',  },

    'invalid-access-error': { func: exception_helper, fragment: 'invalidaccesserror', link_text: 'InvalidAccessError',  },
    'invalid-state-error': { func: exception_helper, fragment: 'invalidstateerror', link_text: 'InvalidStateError',  },
    'not-found-error': { func: exception_helper, fragment: 'notfounderror', link_text: 'NotFoundError',  },
    'not-supported-error': { func: exception_helper, fragment: 'notsupportederror', link_text: 'NotSupportedError',  },
    'quota-exceeded-error': { func: exception_helper, fragment: 'quotaexceedederror', link_text: 'QuotaExceededError',  },
    'type-error': { func: typeerror_helper, fragment: '', link_text: 'TypeError',  },

    'queue-a-task-to-fire-an-event-named': { func: queue_and_fire_helper, fragment: '', link_text: 'queue a task',  },
    'Queue-a-task-to-fire-an-event-named': { func: queue_and_fire_helper, fragment: '', link_text: 'Queue a task',  },
    'queue-and-fire-media-addtrack-with-track-attr-initialized-to': { func: queue_and_fire_track_event_helper_with_track_attr_initialized_to, fragment: 'media', link_text: 'addtrack', },
    'queue-and-fire-text-addtrack-with-track-attr-initialized-to': { func: queue_and_fire_track_event_helper_with_track_attr_initialized_to, fragment: 'text', link_text: 'addtrack', },
    'queue-and-fire-media-removetrack-with-track-attr-initialized-to': { func: queue_and_fire_track_event_helper_with_track_attr_initialized_to, fragment: 'media', link_text: 'removetrack', },
    'queue-and-fire-text-removetrack-with-track-attr-initialized-to': { func: queue_and_fire_track_event_helper_with_track_attr_initialized_to, fragment: 'text', link_text: 'removetrack', },
    'provide-a-stable-state': { func: webappapis_helper, fragment: 'provide-a-stable-state', link_text: 'provide a stable state',  },

    'origin': { func: browsers_helper, fragment: 'section-origin', link_text: 'origin', },
    'relevant-settings-object': { func: webappapis_helper, fragment: 'relevant-settings-object', link_text: 'relevant settings object', },


    'media-data-cannot-be-fetched': { func: fragment_helper, fragment: '', link_text: '&quot;<i>If the media data cannot be fetched at all, due to network errors, causing the user agent to give up trying to fetch the resource</i>&quot;', },
    'Otherwise-mode-is-local': { func: fragment_helper, fragment: '', link_text: '&quot;<i>Otherwise (mode is local)</i>&quot;', },

    'contributors': { func: contributors_helper, fragment: '', link_text: '', },
  };

  // These definitions are only referenced from the registries.
  // The URL fragment will get adjusted to the proper links in mediaSourcePreProcessor.
  var mseRegistryReferencesDefinitions = {
    'byte-stream-format-registry': { func: link_helper, fragment: 'MSE-REGISTRY', link_text: 'Media Source Extensions™ Byte Stream Format Registry', },
    'byte-stream-format-registry-webm': { func: link_helper, fragment: 'MSE-FORMAT-WEBM', link_text: 'WebM Byte Stream Format', },
    'byte-stream-format-registry-isobmff': { func: link_helper, fragment: 'MSE-FORMAT-ISOBMFF', link_text: 'ISO BMFF Byte Stream Format', },
    'byte-stream-format-registry-mp2t': { func: link_helper, fragment: 'MSE-FORMAT-MP2T', link_text: 'MPEG-2 Transport Streams Byte Stream Format', },
    'byte-stream-format-registry-mpeg-audio': { func: link_helper, fragment: 'MSE-FORMAT-MPEG-AUDIO', link_text: 'MPEG Audio Byte Stream Format', },
  };

    // Update links to external type definitions.
    var externalClassInfo = {
      'ReadableStream': { spec: 'whatwg-streams-api', fragment: 'rs-class-definition' },
      'AudioTrackList': {spec: 'html5', fragment: 'audiotracklist-audiotracklist' },
      'TextTrackList': {spec: 'html5', fragment: 'texttracklist-texttracklist' },
      'TimeRanges': { spec: 'html5', fragment: 'timeranges-timeranges' },
      'VideoTrackList': {spec: 'html5', fragment: 'videotracklist-videotracklist' },
      'EventHandler' : { spec: 'html5-webappapis', fragment: 'typedefdef-eventhandlernonnull-eventhandler' },
      'EventTarget': { spec: 'dom', fragment: 'eventtarget' },
      'DOMString': { spec: 'webidl', fragment: 'idl-DOMString' },
      'boolean': { spec: 'webidl', fragment: 'idl-boolean' },
      'double': { spec: 'webidl', fragment: 'idl-double' },
      'unrestricted double': { spec: 'webidl', fragment: 'idl-unrestricted-double' },
      'unsigned long': { spec: 'webidl', fragment: 'idl-unsigned-long' },
      'unsigned long long': { spec: 'webidl', fragment: 'idl-unsigned-long-long' },
      'BufferSource' : { spec: 'webidl', fragment: 'common-BufferSource' },
      'void': { spec: 'webidl', fragment: 'idl-void' },
      'ArrayBuffer': { spec: 'typed-array', fragment: 'ArrayBuffer' },
      'ArrayBufferView': { spec: 'typed-array', fragment: 'ArrayBufferView' },
      'DOMHighResTimeStamp': { spec: 'hr-time', fragment: 'dom-domhighrestimestamp'},
    };

    function lookupBaseUrlForSpec( info ) {
        if (info.spec == 'w3c-streams-api') {
          baseURL = W3C_STREAMS_spec_url;
        } else if (info.spec == 'whatwg-streams-api') {
          baseURL = WHATWG_STREAMS_spec_url;
        } else if (info.spec == 'html5') {
          baseURL = HTML5_spec_url;
        } else if (info.spec == 'html5-webappapis') {
          baseURL = HTML5_webappapis_spec_url;
        } else if (info.spec == 'dom') {
          baseURL = DOM_spec_url;
        } else if (info.spec == 'webidl') {
          baseURL = WEBIDL_spec_url;
        } else if (info.spec == 'typed-array') {
          baseURL = "http://www.khronos.org/registry/typedarray/specs/latest/";
        } else if (info.spec == 'hr-time') {
          baseURL = HRTIME_spec_url;
        } else if (info.spec == 'mse') {
          baseURL = MSE_spec_url;
        }
        return baseURL;
    }

  var definitionInfo = {};
  var groupBaseURLs = {};
  var helperTypes = {
    'link' : link_helper,
    'var' : var_helper,
  };

  function mediaSourceAddDefinitionInfo(groupName, groupBaseURL, definitions) {
    groupBaseURLs[groupName] = groupBaseURL;
    for (var def_id in definitions) {
      if (definitionInfo[def_id]) {
        console.log("Overriding previous definition of def-id '" + def_id + "'.");
      }
      var info = definitions[def_id];
      info.groupName = groupName;
      if (!info.func) {
        var helper_type = info.helper_type || "link";
        info.func = helperTypes[helper_type];
      }
      definitionInfo[def_id] = info;
    }
  }

  function mediaSourceAddMainSpecDefinitionInfos() {
    // References from byte stream format registry and byte stream specs to the
    // main MSE spec, which would otherwise conflict if included in the main MSE
    // spec, are added in this utility function. Don't call this function from
    // the main MSE respec.
    externalClassInfo.SourceBuffer = { spec: 'mse', fragment: 'idl-def-SourceBuffer' };
  }

  function mediaSourcePreProcessor() {
    var original_MSE_spec_url = MSE_spec_url; // The loop may change multiple groupBaseURLs.
    var is_registry_file = window.respecConfig.edDraftURI.includes("byte-stream");
    var specStatus = window.respecConfig.specStatus;
    var specStatusIndex = location.search.indexOf("specStatus");
    if (specStatusIndex !== -1) {
      var status = location.search.substring(specStatusIndex);
      specStatusIndex = status.indexOf('=');
      status = status.substring(specStatusIndex+1);
      var semicolon = status.indexOf(';');
      if (semicolon !== -1) {
        status = status.substring(0, semicolon);
      }
      specStatus = status;
    }

    for (var x in groupBaseURLs) {
      if (groupBaseURLs[x] == original_MSE_spec_url && specStatus == "ED") {
        MSE_spec_url = "index.html";
        groupBaseURLs[x] = MSE_spec_url;

        // Refer to the local file rather than the published path.
        var file = "index.html";
        MSE_spec_url = file;
        groupBaseURLs[x] = MSE_spec_url;
        // Refer to the Web IDL Editor’s Draft from Editor’s Drafts of this spec.
        IDL_spec_url = "https://heycam.github.io/webidl/";
        break;
      }
    }

    $("a[def-id]").each(function () {
      $(this).addClass('externalDFN');
    });
 
    // Process external links first, so ReSpec will leave them alone
    $("a:not([href])").each( function() {
      var $ant = $(this);
      var className = $ant.text();
      var info = externalClassInfo[className];
      if (info) {
        var id = info.fragment;
        var df = document.createDocumentFragment();
        var baseURL = lookupBaseUrlForSpec( info );
 
        if (baseURL) {
          df.appendChild($("<code/>").wrapInner($("<a/>").attr({href: baseURL + "#" + id, 'class': 'idlType'}).text(className))[0]);
          this.parentNode.replaceChild(df, this);
        }
      }
    } );

    var registry_biblio_entries =
     getMediaSourceRegistryBibioEntries(specStatus);
    if (window.respecConfig.localBiblio) {
      var tmp = window.respecConfig.localBiblio["W3C-STREAMS-API"]
      if (tmp && tmp.href !== W3C_STREAMS_spec_url ) {
        W3C_STREAMS_spec_url = tmp.href;
        console.log("W3C_STREAMS_spec_url is out of sync with the localBiblio entry");
      }

      var tmp = window.respecConfig.localBiblio["WHATWG-STREAMS-API"]
      if (tmp && tmp.href !== WHATWG_STREAMS_spec_url ) {
        WHATWG_STREAMS_spec_url = tmp.href;
        console.log("WHATWG_STREAMS_spec_url is out of sync with the localBiblio entry");
      }
      for (var property_name in registry_biblio_entries)
        window.respecConfig.localBiblio[property_name] = registry_biblio_entries[property_name];
    } else {
      window.respecConfig.localBiblio = registry_biblio_entries;
    }

    // adjust emeRegistryReferencesDefinitions to use proper links
    // def-id are then replaced in encryptedMediaPostProcessor
    function adjustFragments(key) {
      var entry = mseRegistryReferencesDefinitions[key];
      var fragment = entry.fragment;
      var anchor = "";
      var anchorStart = fragment.indexOf('#');
      if (anchorStart !== -1) {
        anchor = fragment.substring(anchorStart);
        fragment = fragment.substring(0, anchorStart);
      }
      var specref = registry_biblio_entries[fragment];
      // not all fragments are associated with a specref
      if (specref === undefined) return;
      if (entry !== undefined) {
        entry.fragment = specref.href + anchor;
      }
    }
    for (var key in mseRegistryReferencesDefinitions) {
      adjustFragments(key);
    }
  }

  function mediaSourcePostProcessor() {
    var doc = document;
    doc.normalize();

    var usedMap = {};

    $("a[def-id]").each(function () {
      var $ant = $(this);
      var def_id = $ant.attr('def-id');
      var info = definitionInfo[def_id];
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
        doc.mseDefGroupName = info.groupName;
        info.func(doc, df, id, text);
        doc.mseDefGroupName = "";
        this.parentNode.replaceChild(df, this);

      } else {
        console.log("Found def-id '" + def_id + "' but it does not correspond to anything");
      }
    });
 
    // Link external references from IDL and method parameter tables
    $("span.idlAttrType, span.idlMethType, span.idlParamType, td.prmType").each( function() {
      var $ant = $(this);
      var className = $ant.text();
      var info = externalClassInfo[className];
      if (info) {
        var id = info.fragment;
        var baseURL = lookupBaseUrlForSpec( info );
 
        if (baseURL) {
          $ant.empty();
          $ant.append($("<code/>").wrapInner($("<a/>").attr({href: baseURL + "#" + id }).text(className)));
        }
      }
    } );

    // Move algorithm text after method parameter & return value information.
    $("ol.method-algorithm").each(function() {
      var parent = this.parentNode;
      parent.removeChild(this);
      parent.appendChild($("<p/>").text("When this method is invoked, the user agent must run the following steps:")[0]);
      parent.appendChild(this);
    });

    // Validate that all defined def-ids are actually used.
    var excludeList = window.respecConfig.mseUnusedGroupNameExcludeList || [];
    for (var k in definitionInfo) {
      var defGroupName = definitionInfo[k].groupName;
      if (!usedMap[k] && !(excludeList.indexOf(defGroupName) != -1)) {
        console.log("def-id '" + k + "' from groupName '" + defGroupName + "' never used.");
      }
    }
 
    // Work around ReSpec issue 893
    $("a[href='#dom-readystate']").each( function() {
    
        var $ant = $(this);
        if ( $ant.text() === "ReadyState" ) {
            console.log("ReSpec#893: Fixing incorrect link for ReadyState");
            
            $ant.attr({href:"#idl-def-readystate"});
        }
    
    });
 
    $("span.idlAttrName").each(function() {
    
        var $ant = $(this);
        if ( $ant.text() == "readyState" ) {
            console.log("ReSpec#893: Fixing link for readyState IDL attribute");
            
            $ant.empty();
            $ant.append($('<a href="#dom-readystate"><code>readyState</code></a>'));
        }
    
    });
    // End workaround for ReSpec issue 893
 
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

  function getMediaSourceRegistryBibioEntries(status) {
    var stream_path = "byte-stream-format";
    var postfix = ".html";
    var separator = "";
    if (status !== "ED") {
      stream_path = "https://www.w3.org/TR/mse-byte-stream-format";
      postfix = "/";
      separator = "-";
    }

    return {
    "MSE-REGISTRY": {
        title: "Media Source Extensions™ Byte Stream Format Registry",
        href: stream_path + "-registry" + postfix,
        authors: ["Matthew Wolenetz", "Jerry Smith", "Aaron Colwell"],
        publisher: "W3C"
    },
    "MSE-FORMAT-WEBM": {
        title: "WebM Byte Stream Format",
        href: ((postfix == "/")?(stream_path+"-webm"):"webm-"+stream_path) + postfix,
        authors: ["Matthew Wolenetz", "Jerry Smith", "Aaron Colwell"],
        publisher: "W3C"
    },
    "MSE-FORMAT-ISOBMFF": {
        title: "ISO BMFF Byte Stream Format",
        href: ((postfix == "/")?(stream_path+"-isobmff"):"isobmff-"+stream_path) + postfix,
        authors: ["Matthew Wolenetz", "Jerry Smith", "Mark Watson", "Aaron Colwell", "Adrian Bateman"],
        publisher: "W3C"
    },
    "MSE-FORMAT-MP2T": {
        title: "MPEG-2 Transport Streams Byte Stream Format",
        href: ((postfix == "/")?(stream_path+"-mp2t"):"mp2t-"+stream_path) + postfix,
        authors: ["Matthew Wolenetz", "Jerry Smith", "Mark Watson", "Aaron Colwell", "Adrian Bateman"],
        publisher: "W3C"
    },
    "MSE-FORMAT-MPEG-AUDIO": {
        title: "MPEG Audio Byte Stream Format",
        href: ((postfix == "/")?(stream_path+"-mpeg-audio"):"mpeg-audio-"+stream_path) + postfix,
        authors: ["Dale Curtis", "Matthew Wolenetz", "Aaron Colwell"],
        publisher: "W3C"
    },
  }
  };

  mediaSourceAddDefinitionInfo("media-source", MSE_spec_url, mseDefinitions);
  mediaSourceAddDefinitionInfo("mse-references-from-registry", MSE_spec_url, mseRegistryReferencesDefinitions);

  window.mediaSourceAddDefinitionInfo = mediaSourceAddDefinitionInfo;
  window.mediaSourcePreProcessor = mediaSourcePreProcessor;
  window.mediaSourcePostProcessor = mediaSourcePostProcessor;
  window.mediaSourceAddMainSpecDefinitionInfos = mediaSourceAddMainSpecDefinitionInfos;
})();
