// preload.ts (Electron Preload script)

const { contextBridge, ipcRenderer } = require('electron');

// Expose the methods to the renderer process safely
contextBridge.exposeInMainWorld('electron', {
    playMedia: (id: string) => ipcRenderer.invoke('play-media', id)
});
