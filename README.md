## Electron

Electronに慣れる為に簡単なアプリケーションを作成します。

### 概要

- Mac/linux/WindowsでデスクトップAppを作れる。
- [公式](https://electronjs.org/)
- [ドットインストール](https://dotinstall.com/lessons/basic_electron/36201)

### 用語説明

- index.js
  - main process
  - アプリの状態管理を行う。
- hoge.html
  - rendere process


#### インストール方法

node.jsをインストールする。


```
brew install node
```

electronのインストール

```
//package.jsonを作成する。
npm init

// electronをインストールする。
npm i -D electron@latest  -save-dev
```

## アプリケーション作成方法

electron-packagerをインストールする。

```
npm i electron-packager --save-dev
```

versionを確認する。

```
node_modules/.bin/electron -v

v2.0.1
```

アプリケーションを作成する。
ディレクトリ配下に`./MyApp/myapp-darwin-x64/MyApp.app`が出来る。

```
node_modules/.bin/electron-packager ./ Myapp --platform=darwin --arch=x64
```

これで出来る。


参考
- [Node.js と npm インストールとアップデート](https://qiita.com/jaxx2104/items/2277cec77850f2d83c7a)




