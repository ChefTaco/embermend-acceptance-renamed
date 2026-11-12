# Contributor instructions

This public Apache-2.0 repository contains deliberately vulnerable disposable
acceptance fixtures. Keep all data fictional and configuration generic. Never
commit secrets, private infrastructure, local notes or runtime evidence. Install
the provided hooks, never bypass them, and run typecheck, baseline tests, staged
Gitleaks 8.30.1 and private-data checks before publishing changes. TypeScript is
exactly 6.0.3; strict, noUncheckedIndexedAccess and exactOptionalPropertyTypes are
required. Security changes require focused validation. Intentional defects must
remain clearly identified as fixtures; this is not a production application.
