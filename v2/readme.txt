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
