# raw-vite-app
Initial setup on top of `vite` and template `react-ts` with some dummy functionality. See
[here](https://vitejs.dev/guide/) to learn more about `vite`.

Including:
- `jest`
- `eslint`
- `prettier`
- `madge`
- `sass`
- script targets `pnpm lint` and `pnpm test`

## Run locally
```bash
npm install -g pnpm
pnpm install
pnpm run dev
```

Need to add `./src/.env` file with the following env-variables:
```text
REACT_APP_FIREBASE_KEY
REACT_APP_FIREBASE_DOMAIN
REACT_APP_FIREBASE_DATABASE
REACT_APP_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET
REACT_APP_FIREBASE_SENDER_ID
REACT_APP_FIREBASE_APP_ID
REACT_APP_FIREBASE_LOCATION_ID
```