
# Specification 'media-source'

This is the repository for media-source. You're welcome to contribute! Let's make the Web rock our socks
off!

Media Source Extensions:
 http://w3c.github.io/media-source/


Media Source Extensions Byte Stream Format Registry:
 http://w3c.github.io/media-source/byte-stream-format-registry.html

WebM Byte Stream Format
 http://w3c.github.io/media-source/webm-byte-stream-format.html

ISO BMFF Byte Stream Format:
 http://w3c.github.io/media-source/isobmff-byte-stream-format.html

MPEG-2 Transport Streams Byte Stream Format:
http://w3c.github.io/media-source/mp2t-byte-stream-format.html

MPEG Audio Byte Stream Format:
 http://w3c.github.io/media-source/mpeg-audio-byte-stream-format.html

# Issue labeling and milestone guidance

## Labels
Each bug may have multiple labels.

### “needs feedback”:
The issue is pending further clarification from the assignee, likely the original bug filer or another who reported aspects of the issue in the bug’s history. The feedback request needs to be in a comment associated with the addition of this label, along with a request for reassignment back to an editor once feedback is provided.

### “needs author input”:
The editors are seeking input from web authors on the issue. For example, whether a requested change is useful or how best to expose information.

### “needs follow-up”:
The assignee, likely an editor, needs to investigate more deeply before we can decide if this “needs implementation” or to otherwise move forward. The editors have discussed the issue and do not need to discuss it further until we have the resulting follow-up from the assignee. This includes things like determining external spec dependencies, seeking input from other spec owners and/or WGs, confirming the understanding of the nature of the bug, and beginning to formulate a path to a solution.

This doesn’t necessarily mean follow-up has “Started” or is “In Progress.”

### “needs implementation”:
The steps needed to resolve this issue are clearly understood and agreed upon. This likely means drafting and committing a spec change, possibly via a pull request. No further discussion is necessary at this time, though review of the change may still be appropriate. Should that change, this label should be removed.

For a bug to be labeled with this, it needs to be understood well enough and in scope of the marked milestone. Otherwise, “needs follow-up” or punting milestone might be options.

This label does not refer to user agent implementations.

### “blocked”:
Some external dependency or another GitHub issue identified in comment associated with this label’s addition is (or might be) blocking progress on this bug.

### “feature request”:
The issue is related to or requesting a new use case or capability not currently (explicitly) covered by the spec. Depending on the nature and impact of the request and the stage of the spec, it may be assigned to a future milestone.

### “interoperability”:
Resolution of this issue is particularly important for interoperability among user agents. This may include breaking API changes, issues related to media compatibility across user agents, or ambiguous parts of the spec that could lead to different incompatible interpretations. There may be known or probable differing interpretations in implementations of the associated portion of the spec. If the identified issue is not addressed, there is a high likelihood of meaningful interoperability problems. The fix for the issue would need to provide a clear direction to prevent differing interpretations by user agents.

### "breaking change"
The issue's resolution might cause re-entry to the current spec phase, for example CR.

### “wontfix”, “invalid”, “duplicate”:
Self-explanatory :)

Issues with these labels should always be closed (unless they were re-opened at which time an editor should probably remove these labels if the re-opening is accepted).


## Milestones
For greater detail, see our V1 triage process announcement in [the archive](https://lists.w3.org/Archives/Public/public-html-media/2016Mar/0003.html).

### “V#”:
A bug in version # of the spec.
Currently, V1 is the first version of MSE (in CR in Q4 2015).

### "V#NonBlocking"
A bug in version # of the spec, which is an editorial change to improve spec language. These should not be treated as blocking on the WG timeline, so the clock may run out before all are fixed.

### “VNext”:
Perhaps to be addressed by some later version of the spec; not currently expected to be in scope of specific version of the spec. Typically, this milestone is correlated with issues labeled “feature request”. This is equivalent to Bugzilla’s RESOLVED LATER status. As such and to keep the issue tracker focused, issues with this milestone will generally be closed. When work on a new version of the spec starts, the V.Next issues, including those that are closed, should be reviewed and considered for the new version.

### (no milestone):
The issue has not been triaged or the editors are currently discussing.
