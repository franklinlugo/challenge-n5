# Challenge N5

### Apps and Packages

- `Host`: Host App
- `PageAlpha`: Remote page of Harry Potter
- `PageBeta`: Remote page of Van Helsing
- `eslint-config-custom`: shared `eslint` configurations
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `ui`: shared ui theme

Run in dev mode: `npm run dev`

build and serve: `npm run build`

run test in remote apps:

```
cd apps/PageAlpha | cd apps/PageBeta
npm run test
```
