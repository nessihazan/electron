mport { Request, Response } from 'express';
import { MediaService } from '../services/mediaService';
import { ipcMain } from 'electron';

export class MediaController {
    static async playMedia(req: Request, res: Response): Promise<Response> {
        const { mediaId } = req.body;
        if (!mediaId) {
            return res.status(400).json({ error: 'Missing mediaId' });
        }

        try {
            // 🎬 Fetch media details from service
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
    }
}
