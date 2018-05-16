# Instructions

If you have registered on the official server via Steam or GitHub, please go to [account management](https://screeps.com/a/#!/account) and
make sure you have configured an email and password for your account to access your account on [https://screeps.com](https://screeps.com) and [https://screeps.com/ptr](https://screeps.com/ptr).

On private servers, make sure you have authorization enabled and that the administrator has created your account.

### Install Dependencies
`yarn install` or `npm install`

### Add Screeps configuration settings
 - Copy `build/screeps.config.example.json` to `build/screeps.config.json`
 - Add your username and password. Alternatively use any other options you want.

#### Options
```
{
  branch: 'default',
  email: 'EMAIL',
  password: 'PASSWORD',
  token: 'TOKEN',
  serverUrl: 'https://screeps.com',
  serverPassword: 'SERVER_PASS',
  gzip: false
}
```

If your server modules provide support, you can use tokens for authentication and send compressed bundles.

### Build
`yarn run dev` or `npm run dev`

### Build and deploy to Screeps server
`yarn run prod` or `npm run prod`

### Watch for changes and push to server
`yarn run watch` or `npm run watch`
