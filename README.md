[![Netlify Status](https://api.netlify.com/api/v1/badges/5ab4c367-3592-4361-a4b8-ccd46514c967/deploy-status)](https://app.netlify.com/sites/antifem-site/deploys)

# Antifeminist movement site

## Run

Use node version: 18 or greater

- Install dependencies:

  ```bash
  pnpm i
  ```

- Run locally:

  ```bash
  pnpm dev
  ```

  Go to `http://localhost:5173/`

- Build and Preview

  ```bash
  pnpm build && pnpm preview
  ```

  Go to `http://localhost:4173/`

  Local admin panel is on `http://localhost:4173/admin/`

## Cloud flare

```
pnpm cf:deploy
```
