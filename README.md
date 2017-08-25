# create-riot-app
[RiotJS](https://github.com/riot/riot) startkit, based on [create-react-app](https://github.com/facebookincubator/create-react-app) and  [react-scripts](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts).

☺ Adapted from [create-riot-app-ejected](https://github.com/alexstep/create-riot-app-ejected) (much thanks!) and stripped down to one todo.tag.

Package included simple app example, webpack dev server with **riot hot reload** and less, sass, stylus support. ES6 features available too. Jest with riot support for testing. ES6 and eslint in riot tag.

Just read https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md but replace all "react" word to "riot" :)

## Features
* Automove [critical css to head](https://vuejsdevelopers.com/2017/07/24/critical-css-webpack/)
* Hot .tag reload
* Realtime code linting
* Async/await (ES2017).
* Exponentiation Operator (ES2016).
* Object Rest/Spread Properties (stage 3 proposal).
* Dynamic import() (stage 3 proposal)
* Jest for .tag testing
* Generate all favicons and manifest.json
* Pre-commit testing


## ⚡ Start dev-server
```
git clone https://github.com/pootie/create-riot-app my-riot-app
cd my-riot-app
```
```
npm install
npm start
```
go to http://localhost:3000


## ✔ Testing and linting
Package included Jest, for testing riot tags.
```
npm test
npm test -- --coverage
npm run coverage
#also
npm run eslint
npm run lesslint
```
[read more](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests) about testing

Add flow type checker.
```
npm install flow-bin
npm run flow
```
Write in head your js files `//@flow weak` to enable flow checker


## ⚛ Favicons and meta-information
Edit "meta" section in package.json ([see manifest format description](https://developer.mozilla.org/en-US/docs/Web/Manifest))
Put your app icon in ./src/favicon_source.png
and run
```
npm run favicons
```
manifest.json , browserconfig.xml, favicons and other meta-files will be generated and put to ./public/static/meta/ folder.

Also you can change some options in ./scripts/config/favicons.config.js



## ⚗ Build for production
```
npm run build
```

Check build result
```
npm run check:build
```


## ☁ Deploy

For example deploy app to [firebase](firebase.google.com)
```
npm install -g firebase-tools
firebase login
firebase init
npm run deploy
```
[Read more](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#azure) about deploy

### ⚙ Configuration options

Modify the ```.env``` file in the root of the generated project, and add any of the configuration options below 👇 to enable that feature.

The generated project comes with SASS support by default, but you can add LESS or Stylus at any time by edit the options from the ```.env``` file.

#### Styling
- ```enable_less=true``` - enable LESS support
- ```enable_sass=true``` - enable SASS support
- ```enable_stylus=true``` - enable Stylus support

#### Others
- ```HTTPS=true``` - enable https in localhost
- ```PORT=3000``` - change port
- ```OPEN_BROWSER=false``` - don't open browser after running webpack server

[Read more](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables) about .env files

#### Tabs or Spaces?
You can change codestyle rules in .eslintrc.js and run
`npm run eslint:fix` for format all files



