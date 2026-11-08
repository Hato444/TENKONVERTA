# TENKONVERTA

A practical Windows desktop video downloader built with Electron. TENKONVERTA uses [yt-dlp](https://github.com/yt-dlp/yt-dlp) to download video and [FFmpeg](https://ffmpeg.org/) to process media, packaged in a straightforward desktop app.

## Download

Check the [Releases](https://github.com/Hato444/TENKONVERTA/releases) page for available builds.

## Build from source

Requirements: Node.js and npm.

```bash
npm install
npm run dev:win
```

To build a Windows installer:

```bash
npm run build:win
```

## Attribution

TENKONVERTA is adapted from [ArcDLP](https://github.com/archisvaze/arcdlp), an open-source Electron downloader. ArcDLP's MIT license and required copyright notice are retained in [`LICENSE`](LICENSE). TENKONVERTA also uses yt-dlp, FFmpeg, Electron, and other open-source components; see their respective project and license notices.

## License

TENKONVERTA is distributed under the MIT License. See [`LICENSE`](LICENSE) for the license text and notices.
