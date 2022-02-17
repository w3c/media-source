(function() {
  var MSE_spec_url = "https://www.w3.org/TR/media-source/";
  var HTML5_spec_url = "https://html.spec.whatwg.org/multipage/media.html";
  var HTML5_infrastructure_spec_url = "https://html.spec.whatwg.org/multipage/infrastructure.html";
  var HTML5_browsers_spec_url = "https://html.spec.whatwg.org/multipage/browsers.html";
  var HTML5_webappapis_spec_url = "https://html.spec.whatwg.org/multipage/webappapis.html";
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
    const code = doc.createElement('code');
    code.appendChild(doc.createTextNode(text));
    const dfn = doc.createElement('dfn');
    dfn.setAttribute('id', 'dom-evt-' + text.toLowerCase());
    dfn.appendChild(code);
    df.appendChild(dfn);
  }

  function idlref_helper(doc, df, id, text) {
    const anchor = doc.createElement('a');
    anchor.setAttribute('href', url_helper(doc, '#' + id));
    anchor.appendChild(doc.createTextNode(text));
    const code = doc.createElement('code');
    code.appendChild(anchor);
    df.appendChild(code);
  }

  function eventref_helper(doc, df, id, text) {
    const anchor = doc.createElement('a');
    anchor.setAttribute('href', url_helper(doc, '#dom-evt-' + id));
    anchor.appendChild(doc.createTextNode(text));
    const code = doc.createElement('code');
    code.appendChild(anchor);
    df.appendChild(code);
  }

  function videoref_helper(doc, df, id, text) {
    link_helper(doc, df, HTML5_spec_url + '#' + id, text);
  }

  function code_videoref_helper(doc, df, id, text) {
    const anchor = doc.createElement('a');
    anchor.setAttribute('href', url_helper(doc, HTML5_spec_url + '#' + id));
    anchor.appendChild(doc.createTextNode(text));
    const code = doc.createElement('code');
    code.appendChild(anchor);
    df.appendChild(code);
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
    const anchor = doc.createElement('a');
    anchor.setAttribute('href', url_helper(doc, url_helper(doc, id)));
    anchor.appendChild(doc.createTextNode(text));
    const varEl = doc.createElement('var');
    varEl.appendChild(anchor);
    df.appendChild(varEl);
  }

  function link_helper(doc, df, id, text) {
    const anchor = doc.createElement('a');
    anchor.setAttribute('href', url_helper(doc, url_helper(doc, id)));
    anchor.appendChild(doc.createTextNode(text));
    df.appendChild(anchor);
  }

  function exception_helper(doc, df, id, text) {
    const anchor = doc.createElement('a');
    anchor.setAttribute('href', url_helper(doc, WEBIDL_spec_url + '#' + id));
    anchor.appendChild(doc.createTextNode(text));
    const code = doc.createElement('code');
    code.appendChild(anchor);
    df.appendChild(code);
  }

  function typeerror_helper(doc, df, id, text) {
    const code = doc.createElement('code');
    code.appendChild(doc.createTextNode(text));
    df.appendChild(code);
  }

  function webmref_helper(doc, df, id, text) {
    link_helper(doc, df, 'http://www.webmproject.org/code/specs/container/#' + id, text);
  }

  function whatwg_streams_helper(doc, df, id, text) {
    link_helper(doc, df, WHATWG_STREAMS_spec_url + '#' + id, text);
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
    'addSourceBuffer': { func: idlref_helper, fragment: 'dom-mediasource-addsourcebuffer', link_text: 'addSourceBuffer()',  },
    'isTypeSupported': { func: idlref_helper, fragment: 'dom-mediasource-istypesupported', link_text: 'isTypeSupported()',  },

    'abort': { func: idlref_helper, fragment: 'dom-sourcebuffer-abort', link_text: 'abort()',  },
    'timestampOffset': { func: idlref_helper, fragment: 'dom-sourcebuffer-timestampoffset', link_text: 'timestampOffset',  },

    'init-segment': { func: term_helper, fragment: 'init-segment', link_text: 'initialization segment', },
    'init-segments': { func: term_helper, fragment: 'init-segment', link_text: 'initialization segments', },
    'media-segment': { func: term_helper, fragment: 'media-segment', link_text: 'media segment', },
    'media-segments': { func: term_helper, fragment: 'media-segment', link_text: 'media segments', },
    'random-access-point': { func: term_helper, fragment: 'random-access-point', link_text: 'random access point', },
    'random-access-points': { func: term_helper, fragment: 'random-access-point', link_text: 'random access points', },
    'coded-frames': { func: term_helper, fragment: 'coded-frame', link_text: 'coded frames', },
    'presentation-timestamp': { func: term_helper, fragment: 'presentation-timestamp', link_text: 'presentation timestamp', },

    'byte-stream-formats-section': { func: link_helper, fragment: '#byte-stream-formats', link_text: 'byte stream formats section', },
    'append-decode-error-algorithm': { func: append_error_helper, fragment: '#sourcebuffer-append-error', link_text: 'true', },
    'coded-frame-processing-algorithm': { func: link_helper, fragment: '#sourcebuffer-coded-frame-processing', link_text: 'coded frame processing algorithm', },

    // TODO: Consider replacing this with xref usage and explicit {{SourceBuffer/[[generate timestamps flag]]}}
    // reference usage in the BSF registry and any other user of this entry. For now, it is updated to the correct
    // fragment.
    'generate-timestamps-flag': { func: var_helper, fragment: '#dfn-generate-timestamps-flag', link_text: 'generate timestamps flag', },

    'blob-uri': { func: fileapi_helper, fragment: 'url', link_text: 'Blob URI',  },
    'File': { func: fileapi_helper, fragment: 'dfn-file', link_text: 'File', },
    'Blob': { func: fileapi_helper, fragment: 'dfn-Blob', link_text: 'Blob',  },
    'URL': { func: fileapi_helper, fragment: 'URL-object', link_text: 'URL',  },
    'file-createObjectURL': { func: fileapi_helper, fragment: 'dfn-createObjectURL', link_text: 'createObjectURL()',  },
    'file-revokeObjectURL': { func: fileapi_helper, fragment: 'dfn-revokeObjectURL', link_text: 'revokeObjectURL()',  },

    'videoref': { func: videoref_helper, fragment: '', link_text: '', },
    'media-timeline': { func: videoref_helper, fragment: 'media-timeline', link_text: 'media timeline',  },
    'mediatracklist-change': { func: code_videoref_helper, fragment: 'dom-mediatracklist-onchange', link_text: 'change',  },
    'resource-fetch-algorithm': { func: videoref_helper, fragment: 'concept-media-load-resource', link_text: 'resource fetch algorithm',  },
    'media-data-processing-steps-list': { func: videoref_helper, fragment: 'media-data-processing-steps-list', link_text: 'media data processing steps list', },
    'delaying-the-load-event-flag': {func: videoref_helper, fragment: 'delaying-the-load-event-flag', link_text: 'delaying-the-load-event-flag', },
    'intrinsic-width-and-height': { func: videoref_helper, fragment: 'concept-video-intrinsic-width', link_text: 'intrinsic width and height',  },
    'normalized-timeranges-object': { func: videoref_helper, fragment: 'normalised-timeranges-object', link_text: 'normalized TimeRanges object',  },
    'current-playback-position': { func: videoref_helper, fragment: 'current-playback-position', link_text: 'current playback position',  },
    'media-data-is-corrupted': { func: videoref_helper, fragment: 'fatal-decode-error', link_text: 'media data is corrupted',  },
    'video-track': { func: code_videoref_helper, fragment: 'videotrack-videotrack', link_text: 'VideoTrack',  },
    'audio-track': { func: code_videoref_helper, fragment: 'audiotrack-audiotrack', link_text: 'AudioTrack',  },
    'audiotracklist-length': { func: code_videoref_helper, fragment: 'dom-audiotracklist-length', link_text: 'length', },
    'audiotrack-id': { func: code_videoref_helper, fragment: 'dom-audiotrack-id', link_text: 'id',  },
    'audiotrack-kind': { func: code_videoref_helper, fragment: 'dom-audiotrack-kind', link_text: 'kind', },
    'audiotrack-label': { func: code_videoref_helper, fragment: 'dom-audiotrack-label', link_text: 'label', },
    'audiotrack-language': { func: code_videoref_helper, fragment: 'dom-audiotrack-language', link_text: 'language', },
    'text-track': { func: code_videoref_helper, fragment: 'texttrack-texttrack', link_text: 'TextTrack',  },
    'texttracklist-change': { func: code_videoref_helper, fragment: 'dom-texttracklist-onchange', link_text: 'change',  },
    'texttrackmode-showing': { func: code_videoref_helper, fragment: 'dom-texttrack-showing', link_text: '"showing"', },
    'texttrackmode-hidden': { func: code_videoref_helper, fragment: 'dom-texttrack-hidden', link_text: '"hidden"',  },
    'texttrackmode-disabled': { func: code_videoref_helper, fragment: 'dom-texttrack-disabled', link_text: '"disabled"', },
    'ready-states' : { func: code_videoref_helper, fragment: 'ready-states', link_text: 'HTMLMediaElement ready states', },
    'have-nothing': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-have_nothing', link_text: 'HAVE_NOTHING',  },
    'have-metadata': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-have_metadata', link_text: 'HAVE_METADATA',  },
    'have-current-data': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-have_current_data', link_text: 'HAVE_CURRENT_DATA',  },
    'have-future-data': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-have_future_data', link_text: 'HAVE_FUTURE_DATA',  },
    'have-enough-data': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-have_enough_data', link_text: 'HAVE_ENOUGH_DATA',  },
    'loadedmetadata': { func: code_videoref_helper, fragment: 'eventdef-media-loadedmetadata', link_text: 'loadedmetadata',  },
    'hme-duration': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-duration', link_text: 'media duration',  },
    'hme-seek-algorithm': { func: videoref_helper, fragment: 'dom-media-seek', link_text: 'seek algorithm',  },
    'hme-duration-change-algorithm': { func: videoref_helper, fragment: 'durationChange', link_text: 'HTMLMediaElement duration change algorithm',  },

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
    externalClassInfo.SourceBuffer = { spec: 'mse', fragment: 'idl-def-sourcebuffer' };
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
        // Refer to the local file rather than the published path.
        var file = "https://w3c.github.io/media-source/index.html";
        MSE_spec_url = file;
        groupBaseURLs[x] = MSE_spec_url;
        // Refer to the Web IDL Editor’s Draft from Editor’s Drafts of this spec.
        IDL_spec_url = "https://heycam.github.io/webidl/";
        break;
      }
    }

    [...document.querySelectorAll('a[def-id]')].forEach(el =>
      el.classList.add('externalDFN'));

    // Process external links first, so ReSpec will leave them alone
    [...document.querySelectorAll('a:not([href])')].forEach(el => {
      var className = el.textContent;
      var info = externalClassInfo[className];
      if (info) {
        var id = info.fragment;
        var df = document.createDocumentFragment();
        var baseURL = lookupBaseUrlForSpec( info );

        if (baseURL) {
          const anchor = document.createElement('a');
          anchor.setAttribute('href', baseURL + "#" + id);
          anchor.className = 'idlType';
          anchor.appendChild(document.createTextNode(className));
          const code = document.createElement('code');
          code.appendChild(anchor);
          df.appendChild(code);
          el.parentNode.replaceChild(df, el);
        }
      }
    });

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

    [...document.querySelectorAll('a[def-id]')].forEach(el => {
      var def_id = el.getAttribute('def-id');
      var info = definitionInfo[def_id];
      if (info) {
        if (!usedMap[def_id]) {
          usedMap[def_id] = 1;
        } else {
          usedMap[def_id]++;
        }

        var id = info.fragment;
        var text = info.link_text;

        if (el.getAttribute('name')) {
          id = el.getAttribute('name');
        }

        var element_text = el.textContent;
        if (element_text) {
          text = element_text;
        }

        var df = doc.createDocumentFragment();
        doc.mseDefGroupName = info.groupName;
        info.func(doc, df, id, text);
        doc.mseDefGroupName = "";
        el.parentNode.replaceChild(df, el);

      } else {
        console.log("Found def-id '" + def_id + "' but it does not correspond to anything");
      }
    });

    // Move algorithm text after method parameter & return value information.
    [...document.querySelectorAll('ol.method-algorithm')].forEach(el => {
      var parent = el.parentNode;
      parent.removeChild(el);
      const p = document.createElement('p');
      p.appendChild(document.createTextNode('When this method is invoked, the user agent must run the following steps:'));
      parent.appendChild(p);
      parent.appendChild(el);
    });

    // Validate that all defined def-ids are actually used.
    var excludeList = window.respecConfig.mseUnusedGroupNameExcludeList || [];
    for (var k in definitionInfo) {
      var defGroupName = definitionInfo[k].groupName;
      if (!usedMap[k] && !(excludeList.indexOf(defGroupName) != -1)) {
        console.log("def-id '" + k + "' from groupName '" + defGroupName + "' never used.");
      }
    }

    [...document.querySelectorAll('a[href]')].forEach(el => {
      var href = el.getAttribute('href');
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
    var stream_path = "https://w3c.github.io/mse-byte-stream-format";
    var postfix = "/";
    if (status !== "ED") {
      stream_path = "https://www.w3.org/TR/mse-byte-stream-format";
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
        href: stream_path + "-webm" + postfix,
        authors: ["Matthew Wolenetz", "Jerry Smith", "Aaron Colwell"],
        publisher: "W3C"
    },
    "MSE-FORMAT-ISOBMFF": {
        title: "ISO BMFF Byte Stream Format",
        href: stream_path + "-isobmff" + postfix,
        authors: ["Matthew Wolenetz", "Jerry Smith", "Mark Watson", "Aaron Colwell", "Adrian Bateman"],
        publisher: "W3C"
    },
    "MSE-FORMAT-MP2T": {
        title: "MPEG-2 Transport Streams Byte Stream Format",
        href: stream_path + "-mp2t" + postfix,
        authors: ["Matthew Wolenetz", "Jerry Smith", "Mark Watson", "Aaron Colwell", "Adrian Bateman"],
        publisher: "W3C"
    },
    "MSE-FORMAT-MPEG-AUDIO": {
        title: "MPEG Audio Byte Stream Format",
        href: stream_path + "-mpeg-audio" + postfix,
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
