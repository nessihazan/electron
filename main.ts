// main/main.ts
import { app } from 'electron';
import { createWindow, setupIpcListeners } from './electronLogic';
import express from 'express';
import bodyParser from 'body-parser';
import { MediaController } from '../controllers/mediaController';

const expressApp = express();

// Use middleware to parse JSON requests
expressApp.use(bodyParser.json());

// Set up API endpoint for media requests
expressApp.post('/media/play-media', MediaController.handleMediaRequest);

// Start Express server
expressApp.listen(3000, () => {
    console.log('API server running on http://localhost:3000');
});

// Handle Electron window creation and IPC listeners setup
app.whenReady().then(() => {
    createWindow();
    setupIpcListeners();
});

// Quit the application when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
