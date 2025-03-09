import express from 'express';
import bodyParser from 'body-parser';
import { MediaService } from './services/mediaService';
import { BrowserWindow, ipcMain } from 'electron';

const app = express();
app.use(bodyParser.json());

// ✅ API: Trigger Media Playback
app.post('/play-media', async (req, res) => {
    const { mediaId } = req.body;
    if (!mediaId) {
        return res.status(400).json({ error: 'Missing mediaId' });
    }

    try {
        // 🎬 Fetch media details
        const mediaData = await MediaService.getMediaById(mediaId);
        if (!mediaData) {
            return res.status(404).json({ error: 'Media not found' });
        }

        // 🔥 Send media data to Electron (via IPC)
        ipcMain.emit('play-media', null, mediaData);

        // ✅ Respond to API call
        return res.json({ message: 'Playback started', mediaData });
    } catch (error) {
        console.error('Error playing media:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

// 🌍 Start Express server
app.listen(3000, () => {
    console.log('Express API running on http://localhost:3000');
});
