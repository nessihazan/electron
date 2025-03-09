import { app, BrowserWindow, ipcMain } from 'electron';

let mainWindow: BrowserWindow | null = null;

// Function to create the Electron window
const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: __dirname + '/preload.js', // If needed
        },
    });

    mainWindow.loadURL(`file://${__dirname}/public/index.html`);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
};

// 🎬 Listen for media playback requests from the Express server
ipcMain.on('play-media', (event, mediaData) => {
    if (!mainWindow) {
        createWindow();
        mainWindow.webContents.once('did-finish-load', () => {
            mainWindow?.webContents.send('play-media', mediaData);
        });
    } else {
        mainWindow.webContents.send('play-media', mediaData);
    }
});

// Electron App Events
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
