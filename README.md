# Embermend acceptance fixture

Apache-2.0. This intentionally vulnerable, inert TypeScript monorepo exists only
for authorized disposable Embermend integration acceptance. Never deploy it to a
production environment or expose its listener beyond the isolated lab.

The catalog application deliberately omits an ownership check. Two separate
source files demonstrate identical injection anchors. The notes application has
a separate ownership boundary and must not be included by a catalog-only scan.
All accounts and data are fictional. No real credentials belong in this repository.

TypeScript is pinned to 6.0.3 with strict typing, checked index access and exact
optional properties. Baseline tests describe availability; security validation
must independently demonstrate the intended ownership invariant.
