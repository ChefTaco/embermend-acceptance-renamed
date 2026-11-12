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

The image workflow validates the ownership invariant inside a disposable rootless
Docker worker. It intentionally fails on the affected revision. Image builds have
no provider write credentials and use bounded resources and disabled build-step
network access. A separate job signs the exact OCI archive without checking out
or executing repository code. OCI output includes both reference architectures,
BuildKit provenance and an SBOM from a pinned scanner. Publication and deployment
remain separate operations. See [Docker rootless mode](https://docs.docker.com/engine/security/rootless/)
and [GitHub artifact attestations](https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/use-artifact-attestations).
