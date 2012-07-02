<?xml version="1.0" encoding="ISO-8859-1"?>

<xsl:stylesheet version="1.0" 
		xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" doctype-system="about:legacy-compat" encoding="utf-8" omit-xml-declaration="yes"/>
  <xsl:variable name="lower">abcdefghijklmnopqrstuvwxyz___</xsl:variable> 
  <xsl:variable name="upper">ABCDEFGHIJKLMNOPQRSTUVWXYZ ()</xsl:variable>

  <xsl:template match="//*">
    <xsl:copy select=".">
      <xsl:for-each select="attribute::*">
	<xsl:attribute name="{name(.)}">
	  <xsl:value-of select="." />
	</xsl:attribute>
      </xsl:for-each>
      <xsl:apply-templates/>
    </xsl:copy>
  </xsl:template>

  <xsl:template match="//precoderef">
    <a><xsl:attribute name="href">#dom-<xsl:value-of select="translate(.,$upper,$lower)"/></xsl:attribute><xsl:value-of select="."/></a>
  </xsl:template>

  <xsl:template match="//premethodref">
    <a><xsl:attribute name="href">#dom-<xsl:value-of select="translate(.,$upper,$lower)"/></xsl:attribute><xsl:value-of select="."/></a>
  </xsl:template>

  <xsl:template name="coderef_helper">
    <xsl:param name="fragment" />
    <xsl:param name="link_text" />
    <code><a><xsl:attribute name="href">#dom-<xsl:value-of select="$fragment"/></xsl:attribute><xsl:value-of select="$link_text"/></a></code>
  </xsl:template>

  <xsl:template match="//coderef">
    <xsl:call-template name="coderef_helper">
      <xsl:with-param name="fragment"><xsl:value-of select="translate(.,$upper,$lower)"/></xsl:with-param>
      <xsl:with-param name="link_text"><xsl:value-of select="."/></xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <!-- MediaSource tags -->
  <xsl:template match="//sourceBuffers">
    <xsl:call-template name="coderef_helper">
      <xsl:with-param name="fragment">sourcebuffers</xsl:with-param>
      <xsl:with-param name="link_text">sourceBuffers</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  <xsl:template match="//activeSourceBuffers">
    <xsl:call-template name="coderef_helper">
      <xsl:with-param name="fragment">activesourcebuffers</xsl:with-param>
      <xsl:with-param name="link_text">activeSourceBuffers</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//addSourceBuffer">
    <xsl:call-template name="coderef_helper">
      <xsl:with-param name="fragment">addsourcebuffer</xsl:with-param>
      <xsl:with-param name="link_text">addSourceBuffer()</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//readyState">
    <xsl:call-template name="coderef_helper">
      <xsl:with-param name="fragment">readyState</xsl:with-param>
      <xsl:with-param name="link_text">readyState</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <!-- SourceBufferList tags -->
  <xsl:template match="//length">
    <xsl:call-template name="coderef_helper">
      <xsl:with-param name="fragment">length</xsl:with-param>
      <xsl:with-param name="link_text">length</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  <xsl:template match="//remove">
    <xsl:call-template name="coderef_helper">
      <xsl:with-param name="fragment">remove</xsl:with-param>
      <xsl:with-param name="link_text">remove()</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//addsourcebuffer">
    <xsl:call-template name="coderef_helper">
      <xsl:with-param name="fragment">addsourcebuffer</xsl:with-param>
      <xsl:with-param name="link_text">addsourcebuffer</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//removesourcebuffer">
    <xsl:call-template name="coderef_helper">
      <xsl:with-param name="fragment">removesourcebuffer</xsl:with-param>
      <xsl:with-param name="link_text">removesourcebuffer</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <!-- SourceBuffer tags -->
  <xsl:template match="//append">
    <xsl:call-template name="coderef_helper">
      <xsl:with-param name="fragment">append</xsl:with-param>
      <xsl:with-param name="link_text">append()</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//abort">
    <xsl:call-template name="coderef_helper">
      <xsl:with-param name="fragment">abort</xsl:with-param>
      <xsl:with-param name="link_text">abort()</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//buffered">
    <xsl:call-template name="coderef_helper">
      <xsl:with-param name="fragment">buffered</xsl:with-param>
      <xsl:with-param name="link_text">buffered</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//SourceBuffer">
    <xsl:call-template name="coderef_helper">
      <xsl:with-param name="fragment">sourcebuffer</xsl:with-param>
      <xsl:with-param name="link_text">SourceBuffer</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//SourceBufferList">
    <xsl:call-template name="coderef_helper">
      <xsl:with-param name="fragment">sourcebufferlist</xsl:with-param>
      <xsl:with-param name="link_text">SourceBufferList</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//MediaSource">
    <xsl:call-template name="coderef_helper">
      <xsl:with-param name="fragment">mediasource</xsl:with-param>
      <xsl:with-param name="link_text">MediaSource</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//open">
    <xsl:call-template name="coderef_helper">
      <xsl:with-param name="fragment">&quot;open&quot;</xsl:with-param>
      <xsl:with-param name="link_text">&quot;open&quot;</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  <xsl:template match="//closed">
    <xsl:call-template name="coderef_helper">
      <xsl:with-param name="fragment">closed</xsl:with-param>
      <xsl:with-param name="link_text">&quot;closed&quot;</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  <xsl:template match="//ended">
    <xsl:call-template name="coderef_helper">
      <xsl:with-param name="fragment">&quot;ended&quot;</xsl:with-param>
      <xsl:with-param name="link_text">&quot;ended&quot;</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//codedfn">
    <dfn><xsl:attribute name="id">dom-<xsl:value-of select="translate(.,$upper,$lower)"/></xsl:attribute><code><xsl:value-of select="."/></code></dfn>
  </xsl:template>

  <xsl:template match="//methoddfn">
    <dfn><xsl:attribute name="id">dom-<xsl:value-of select="translate(@name,$upper,$lower)"/></xsl:attribute><code><xsl:value-of select="."/></code></dfn>
  </xsl:template>

  <xsl:template match="//methodref">
    <xsl:call-template name="coderef_helper">
      <xsl:with-param name="fragment"><xsl:value-of select="translate(.,$upper,$lower)"/></xsl:with-param>
      <xsl:with-param name="link_text"><xsl:value-of select="."/>()</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template name="videoref_helper">
    <xsl:param name="fragment" />
    <xsl:param name="link_text" />
    <a><xsl:attribute name="href">http://dev.w3.org/html5/spec/media-elements.html#<xsl:value-of select="$fragment"/></xsl:attribute><xsl:value-of select="$link_text"/></a>
  </xsl:template>

  <xsl:template name="code_videoref_helper">
    <xsl:param name="fragment" />
    <xsl:param name="link_text" />
    <code><xsl:call-template name="videoref_helper">
      <xsl:with-param name="fragment"><xsl:value-of select="$fragment"/></xsl:with-param>
      <xsl:with-param name="link_text"><xsl:value-of select="$link_text"/></xsl:with-param>
    </xsl:call-template></code>
  </xsl:template>

  <xsl:template match="//videoref">
    <xsl:call-template name="code_videoref_helper">
      <xsl:with-param name="fragment"><xsl:value-of select="@name"/></xsl:with-param>
      <xsl:with-param name="link_text"><xsl:value-of select="."/></xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//appropriate-event">
    <xsl:call-template name="videoref_helper">
      <xsl:with-param name="fragment">mediaevents</xsl:with-param>
      <xsl:with-param name="link_text">appropriate event</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//resource-fetch-algorithm">
    <xsl:call-template name="videoref_helper">
      <xsl:with-param name="fragment">concept-media-load-resource</xsl:with-param>
      <xsl:with-param name="link_text">resource fetch algorithm</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//intrinsic-width-and-height">
    <xsl:call-template name="videoref_helper">
      <xsl:with-param name="fragment">concept-video-intrinsic-width</xsl:with-param>
      <xsl:with-param name="link_text">intrinsic width and height</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//active-source-buffer">
    <a><xsl:attribute name="href">#active-source-buffers</xsl:attribute>active source buffers</a>
  </xsl:template>

  <xsl:template match="//active-source-buffers">
    <a><xsl:attribute name="href">#active-source-buffers</xsl:attribute>active source buffers</a>
  </xsl:template>

  <xsl:template match="//source-buffers">
    <a><xsl:attribute name="href">#source-buffer</xsl:attribute>source buffers</a>
  </xsl:template>

  <xsl:template match="//source-buffer">
    <a><xsl:attribute name="href">#source-buffer</xsl:attribute>source buffer</a>
  </xsl:template>

  <xsl:template match="//source-buffers">
    <a><xsl:attribute name="href">#source-buffer</xsl:attribute>source buffers</a>
  </xsl:template>

  <xsl:template match="//track-buffer">
    <a><xsl:attribute name="href">#track-buffer</xsl:attribute>track buffer</a>
  </xsl:template>

  <xsl:template match="//track-buffers">
    <a><xsl:attribute name="href">#track-buffer</xsl:attribute>track buffers</a>
  </xsl:template>

  <xsl:template match="//var-id">
    <var title="true">id</var>
  </xsl:template>
  
  <xsl:template match="//var-type">
    <var title="true">type</var>
  </xsl:template>

  <xsl:template match="//init-segment">
    <a><xsl:attribute name="href">#init-segment</xsl:attribute>initialization segment</a>
  </xsl:template>

  <xsl:template match="//init-segments">
    <a><xsl:attribute name="href">#init-segment</xsl:attribute>initialization segments</a>
  </xsl:template>

  <xsl:template match="//media-segment">
    <a><xsl:attribute name="href">#media-segment</xsl:attribute>media segment</a>
  </xsl:template>

  <xsl:template match="//media-segments">
    <a><xsl:attribute name="href">#media-segment</xsl:attribute>media segments</a>
  </xsl:template>
  
  <xsl:template match="//random-access-point">
    <a><xsl:attribute name="href">#random-access-point</xsl:attribute>random access point</a>
  </xsl:template>

  <xsl:template match="//random-access-points">
    <a><xsl:attribute name="href">#random-access-point</xsl:attribute>random access points</a>
  </xsl:template>

  <xsl:template match="//media-src">
    <xsl:call-template name="code_videoref_helper">
      <xsl:with-param name="fragment">attr-media-src</xsl:with-param>
      <xsl:with-param name="link_text">src</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//timerange">
    <xsl:call-template name="code_videoref_helper">
      <xsl:with-param name="fragment">timeranges</xsl:with-param>
      <xsl:with-param name="link_text">TimeRange</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//timeranges">
    <xsl:call-template name="code_videoref_helper">
      <xsl:with-param name="fragment">timeranges</xsl:with-param>
      <xsl:with-param name="link_text">TimeRanges</xsl:with-param>
    </xsl:call-template>
  </xsl:template>


  <xsl:template match="//video-track">
    <xsl:call-template name="code_videoref_helper">
      <xsl:with-param name="fragment">videotrack</xsl:with-param>
      <xsl:with-param name="link_text">VideoTrack</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//videotracks">
    <xsl:call-template name="code_videoref_helper">
      <xsl:with-param name="fragment">dom-media-videotracks</xsl:with-param>
      <xsl:with-param name="link_text">videoTracks</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//selected-index">
    <xsl:call-template name="code_videoref_helper">
      <xsl:with-param name="fragment">dom-videotracklist-selectedindex</xsl:with-param>
      <xsl:with-param name="link_text">selectedIndex</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//audio-track">
    <xsl:call-template name="code_videoref_helper">
      <xsl:with-param name="fragment">audiotrack</xsl:with-param>
      <xsl:with-param name="link_text">AudioTrack</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="//audio-tracks">
    <xsl:call-template name="code_videoref_helper">
      <xsl:with-param name="fragment">audiotrack</xsl:with-param>
      <xsl:with-param name="link_text">AudioTracks</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//audiotracks">
    <xsl:call-template name="code_videoref_helper">
      <xsl:with-param name="fragment">dom-media-audiotracks</xsl:with-param>
      <xsl:with-param name="link_text">audioTracks</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//text-track">
    <xsl:call-template name="code_videoref_helper">
      <xsl:with-param name="fragment">texttrack</xsl:with-param>
      <xsl:with-param name="link_text">TextTrack</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//texttracks">
    <xsl:call-template name="code_videoref_helper">
      <xsl:with-param name="fragment">dom-media-texttracks</xsl:with-param>
      <xsl:with-param name="link_text">textTracks</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="//ready-state">
    <xsl:call-template name="code_videoref_helper">
      <xsl:with-param name="fragment">dom-media-readystate</xsl:with-param>
      <xsl:with-param name="link_text">HTMLMediaElement.readyState</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//have-nothing">
    <xsl:call-template name="code_videoref_helper">
      <xsl:with-param name="fragment">dom-media-have_nothing</xsl:with-param>
      <xsl:with-param name="link_text">HAVE_NOTHING</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//have-metadata">
    <xsl:call-template name="code_videoref_helper">
      <xsl:with-param name="fragment">dom-media-have_metadata</xsl:with-param>
      <xsl:with-param name="link_text">HAVE_METADATA</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//have-current-data">
    <xsl:call-template name="code_videoref_helper">
      <xsl:with-param name="fragment">dom-media-have_current_data</xsl:with-param>
      <xsl:with-param name="link_text">HAVE_CURRENT_DATA</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//have-future-data">
    <xsl:call-template name="code_videoref_helper">
      <xsl:with-param name="fragment">dom-media-have_future_data</xsl:with-param>
      <xsl:with-param name="link_text">HAVE_FUTURE_DATA</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//have-enough-data">
    <xsl:call-template name="code_videoref_helper">
      <xsl:with-param name="fragment">dom-media-have_enough_data</xsl:with-param>
      <xsl:with-param name="link_text">HAVE_ENOUGH_DATA</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//MEDIA_ERR_SRC_NOT_SUPPORTED">
    <xsl:call-template name="code_videoref_helper">
      <xsl:with-param name="fragment">dom-mediaerror-media_err_src_not_supported</xsl:with-param>
      <xsl:with-param name="link_text">MEDIA_ERR_SRC_NOT_SUPPORTED</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template name="exception_helper">
    <xsl:param name="fragment" />
    <xsl:param name="link_text" />
    <code><a><xsl:attribute name="href">http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#dom-domexception-<xsl:value-of select="$fragment"/></xsl:attribute><xsl:value-of select="$link_text"/></a></code>
  </xsl:template>

  <xsl:template match="//invalid-access-err">
    <xsl:call-template name="exception_helper">
      <xsl:with-param name="fragment">invalid_access_err</xsl:with-param>
      <xsl:with-param name="link_text">INVALID_ACCESS_ERR</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//invalid-state-err">
    <xsl:call-template name="exception_helper">
      <xsl:with-param name="fragment">invalid_state_err</xsl:with-param>
      <xsl:with-param name="link_text">INVALID_STATE_ERR</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//syntax-err">
    <xsl:call-template name="exception_helper">
      <xsl:with-param name="fragment">syntax_err</xsl:with-param>
      <xsl:with-param name="link_text">SYNTAX_ERR</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

 
  <xsl:template match="//not-found-err">
     <xsl:call-template name="exception_helper">
      <xsl:with-param name="fragment">not_found_err</xsl:with-param>
      <xsl:with-param name="link_text">NOT_FOUND_ERR</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  <xsl:template match="//not-supported-err">
     <xsl:call-template name="exception_helper">
      <xsl:with-param name="fragment">not_supported_err</xsl:with-param>
      <xsl:with-param name="link_text">NOT_SUPPORTED_ERR</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//quota-exceeded-err">
    <xsl:call-template name="exception_helper">
      <xsl:with-param name="fragment">quota_exceeded_err</xsl:with-param>
      <xsl:with-param name="link_text">QUOTA_EXCEEDED_ERR</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template name="webmref_helper">
    <xsl:param name="fragment" />
    <xsl:param name="link_text" />
    <a><xsl:attribute name="href">http://www.webmproject.org/code/specs/container/#<xsl:value-of select="$fragment"/></xsl:attribute><xsl:value-of select="$link_text"/></a>
  </xsl:template>

  <xsl:template match="//webm-spec">
    <xsl:call-template name="webmref_helper">
      <xsl:with-param name="fragment">webm-guidelines</xsl:with-param>
      <xsl:with-param name="link_text">WebM spec</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//webm-ebml-header">
    <xsl:call-template name="webmref_helper">
      <xsl:with-param name="fragment">ebml-basics</xsl:with-param>
      <xsl:with-param name="link_text">EBML Header</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//webm-segment">
    <xsl:call-template name="webmref_helper">
      <xsl:with-param name="fragment">segment</xsl:with-param>
      <xsl:with-param name="link_text">Segment</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//webm-info">
    <xsl:call-template name="webmref_helper">
      <xsl:with-param name="fragment">segment-information</xsl:with-param>
      <xsl:with-param name="link_text">Segment Information</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//webm-tracks">
    <xsl:call-template name="webmref_helper">
      <xsl:with-param name="fragment">track</xsl:with-param>
      <xsl:with-param name="link_text">Tracks</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//webm-global-elements">
    <xsl:call-template name="webmref_helper">
      <xsl:with-param name="fragment">global-elements-used-throughout-the-format</xsl:with-param>
      <xsl:with-param name="link_text">Global Elements</xsl:with-param>
    </xsl:call-template>
  </xsl:template>


  <xsl:template match="//webm-meta-seek">
    <xsl:call-template name="webmref_helper">
      <xsl:with-param name="fragment">meta-seek-information</xsl:with-param>
      <xsl:with-param name="link_text">Meta Seek Information</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//webm-cues">
    <xsl:call-template name="webmref_helper">
      <xsl:with-param name="fragment">cueing-data</xsl:with-param>
      <xsl:with-param name="link_text">Cues</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//webm-chapters">
    <xsl:call-template name="webmref_helper">
      <xsl:with-param name="fragment">chapters</xsl:with-param>
      <xsl:with-param name="link_text">Chapters</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//webm-cluster">
    <xsl:call-template name="webmref_helper">
      <xsl:with-param name="fragment">cluster</xsl:with-param>
      <xsl:with-param name="link_text">Cluster</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//webm-muxer-guidelines">
    <xsl:call-template name="webmref_helper">
      <xsl:with-param name="fragment">muxer-guidelines</xsl:with-param>
      <xsl:with-param name="link_text">WebM Muxer Guidelines</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="//webm-init-segment">
    <a href="#webm-init-segment">WebM initialization segment</a>
  </xsl:template>

  <xsl:template match="//iso-box">
    <strong><xsl:value-of select="." /></strong>
  </xsl:template>
  <xsl:template match="//iso-var">
    <strong><var><xsl:value-of select="." /></var></strong>
  </xsl:template>
</xsl:stylesheet>
