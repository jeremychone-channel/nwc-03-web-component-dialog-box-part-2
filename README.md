
## Dialog Box with Web Component - Part 1 - Composition (bonus: Draggable)

- [Youtube Episode: S01E02](https://www.youtube.com/watch?v=pdrpeF0P7gY) (thumb up appreciated)


This code will show how to create a composable Dialog Box with a web component. Will be using  HTML, CSS, JavaScript, and learning about  Slot, CSS Parts, and ShadowDOM. 

As a bonus, we will make it draggable with a couple of lines of code.

- [Jeremy Chone Dev Channel](https://www.youtube.com/jeremychone/) (subscribe welcome)

> Note: Each step [in the youtube episode](https://www.youtube.com/watch?v=pdrpeF0P7gY) matches a git commit and tag. There might be more commits afterward for code upgrade.


## Install & Run

```sh
# Clone the base code to your folder
git clone git@github.com:jeremchone-channel/s01e02-web-component-dialog-box-part-1.git  dialog-box-part1/


cd dialog-box-part1/

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
- `design.sketch` if present and if has sketch installed, generates `svg/sprite.svg` and `pcss.var-colors.pcss`


## Approach 

> Technology: [Typescript](https://www.typescriptlang.org/) | [postcss](https://postcss.org/) | [rollup](https://rollupjs.org/) | [native web components](https://developers.google.com/web/fundamentals/web-components/) |  [dom-native library (<7kb gzip, < 17 min.js)](https://www.npmjs.com/package/dom-native)

> THE DOM IS THE FRAMEWORK - ZERO IE TAX | ZERO VIRTUAL DOM | ZERO FRAMEWORK