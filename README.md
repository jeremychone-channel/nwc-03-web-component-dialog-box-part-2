
## Dialog Box with Native Web Component - Part 2 - (bonus: multi-touch drag)

- [Youtube Episode: S01E04](https://www.youtube.com/watch?v=e3Z1SXH_pOw) (thumb up appreciated)

This part 2 of building a Dialog Box with native Web Component. We will be using  HTML, CSS, JavaScript, with TypeScript and postcss, and learning about web component specialization with class inheritance. 

As a bonus, we will add multi-touch drag for mobile devices.

- [Jeremy Chone Dev Channel](https://www.youtube.com/jeremychone/)

> Note: Each step [in the youtube episode](https://www.youtube.com/watch?v=e3Z1SXH_pOw) matches a git commit and tag. There might be more commits afterward for code upgrade.

[Part 1 github link](https://github.com/jeremychone-channel/s01e02-web-component-dialog-box-part-1), [Part 1 Youtube Episode](https://www.youtube.com/watch?v=pdrpeF0P7gY)

## Install & Run

```sh
# Clone the base code to your folder
git clone git@github.com:jeremchone-channel/s01e04-web-component-dialog-box-part-2.git  dialog-box-part-2/


cd dialog-box-part-2/

# make it yours
rm -Rf .git

# install the dependencies
npm install

# build and start REPL development 
npm run watch

# (should open http://localhost:8888/index.html in your default browser)
```

## Start coding

After `npm run watch` for **live coding**: 

- `pcss/main.pcss` and its imports gets recompiled as `dist/app-bundle.pcss`
- `src/**/*.ts ` files get re-compiled as `dist/app-bundle.js`
- `design.sketch` if present and sketch installed, generates `svg/sprite.svg` and `pcss/var-colors.pcss`


## Approach 

> Technology: [Typescript](https://www.typescriptlang.org/) | [postcss](https://postcss.org/) | [rollup](https://rollupjs.org/) | [native web components](https://developers.google.com/web/fundamentals/web-components/) |  [dom-native library (<7kb gzip, < 17 min.js)](https://www.npmjs.com/package/dom-native)

> THE DOM IS THE FRAMEWORK - ZERO IE TAX | ZERO VIRTUAL DOM | ZERO FRAMEWORK