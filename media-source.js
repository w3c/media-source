(function() {
    var HTML_spec_url = "http://www.w3.org/TR/html5/embedded-content-0.html";

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

  function streamapi_helper(doc, df, id, text) {
      link_helper(doc, df, 'http://dvcs.w3.org/hg/streams-api/raw-file/tip/Overview.htm#' + id, text);
  }

  function webappapis_helper(doc, df, id, text) {
    link_helper(doc, df, 'http://www.w3.org/TR/html5/webappapis.html#' + id, text);
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
    df.appendChild($("<code/>").wrapInner($("<a/>").attr({href: 'http://dom.spec.whatwg.org/#dom-domexception-' + id}).text(text))[0]);
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

  function fragment_helper(doc, df, id, text) {
    var f = doc.createDocumentFragment()
    f.innerHTML = text;
    df.appendChild(f);
  }

  var rep = {
    'sourceBuffers': { func: idlref_helper, fragment: 'widl-MediaSource-sourceBuffers', link_text: 'sourceBuffers',  },
    'activeSourceBuffers': { func: idlref_helper, fragment: 'widl-MediaSource-activeSourceBuffers', link_text: 'activeSourceBuffers',  },
    'addSourceBuffer': { func: idlref_helper, fragment: 'widl-MediaSource-addSourceBuffer-SourceBuffer-DOMString-type', link_text: 'addSourceBuffer()',  },
    'endOfStream': { func: idlref_helper, fragment: 'widl-MediaSource-endOfStream-void-EndOfStreamError-error', link_text: 'endOfStream()',  },
    'eos-decode': { func: idlref_helper, fragment: 'widl-MediaSource-endOfStream-void-EndOfStreamError-error', link_text: 'endOfStream("decode")',  },
    'readyState': { func: idlref_helper, fragment: 'widl-MediaSource-readyState', link_text: 'readyState',  },
    'duration': { func: idlref_helper, fragment: 'widl-MediaSource-duration', link_text: 'duration',  },
    'appendArrayBuffer': { func: idlref_helper, fragment: 'widl-SourceBuffer-appendArrayBuffer-void-ArrayBuffer-data', link_text: 'appendArrayBuffer()',  },
    'appendStream': { func: idlref_helper, fragment: 'widl-SourceBuffer-appendStream-void-Stream-stream-unsigned-long-long-maxSize', link_text: 'appendStream()',  },
    'abort': { func: idlref_helper, fragment: 'widl-SourceBuffer-abort-void', link_text: 'abort()',  },
    'remove': { func: idlref_helper, fragment: 'widl-SourceBuffer-remove-void-double-start-double-end', link_text: 'remove()',  },
    'updating': { func: idlref_helper, fragment: 'widl-SourceBuffer-updating', link_text: 'updating',  },
    'sourcebuffer-audioTracks': { func: idlref_helper, fragment: 'widl-SourceBuffer-audioTracks', link_text: 'audioTracks',  },
    'sourcebuffer-videoTracks': { func: idlref_helper, fragment: 'widl-SourceBuffer-videoTracks', link_text: 'videoTracks',  },
    'sourcebuffer-textTracks': { func: idlref_helper, fragment: 'widl-SourceBuffer-textTracks', link_text: 'textTracks',  },
    'buffered': { func: idlref_helper, fragment: 'widl-SourceBuffer-buffered', link_text: 'buffered',  },
    'timestampOffset': { func: idlref_helper, fragment: 'widl-SourceBuffer-timestampOffset', link_text: 'timestampOffset',  },
    'length': { func: idlref_helper, fragment: 'widl-SourceBufferList-length', link_text: 'length',  },
    'createObjectURL': { func: idlref_helper, fragment: 'widl-URL-createObjectURL-DOMString-MediaSource-mediaSource', link_text: 'createObjectURL()',  },
    'open': { func: idlref_helper, fragment: 'idl-def-ReadyState', link_text: '"open"',  },
    'closed': { func: idlref_helper, fragment: 'idl-def-ReadyState', link_text: '"closed"',  },
    'ended': { func: idlref_helper, fragment: 'idl-def-ReadyState', link_text: '"ended"',  },
    'network': { func: idlref_helper, fragment: 'idl-def-EndOfStreamError', link_text: '"network"',  },
    'decode': { func: idlref_helper, fragment: 'idl-def-EndOfStreamError', link_text: '"decode"',  },

    'updatestart': { func: eventref_helper, fragment: 'updatestart', link_text: 'updatestart',  },
    'updateend': { func: eventref_helper, fragment: 'updateend', link_text: 'updateend',  },
    'updateerror': { func: eventref_helper, fragment: 'error', link_text: 'error',  },
    'updateabort': { func: eventref_helper, fragment: 'abort', link_text: 'abort',  },

    'sourceopen': { func: eventref_helper, fragment: 'sourceopen', link_text: 'sourceopen',  },
    'sourceended': { func: eventref_helper, fragment: 'sourceended', link_text: 'sourceended',  },
    'sourceclose': { func: eventref_helper, fragment: 'sourceclose', link_text: 'sourceclose',  },
    'addsourcebuffer': { func: eventref_helper, fragment: 'addsourcebuffer', link_text: 'addsourcebuffer',  },
    'removesourcebuffer': { func: eventref_helper, fragment: 'removesourcebuffer', link_text: 'removesourcebuffer',  },

    'decoder-buffer': { func: term_helper, fragment: 'decoder-buffer', link_text: 'decoder buffer', },
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
    'parent-media-source': { func: term_helper, fragment: 'parent-media-source', link_text: 'parent media source', },
    'append-sequence': { func: term_helper, fragment: 'append-sequence', link_text: 'append sequence', },
    'enough-data': { func: term_helper, fragment: 'enough-data', link_text: 'enough data to ensure uninterrupted playback', },

    'duration-change-algorithm': { func: link_helper, fragment: '#duration-change-algorithm', link_text: 'duration change algorithm', },
    'segment-parser-loop': { func: link_helper, fragment: '#sourcebuffer-segment-parser-loop', link_text: 'segment parser loop', },
    'append-state': { func: var_helper, fragment: '#sourcebuffer-append-state', link_text: 'append state', },
    'waiting-for-segment': { func: link_helper, fragment: '#sourcebuffer-waiting-for-segment', link_text: 'WAITING_FOR_SEGMENT', },
    'parsing-init-segment': { func: link_helper, fragment: '#sourcebuffer-parsing-init-segment', link_text: 'PARSING_INIT_SEGMENT', },
    'parsing-media-segment': { func: link_helper, fragment: '#sourcebuffer-parsing-media-segment', link_text: 'PARSING_MEDIA_SEGMENT', },
    'byte-stream-format-specs': { func: link_helper, fragment: '#byte-stream-formats', link_text: 'byte stream format specifications', },
    'append-error-algorithm': { func: link_helper, fragment: '#sourcebuffer-append-error', link_text: 'append error algorithm', },
    'reset-parser-state-algorithm': { func: link_helper, fragment: '#sourcebuffer-reset-parser-state', link_text: 'reset parser state algorithm', },
    'stream-append-loop': { func: link_helper, fragment: '#sourcebuffer-stream-append-loop', link_text: 'stream append loop', },
    'init-segment-received-algorithm': { func: link_helper, fragment: '#sourcebuffer-init-segment-received', link_text: 'initialization segment received algorithm', },
    'coded-frame-processing-algorithm': { func: link_helper, fragment: '#sourcebuffer-coded-frame-processing', link_text: 'coded frame processing algorithm', },
    'input-buffer': { func: var_helper, fragment: '#sourcebuffer-input-buffer', link_text: 'input buffer', },
    'buffer-full-flag': { func: var_helper, fragment: '#sourcebuffer-buffer-full-flag', link_text: 'buffer full flag', },
    'MediaSource-object-URL': { func: link_helper, fragment: '#mediasource-object-url', link_text: 'MediaSource object URL', },
    'first-init-segment-flag': { func: var_helper, fragment: '#first-init-segment-flag', link_text: 'first initialization segment flag', },

    'track-buffer': { func: term_helper, fragment: 'track-buffer', link_text: 'track buffer', },
    'track-buffers': { func: term_helper, fragment: 'track-buffer', link_text: 'track buffers', },
    'last-decode-timestamp': { func: var_helper, fragment: '#last-decode-timestamp', link_text: 'last decode timestamp', },
    'highest-presentation-timestamp': { func: var_helper, fragment: '#highest-presentation-timestamp', link_text: 'highest presentation timestamp', },

    'FileAPI': { func: fileapi_helper, fragment: '', link_text: 'File API',  },
    'blob-uri': { func: fileapi_helper, fragment: 'url', link_text: 'Blob URI',  },
    'File': { func: fileapi_helper, fragment: 'dfn-file', link_text: 'File',  },
    'Blob': { func: fileapi_helper, fragment: 'dfn-Blob', link_text: 'Blob',  },
    'file-createObjectURL': { func: fileapi_helper, fragment: 'dfn-createObjectURL', link_text: 'createObjectURL()',  },
    'file-revokeObjectURL': { func: fileapi_helper, fragment: 'dfn-revokeObjectURL', link_text: 'revokeObjectURL()',  },

    'Stream': { func: streamapi_helper, fragment: 'idl-def-Stream', link_text: 'Stream', },

    'eventdfn': { func: eventdfn_helper, fragment: '', link_text: '', },

    'videoref': { func: videoref_helper, fragment: '', link_text: '', },
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
    'videotrack-id': { func: code_videoref_helper, fragment: 'dom-videotrack-id', link_text: 'id',  },
    'videotrack-kind': { func: code_videoref_helper, fragment: 'dom-videotrack-kind', link_text: 'kind', },
    'videotrack-language': { func: code_videoref_helper, fragment: 'dom-videotrack-language', link_text: 'language', },
    'videotrack-selected': { func: code_videoref_helper, fragment: 'dom-videotrack-selected', link_text: 'selected', },
    'videotrack-sourceBuffer': { func: idlref_helper, fragment: 'widl-VideoTrack-sourceBuffer', link_text: 'sourceBuffer', },
    'videotracklist-length': { func: code_videoref_helper, fragment: 'dom-videotracklist-length', link_text: 'length',  },
    'videotracks': { func: code_videoref_helper, fragment: 'dom-media-videotracks', link_text: 'videoTracks',  },
    'audio-track': { func: code_videoref_helper, fragment: 'audiotrack', link_text: 'AudioTrack',  },
    'audiotracklist-length': { func: code_videoref_helper, fragment: 'dom-audiotracklist-length', link_text: 'length',  },
    'audiotracks': { func: code_videoref_helper, fragment: 'dom-media-audiotracks', link_text: 'audioTracks',  },
    'audiotrack-id': { func: code_videoref_helper, fragment: 'dom-audiotrack-id', link_text: 'id',  },
    'audiotrack-kind': { func: code_videoref_helper, fragment: 'dom-audiotrack-kind', link_text: 'kind', },
    'audiotrack-language': { func: code_videoref_helper, fragment: 'dom-audiotrack-language', link_text: 'language', },
    'audiotrack-enabled': { func: code_videoref_helper, fragment: 'dom-audiotrack-enabled', link_text: 'enabled', },
    'audiotrack-sourceBuffer': { func: idlref_helper, fragment: 'widl-AudioTrack-sourceBuffer', link_text: 'sourceBuffer', },
    'text-track': { func: code_videoref_helper, fragment: 'texttrack', link_text: 'TextTrack',  },
    'texttracks': { func: code_videoref_helper, fragment: 'dom-media-texttracks', link_text: 'textTracks',  },
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
    'hme-duration': { func: code_videoref_helper, fragment: 'media-controller-duration', link_text: 'media controller duration',  },
    'hme-buffered': { func: code_videoref_helper, fragment: 'dom-media-buffered', link_text: 'HTMLMediaElement.buffered',  },
    'hme-seek-algorithm': { func: videoref_helper, fragment: 'dom-media-seek', link_text: 'seek algorithm',  },
    'hme-duration-change-algorithm': { func: videoref_helper, fragment: 'durationChange', link_text: 'HTMLMediaElement duration change algorithm',  },

    'invalid-access-err': { func: exception_helper, fragment: 'invalid_access_err', link_text: 'INVALID_ACCESS_ERR',  },
    'invalid-state-err': { func: exception_helper, fragment: 'invalid_state_err', link_text: 'INVALID_STATE_ERR',  },
    'not-found-err': { func: exception_helper, fragment: 'not_found_err', link_text: 'NOT_FOUND_ERR',  },
    'not-supported-err': { func: exception_helper, fragment: 'not_supported_err', link_text: 'NOT_SUPPORTED_ERR',  },
    'quota-exceeded-err': { func: exception_helper, fragment: 'quota_exceeded_err', link_text: 'QUOTA_EXCEEDED_ERR',  },

    'queue-a-task-to-fire-an-event-named': { func: queue_and_fire_helper, fragment: '', link_text: 'queue a task',  },
    'Queue-a-task-to-fire-an-event-named': { func: queue_and_fire_helper, fragment: '', link_text: 'Queue a task',  },
    'provide-a-stable-state': { func: webappapis_helper, fragment: 'provide-a-stable-state', link_text: 'provide a stable state',  },

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
  };

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
	if (!document.querySelector(href)) {
	  console.log("Internal link to an id '" + matched[1] + "' which does not exist");
	}
      }
    });

    return;
  }

  window.mediaSourcePostProcessor = mediaSourcePostProcessor;
})();