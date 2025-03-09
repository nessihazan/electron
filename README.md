/electron-media-player
│
├── /controllers
│   └── mediaController.ts  (Handles the media logic and API request routing)
│
├── /services
│   ├── mediaService.ts     (Handles the media service logic and external API calls)
│   └── ThirdPartyApiClient.ts  (Handles communication with the third-party API)
│
├── /main
│   ├── main.ts            (Main Electron entry point)
│   └── electronLogic.ts   (Electron-specific logic, creates window, etc.)
│
├── /public
│   └── index.html         (UI HTML)
├── /renderer.ts           (Handles UI interaction and IPC communication)
└── /package.json          (Dependencies and start script)
