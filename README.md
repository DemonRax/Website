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

Those variables will be provided during the project setup in Firebase console.

In order to setup GitHub actions deployments to Firebase hosting, follow instructions while creating a Firebase project.
Once the Firebase is initialized using firebase-tool, make sure to run `firebase login:ci` in order to generate a token
for GitHub deployments.