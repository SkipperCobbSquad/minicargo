import { app, BrowserWindow } from 'electron';
import * as isDev from 'electron-is-dev';
import installExtension, { REDUX_DEVTOOLS } from 'electron-devtools-installer';

let win: Electron.BrowserWindow | null;

function createWindow() {
  win = new BrowserWindow({
    width: 1120,
    height: 650,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    darkTheme: true,
    show: false,
    // icon: path.join(__dirname, 'Logo.png')
  });
  win.menuBarVisible = false;
  if (isDev) {
    win.loadURL('http://localhost:3000');
  } else {
    win.loadFile('build/index.html');
  }
  win.on('ready-to-show', () => {
    win?.show();
  });
}

app.on('ready', () => {
  createWindow();
  installExtension(REDUX_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('quit', () => {});
