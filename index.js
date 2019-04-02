'use strict';
const electron = require('electron');
require('electron-debug')();
const gameModels = require('./dist/game_model');

const app = electron.app;

const game = gameModels.game;
console.log(game);

// Prevent window being garbage collected
let mainWindow;

function onClosed() {
  // Dereference the window
  // For multiple windows store them in an array
  mainWindow = null;
}

function createMainWindow() {
  const win = new electron.BrowserWindow({
    width: 600,
    height: 400,
  });

  win.loadURL(`file://${__dirname}/index.html`);
  win.on('closed', onClosed);

  return win;
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (!mainWindow) {
    mainWindow = createMainWindow();
  }
});

app.on('ready', () => {
  mainWindow = createMainWindow();
});
