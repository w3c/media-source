### 2.1. What information might this feature expose to Web sites or other parties, and for what purposes is that exposure necessary?

Availability of the user agent's support or lack thereof of MSE-in-Workers.
Everything else (support for codecs, bytestreams, video playback, etc) is already in the MSE specification that is widely implemented and used today.

### 2.2. Do features in your specification expose the minimum amount of information necessary to enable their intended uses?

Yes. This feature extends MSE exposure to DedicatedWorker. Coordination/communication of API state (like what is buffered) involves potentially new cross-context communication latencies. Otherwise, API is the same as that already specified for use in the Window context. See 2.1 answers.

### 2.3. How do the features in your specification deal with personal information, personally-identifiable information (PII), or information derived from them?

PII is not involved in this feature.

### 2.4. How do the features in your specification deal with sensitive information?

Sensitive information is not involved in this feature.

### 2.5. Do the features in your specification introduce new state for an origin that persists across browsing sessions?

No persisted new state is involved in this feature. There is information, like statistics necessary to give a good answer to MediaCapabilities queries, that is separately and already captured by user agents for both the existing MSE and progressive playback features.

### 2.6. Do the features in your specification expose information about the underlying platform to origins?

Nothing new beyond existing MSE specification, except as noted in 2.1: user agent's support or lack thereof for the feature.

### 2.7 Does this specification allow an origin to send data to the underlying platform?

Nothing new beyond existing MSE specification.

### 2.8 Do features in this specification allow an origin access to sensors on a user’s device

No.

### 2.9. What data do the features in this specification expose to an origin? Please also document what data is identical to data exposed by other features, in the same or different contexts.

MediaSource.canConstructInDedicatedWorker (existence in Window/DedicatedWorker and value of the attribute if it exists). Otherwise, nothing new beyond existing MSE specification.

### 2.10. Do feautres in this specification enable new script execution/loading mechanisms?

No.

### 2.11. Do features in this specification allow an origin to access other devices?

No.

### 2.12. Do features in this specification allow an origin some measure of control over a user agent’s native UI?

No.

### 2.13. What temporary identifiers do the feautures in this specification create or expose to the web?

Nothing new beyond existing MSE specification. Examples are the blob: MediaSource objectURLs used to attach MediaSource to HTMLMediaElement, and unique track IDs populated into Audio/Video/Text track during initialization segment processing of app-supplied media bytestreams.

### 2.14. How does this specification distinguish between behavior in first-party and third-party contexts?

Like the existing MSE specification, I don't believe it distinguishes.

### 2.15 How do the features in this specification work in the context of a browser’s Private Browsing or Incognito mode?

No difference versus existing HTML5 media element and MSE specifications

### 2.16. Does this specification have both "Security Considerations" and "Privacy Considerations" sections?

Not yet, though the main MSE specification is in the W3C Media WG charter, which is adding requirements that specifications include such sections.
See https://github.com/w3c/media-source/issues/261 that tracks adding these sections to the main specification that pre-exists this feature and is intended to include this feature.

### 2.17. Do features in your specification enable origins to downgrade default security protections?

No.

### 2.18. What should this questionnaire have asked?

Perhaps explicitly a question about potential new fingerprinting vectors. I believe at least 2.1 helps get at this question already though.
