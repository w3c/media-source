
# Media Source Extensions™ Specification

This is the repository for the [Media Source Extensions™](https://w3c.github.io/media-source/) (MSE) specification. You're welcome to contribute! Let's make the Web rock our socks off!

## Byte Stream Format specifications

The Byte Stream Format Registry and related specifications that used to be developed in this repository have moved to dedicated repositories end of November 2020:

- [Media Source Extensions Byte Stream Format Registry](https://w3c.github.io/mse-byte-stream-format-registry/) in [w3c/mse-byte-stream-format-registry](https://github.com/w3c/mse-byte-stream-format-registry/)
- [WebM Byte Stream Format](https://w3c.github.io/mse-byte-stream-format-webm/) in [w3c/mse-byte-stream-format-webm](https://github.com/w3c/mse-byte-stream-format-webm/)
- [ISO BMFF Byte Stream Format](https://w3c.github.io/mse-byte-stream-format-isobmff/) in [w3c/mse-byte-stream-format-isobmff](https://github.com/w3c/mse-byte-stream-format-isobmff/)
- [MPEG-2 Transport Streams Byte Stream Format](https://w3c.github.io/mse-byte-stream-format-mp2t/) in [w3c/mse-byte-stream-format-mp2t](https://github.com/w3c/mse-byte-stream-format-mp2t/)
- [MPEG Audio Byte Stream Format](https://w3c.github.io/mse-byte-stream-format-mpeg-audio/) in [w3c/mse-byte-stream-format-mpeg-audio](https://github.com/w3c/mse-byte-stream-format-mpeg-audio/)

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

See [milestones](https://github.com/w3c/media-source/milestones) for the full list. Milestones “V1”, “V1Editorial” and “V1NonBlocking” were reached with the publication of the first version of MSE as a W3C Recommendation in 2016 and are no longer current. The following milestones are used to track issues:

### “V2”
Issues flagged with a [V2](https://github.com/w3c/media-source/milestone/6) milestone describe new features in scope of the second version of MSE. Immediate work on these issues is expected.

### “V2BugFixes”
Issues flagged with a [V2BugFixes](https://github.com/w3c/media-source/milestone/7) describe bugs raised against the first version of MSE that need to be fixed before the second version gets published as a W3C Recommendation. These bugs do not introduce new features.

### “Backlog”
Issues flagged with a [BackLog](https://github.com/w3c/media-source/milestone/1) milestone describe features, questions, bugfixes, editorial changes that are not yet in scope for the current version of the specification. Perhaps to be addressed by some later version of the spec.

### (no milestone)
Issues that are not associated with any milestone have not been triaged yet.
