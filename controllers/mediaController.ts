// controllers/mediaController.ts
import { ipcMain } from 'electron';
import { MediaService } from '../services/mediaService';

export class MediaController {

    // Method to handle API call and send media data to the view (renderer)
    static handleMediaRequest(req, res) {
        const { filePath1, filePath2, metadata, hlsUrl } = req.body;
        
        if (!filePath1 || !filePath2 || !hlsUrl) {
            return res.status(400).json({ status: 'error', message: 'Missing file paths or HLS URL' });
        }

        // Create a new MediaModel instance
        const media = new MediaModel(filePath1, filePath2, metadata, hlsUrl);

        // Validate media files
        if (!media.validateMediaFiles()) {
            return res.status(400).json({ status: 'error', message: 'Invalid media files' });
        }

        // Send the media data to the view via IPC
        ipcMain.once('play-media', (_event, { mediaData }) => {
            if (mediaData) {
                // Send the media info to the view (renderer) to play the media
                mainWindow.webContents.send('play-media', mediaData);
            }
        });

        // Send the response back to the API client
        res.json({
            status: 'success',
            message: 'UI opened and media is playing',
            filePath1,
            filePath2,
            metadata,
            hlsUrl
        });
    }
}
