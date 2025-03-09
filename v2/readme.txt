/electron-media-player
│── /public               # HTML & frontend files
│── /services             # Business logic
│   ├── mediaService.ts   # Fetch media from external API
│   ├── ThirdPartyApiClient.ts  # API client for external service
│── main.ts               # Electron logic (UI, IPC)
│── server.ts             # Express API (handles external requests)
│── renderer.ts           # Renderer process logic
│── tsconfig.json         # TypeScript config
│── package.json          # Dependencies



✅ How It Works
	1.	Express Server (server.ts)
	•	Runs on port 3000.
	•	Handles POST /play-media requests.
	•	Fetches media data from an external API.
	•	Sends media data to Electron via IPC.
	2.	Electron App (main.ts)
	•	Listens for IPC messages from Express.
	•	Creates a new Electron window dynamically.
	•	Sends media data to Renderer after loading.
	3.	Renderer (renderer.ts)
	•	Receives media data from IPC.
	•	Updates the audio player source.
	•	Starts playback automatically.
