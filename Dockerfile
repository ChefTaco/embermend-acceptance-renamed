FROM node:24.22.1-bookworm-slim@sha256:be8204d4bd327363357f532187b752ff62759c31bedf98e9e18fc08c9cbd605c
ARG SOURCE_REVISION
LABEL org.opencontainers.image.source="https://github.com/ChefTaco/embermend-acceptance-fixture"
LABEL org.opencontainers.image.revision="$SOURCE_REVISION"
ENV SOURCE_REVISION=$SOURCE_REVISION BIND_ADDRESS=0.0.0.0 PORT=8088
WORKDIR /app
COPY --chown=1000:1000 apps/catalog /app/apps/catalog
USER 1000:1000
EXPOSE 8088
CMD ["node", "apps/catalog/server.ts"]
