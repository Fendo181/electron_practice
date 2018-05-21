'use script';

//モジュールを読み込む
const electron = require('electron');
const app = electron.app;
// Blowserを読み込む
const BrowserWindow = electron.BrowserWindow;

// ブロックスコープの局所変数を宣言
let mainWindow;

// 開かれた際の処理
app.on('ready', function(){
    // create window
    mainWindow = new BrowserWindow({width: 600, height:400 });
    mainWindow.loadURL('file://'+ __dirname + '/index.html');
    // chomeのツールを読み込む
    mainWindow.webContents.openDevTools();
    // 閉じた際の処理
    mainWindow.on('closed', function(){
        mainWindow = null;
    });
});
