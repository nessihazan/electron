// main/electronLogic.ts
import { app, BrowserWindow, ipcMain } from 'electron';
import { MediaController } from '../controllers/mediaController';

// Function to create the main window for the Electron application
export const createWindow = (): BrowserWindow => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    win.loadURL('http://localhost:3000'); // URL to renderer's content (e.g., UI HTML)
    win.on('closed', () => {
        win = null!;
    });

    return win;
};

// Function to listen for media requests and handle them
export const setupIpcListeners = (): void => {
    ipcMain.on('request-media', (event, id: string) => {
        MediaController.handleMediaRequest(event, id);
    });
};
