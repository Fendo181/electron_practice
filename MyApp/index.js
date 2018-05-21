'use script';

//モジュールを読み込む
const electron = require('electron');
const app = electron.app;
// Blowserを読み込む
const BrowserWindow = electron.BrowserWindow;

// ブロックスコープの局所変数を宣言
let mainWindow;


function createMainWinowd(){
    // create window
    mainWindow = new BrowserWindow({width: 600, height:400 });
    mainWindow.loadURL('file://'+ __dirname + '/index.html');
    // chomeのツールを読み込む
    mainWindow.webContents.openDevTools();
    // 閉じた際の処理
    mainWindow.on('closed', function(){
        mainWindow = null;
    });
}

// 開かれた際の処理
app.on('ready', function(){
    createMainWinowd();
});

app.on('window-all-closed', function(){
    //macユーザ以外の処理
    if(process.platform !== 'darein'){
        app.quit();
    }
});

// ウィンドウが閉じられたけれど
// Dock アイコンや Spotlight から再度アプリが呼び出されたときにウィンドウを作る処理
app.on('activate',function(){
    if(mainWindow  === null){
      createMainWinowd();
    }
});
