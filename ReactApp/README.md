# Závislosti

webpack-merge - sloučení vice webpack config souborů pro sdílení konfigurace
npm-run-all - umožnuje spouštět více npm skritů jedním příkazem
express-http-proxy - možnost vytvoření proxy

terser-webpack-plugin - nahráda za uglify pro minifikaci JS
mini-css-extract-plugin - extrakce css souborů z JS bundlů do zvláštních kaskádových souborů.
cssnano-webpack-plugin
https://www.npmjs.com/package/cssnano-webpack-plugin

handlebars - šablonovací nástroj pro vytvoření dynamického html (použito na serverové straně při generování nového html)
handlebars-loader: webpack loader pro zpracování handlebars souborů.
html-webpack-plugin: webpack plugin pro generování nových html souborů.
terser-webpack-plugin: webpack plugin pro zmenšení velikosti JS souborů
optimize-css-assets-webpack-plugin - webpack plugin pro zmenšení velikosti css souborů.
styled-components - JS knihovna pro stylování komponent.
html-minifier - minifikace html řetězců.
jest - testovaci framework vhodný převážně pro React.
ts-jest - Preprocesor pro test framework.
url-loader - zpracování obrázků
file-loader: nutne pro import obrázků
jest - je dev dependency (pouze pro testovací účely- vývoj)
ajv - production depeendency (enzyme)
js-cookie - práce s cookies (využivá tuto knihovnu soubor Cookie-Helper.ts)

moxios - testování async volání do REST rozhraní

react-notifications-component - notifikační komponenta využiváná po odeslání emailu

https://stackoverflow.com/questions/34352929/webpack-cannot-resolve-module-file-loader

Import obrázků v TS skrze webpack
https://stackoverflow.com/questions/52759220/importing-images-in-typescript-react-cannot-find-module

Preview obrazku
https://github.com/guonanci/react-images-viewer

icon-font-loader - načitání ikon svg apod

icons loader

https://www.npmjs.com/package/icon-font-loader

https://stackoverflow.com/questions/49877149/webpack-cant-load-fonts-ttf
https://stackoverflow.com/questions/51277381/webpack-4-woff-woff2-svgs-failed-to-load

# FONTS

https://stackoverflow.com/questions/40769551/how-to-use-google-fonts-in-react-js
https://stackoverflow.com/questions/41676054/how-to-add-fonts-to-create-react-app-based-projects
https://stackoverflow.com/questions/55471613/how-can-set-global-font-family-using-styled-components
https://www.onlinewebfonts.com/user
https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni

# Prvni spuštění

1. npm i (pro instalaci node modules)
2. Pro vývoj (yarn run dev)

# Nasazeni

1. yarn run client-prod
2. yarn run server-prod

# Kompilace info

stage0 nepouživat v zahrnut v env

# Poslední aktualizace package.json

17.8.2019: 19:52

npm i eslint --save
https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
https://stackoverflow.com/questions/47105088/react-eslint-config-unexpected-file-extension-jsx
https://github.com/babel/babel-loader/issues/173
https://medium.com/@selom/how-to-set-up-webpack-and-babel-for-a-simple-reactjs-app-8334bea3988d
https://www.robinwieruch.de/webpack-eslint/
https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
https://eslint.org/docs/rules/consistent-return
https://eslint.org/docs/rules/space-in-parens
https://eslint.org/docs/rules/padded-blocks

# Typescript integrace

npm install -g typescript

tsc --init

npm install -D ts-node

npm i ts-node typescript

You need to install ts-node as global
npm install -g ts-node

voladni nodů lze už přes ts-node. Takže je možné tak mít typovou webpack konfiguraci.

# Typescript rozhrani

https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c

ESLINT

https://javascriptplayground.com/typescript-eslint/
https://github.com/Microsoft/vscode-eslint/issues/642
https://user-images.githubusercontent.com/1931590/53940198-53c21f80-40b5-11e9-828a-4da5fbbeb761.png

https://mhartington.io/post/typescript-eslint-setup/
https://stackoverflow.com/questions/54030381/unable-to-extend-express-request-in-typescript
https://stackoverflow.com/questions/37377731/extend-express-request-object-using-typescript
https://joshuaavalon.io/create-type-safe-react-redux-store-with-typescript

CSS
https://stackoverflow.com/questions/51758302/can-not-minify-the-css-code-with-webpack
https://github.com/NMFR/optimize-css-assets-webpack-plugin
https://www.styled-components.com/
https://github.com/styled-components/styled-components
https://medium.com/styled-components/the-simple-guide-to-server-side-rendering-react-with-styled-components-d31c6b2b8fbf

# TYPESCRIPT - COMPONENT CONVENTION

https://medium.com/@ethan_ikt/react-stateless-functional-component-with-typescript-ce5043466011

# Struktura

do common se ukládají stylovací komponenty, které jsou znovu použitelné

shared/helpers/ - pomocne metody, které jsou potřeba jak pro serverovou tak klientskou část.

# Časté chyby

Uncaught Error: Cannot find module 'console'

@types/node --save-dev

Remove the node_modules folder, run npm cache clean then reinstall the packages npm install

Yarn to vyřešil.

# SEO Optimalizace

React-helmet

https://www.npmjs.com/package/react-helmet

TYPESCRIPT

https://stackoverflow.com/questions/12709074/how-do-you-explicitly-set-a-new-property-on-window-in-typescript

# Dynamické renderování komponent

https://kyleshevlin.com/how-to-dynamically-render-react-components

# FOOTER

https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/

# INTEGRACE TYPESCRIPTU DO JEST FRAMEWORKU

https://www.npmjs.com/package/ts-jest

https://github.com/wmonk/create-react-app-typescript/issues/282

src/assets adresář různé potřebné statické soubory

shared/modules/body
shared/modules/footer
shared/modules/header

Definování zobrazení všech dostupných modulů.

# BOOTSTRAP REBOOT

https://www.itnetwork.cz/html-css/bootstrap/kurz/bootstrap-reboot

# PROBLÉM S FONTY

https://github.com/zeit/next.js/issues/512

# JEST

https://intellij-support.jetbrains.com/hc/en-us/community/posts/115000242490-Jest-error-Document-is-undefined

# STYLED COMPONENT TYPESCRIPT

https://github.com/styled-components/styled-components/issues/630

# STYLED COMPONENTS - LOAD STYLES ON DEMAND

https://stackoverflow.com/questions/55829706/loading-external-css-file-just-for-one-react-component

# STYLED COMPONENTS - BABEL PLUGIN

https://styled-components.com/docs/tooling#babel-plugin


# STYLED COMPONENTS - SSR

https://www.codota.com/code/javascript/functions/styled-components/ServerStyleSheet/collectStyles
https://spectrum.chat/styled-components/general/styled-components-ssr-minify~04c079e9-0260-4236-a4bf-342e09fb793f



# Datová struktura - slovník

shared/helpers/data-structures

https://www.dustinhorne.com/post/2016/06/09/implementing-a-dictionary-in-typescript

# FONTY

https://fonts.googleapis.com/css?family=Quicksand

# FONT AWESOME

https://medium.com/yld-blog/a-tale-of-react-server-side-rendering-cb95a441ca01

https://fontawesome.com/icons?d=gallery

https://github.com/FortAwesome/react-fontawesome

/_ Fontawesome imports. _/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

<FontAwesomeIcon icon={faExternalLinkAlt} />

# SIDEBAR EXAMPLE (ADMIN)

https://github.com/BilalBouk/reactstrap-basic-sidebar

# KOA HEADERS CACHE

https://stackoverflow.com/questions/51450411/set-header-cache-control-in-koa-frame-work
https://stackoverflow.com/questions/3401049/chrome-doesnt-cache-images-js-css

# Prověřit

https://github.com/yury-dymov/react-bootstrap-button-loader

# WEBPAGE TEST bez optimalizace kodu na SSR

https://www.webpagetest.org/result/191105_Z8_6d6138a0f30a330f42b770de0512644e/
https://www.webpagetest.org/result/191105_NR_6823233b7803bd16d931d2fccebcde0b/
https://www.webpagetest.org/result/191106_D0_6f0bb94a9c78417bba956cc286e08d73/

# WYSIWYG

npm i draftjs-to-html

# WYSIWYG EDITOR STYLOVANI

https://stackoverflow.com/questions/38289858/draftjs-styling-in-react

# REACT HOOKS FOR TIMEOUT AND INTERVAL

https://stackoverflow.com/questions/53024496/state-not-updating-when-using-react-state-hook-within-setinterval/59274004#59274004

# REACT HOOKS SHOULD COMPONENT UPDATE

https://stackoverflow.com/questions/55622768/uncaught-invariant-violation-rendered-more-hooks-than-during-the-previous-rende

# COOKIE CONSENT

https://www.npmjs.com/package/react-cookie-consent

npm i react-cookie-consent

# VYKON

<Profiler
id="Landing Page"
onRender={(id, phase, actualDuration) => {
console.log({
id,
phase,
actualDuration
});
}} >

  </Profiler>

# REACT SOCIAL ICONS

https://www.npmjs.com/package/react-social-icons

# REACT-RECAPTCHA

https://www.youtube.com/watch?v=3r7YMaT1k6Y

npm i react-recaptcha
https://www.npmjs.com/package/react-recaptcha

SITE KEY

6LcpU8QUAAAAAHhLWENnbWoJgquENaXCRjztiSDM

SECRET KEY

6LcpU8QUAAAAAHQFVdtkF45Gtb82natUzLHk0mjK

https://developers.google.com/recaptcha/docs/v3#Actions

# DELAYED COMPONENT

https://stackoverflow.com/questions/30803440/delayed-rendering-of-react-components

# FORMS

https://www.robinwieruch.de/react-preventdefault // PREVENT DEFAULT

# BROADCASTING

https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel/postMessage
https://www.npmjs.com/package/redux-state-sync

https://www.npmjs.com/package/redux-state-sync

# GENERATE LICENCE

https://www.npmjs.com/package/generate-license

# SEO

https://seo-servis.cz/source-zdrojovy-kod

# ENZYME

npm i enzyme-adapter-react-16 --save-dev

enzyme-adapter-react-15

# FOOTER

https://dev.to/niorad/keeping-the-footer-at-the-bottom-with-css-grid-15mf

# TYPESCRIPT DEVTOOLS

https://www.mydatahack.com/getting-redux-devtools-to-work-with-typescript/

# ESLINTER OMMITED FILES

https://github.com/typescript-eslint/typescript-eslint/issues/109



# GraphQL

https://github.com/trojanowski/react-apollo-hooks