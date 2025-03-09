// renderer.ts
const { ipcRenderer } = require('electron');

// Listen for play button click and send media ID to main process
document.getElementById('play-button').addEventListener('click', () => {
    const mediaId = document.getElementById('media-id').value;
    ipcRenderer.send('request-media', mediaId); // Send request to the main process
});

// Listen for the response containing media data from the main process
ipcRenderer.on('media-response', (event, mediaData) => {
    if (mediaData && mediaData.hlsUrl) {
        const audioPlayer = document.getElementById('audio-player') as HTMLAudioElement;
        audioPlayer.src = mediaData.hlsUrl;
        audioPlayer.play();
    }
});

// Listen for error messages from the main process
ipcRenderer.on('media-error', (event, message) => {
    alert(message); // Show the error message
});
