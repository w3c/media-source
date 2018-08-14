# @wolenetz's answers to [Security and Privacy Questionnaire](https://www.w3.org/TR/security-privacy-questionnaire/) for the MSE codec-switching feature

###3.1 Does this specification deal with personally-identifiable information?

No

### 3.2 Does this specification deal with high-value data?

No

### 3.3 Does this specification introduce new state for an origin that persists across browsing sessions?

No

### 3.4 Does this specification expose persistent, cross-origin state to the web?

No

### 3.5 Does this specification expose any other data to an origin that it doesn’t currently have access to?

No

### 3.6 Does this specification enable new script execution/loading mechanisms?

No

### 3.7 Does this specification allow an origin access to a user’s location?

No

### 3.8 Does this specification allow an origin access to sensors on a user’s device?

No

### 3.9 Does this specification allow an origin access to aspects of a user’s local computing environment?

Nothing really beyond what the MSE REC spec already allows. Specifically, the
supported media containers (bytestreams) and codecs are already queryable with
MSE REC spec's `MediaSource.isTypeSupported(...)` and `HTMLMediaElement's
canPlayType(...)` methods. The codec switching API exposes whether or not such a
media container and codec is supported with potentially other already-supported
containers and codecs in that SourceBuffer, e.g. it throws an exception if
`changeType(newType)` is attempted with a `newType` that is not supported for
the current configuration of the SourceBuffer.

### 3.10 Does this specification allow an origin access to other devices?

No

### 3.11 Does this specification allow an origin some measure of control over a user agent’s native UI?

No

### 3.12 Does this specification expose temporary identifiers to the web?

No

### 3.13 Does this specification distinguish between behavior in first-party and third-party contexts?

No

### 3.14 How should this specification work in the context of a user agent’s "incognito" mode?

This would work in the "incognito" mode in the same way as in the "regular" mode.

### 3.15 Does this specification persist data to a user’s local device?

No

### 3.16 Does this specification have a "Security Considerations" and "Privacy Considerations" section?

No. It is an incremental new method on top of the [existing MSE REC spec](https://www.w3.org/TR/media-source/).
I don't see a security or privacy risk for this feature.

### 3.17 Does this specification allow downgrading default security characteristics?

No.
