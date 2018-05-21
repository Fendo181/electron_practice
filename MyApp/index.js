'use script';

//モジュールを読み込む
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow; // Blowserを読み込む
const Menu = electron.Menu; //メニューモジュールを作成する。

// ブロックスコープの局所変数を宣言
let mainWindow;


let menuTemplate = [{
    label: 'MyApp',
    submenu: [
        { label: 'About', accelerator: 'CmdOrCtrl+Shift+A', click: function(){
            showAboutDaialog();
        } },
        { type: 'separator'},
        { label: 'Setting', accelerator: 'CmdOrCtrl+,', click: function(){
            showSettingWindow();
        } },
        { type: 'separator'},
        { label: 'Quit', accelerator: 'CmdOrCtrl+C', click: function(){
            app.quit();
        } }
    ]
}]

//テンプレートを読みこんでくる。
let menu = Menu.buildFromTemplate(menuTemplate)



function createMainWinowd(){
    Menu.setApplicationMenu(menu);
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
