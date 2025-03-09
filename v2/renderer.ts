const { ipcRenderer } = require('electron');

ipcRenderer.on('play-media', (event, mediaData) => {
    const audioPlayer = document.getElementById('audio-player') as HTMLAudioElement;
    audioPlayer.src = mediaData.hlsUrl;
    audioPlayer.play();
});
