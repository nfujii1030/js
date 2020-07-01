# 2020

- Node.js v10.1.0+
- npm v6.1.0+

## npm scripts

### `npm start`

`./src`以下の開発ソースを監視し、開発サーバを起動

### `npm run build`

`./src`以下の開発ソースからプロダクションビルドを行い、`./dist`へ展開する。この際、各バンドルファイルを圧縮する。**配信前には必ずビルドを行うこと。**

## Overview

### JavaScript

`./src/assets/js` 直下の`.js`ファイルがすべてエントリーポイントとなるため、
モジュールは適宜ディレクトリを切って管理すること。

※JavaScript 周りは主に`webpack`にて取り扱う
※`webpack`の`optimization.splitChunks`を有効化している
※`polyfill (core-js / regenerator-runtime)`をすべてのエントリーポイントで import している

#### `optimization.splitChunks` について

現状、`modules.js`として、複数のエントリーポイント間で利用している共通モジュールをバンドルしたファイルを生成する。
このため、エントリーポイントが唯一となるケース（単一 LP や SPA）では、これを使用しないように設定すること。詳しくは webpack の公式ドキュメントを参照のこと。

※SPA の場合、フレームワークごとにサポートされている CLI ツールを使用されることを推奨

### Sass

※JavaScript 以外は`gulp@4`にて取り扱う

`./src/assets/sass`以下の`.scss`が`./dist/assets/css`以下へコンパイルされる。
※ `Autoprefixer`対応済み

内部では`node-sass`ではなく`Dart Sass`を使用

### EJS

`./src`以下のすべての`.ejs`ファイルは`./dist`へコンパイルされる。

※`.html`ファイルも可能ですが、ejs を推奨
