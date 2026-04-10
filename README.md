# My Moments

A beautiful, minimal photo gallery built with **Vue 3** and **Vite**, designed for couples and families to showcase their memories. Albums are organized as folders in the repository, and the gallery is automatically generated and deployed to **GitHub Pages** — no database or CMS required.

## Features

- **Auto-generated albums** — each subfolder under `images/` becomes a tab in the gallery
- **PhotoSwipe lightbox** — smooth, mobile-friendly full-screen image viewing
- **PrimeVue UI** — clean, responsive interface with the Aura theme
- **Zero-config deployment** — push to `main` and GitHub Actions builds and deploys to GitHub Pages
- **No backend needed** — images are served directly from the repository via GitHub's raw content URLs

## Preview

The gallery renders a hero image at the top followed by tabbed albums. Each album displays a responsive grid of thumbnails that open in a lightbox on click.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- A GitHub account (for deployment)

### Setup

1. **Fork or clone** this repository:

   ```bash
   git clone https://github.com/hybridx/my-moments.git
   cd my-moments
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables** by copying the example file:

   ```bash
   cp .env.example .env
   ```

   Update `.env` with your GitHub username and repository:

   ```
   GITHUB_USER="your-username"
   GITHUB_REPOSITORY="your-username/my-moments"
   VITE_GITHUB_REPOSITORY="your-username/my-moments"
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

## Adding Your Photos

1. Place a **hero image** at `images/main.jpg` — this is displayed at the top of the gallery.
2. Create **album folders** inside `images/` (e.g., `images/wedding/`, `images/vacation/`).
3. Drop your photos (`.jpg`, `.webp`, etc.) into the album folders.
4. Commit and push — the build process picks up new folders and images automatically.

```
images/
├── main.jpg              # Hero image
├── engagement/           # Album tab: "engagement"
│   ├── photo1.jpg
│   └── photo2.jpg
├── pre-wed/              # Album tab: "pre-wed"
│   ├── photo1.jpg
│   └── photo2.jpg
└── reception/            # Album tab: "reception"
    ├── photo1.jpg
    └── photo2.jpg
```

Each folder becomes a tab in the UI. The folder name is used as the album/tab label.

## How It Works

1. **At build time**, a Vite plugin fetches the repository's `images/` directory listing via the GitHub Contents API and writes the metadata to JSON files under `public/`.
2. **At runtime**, the app loads these JSON files to render album tabs and image grids, using GitHub's `download_url` for each image.

This means no manual image manifest is needed — just drop files into folders and the gallery updates on the next build.

## Deployment

The included GitHub Actions workflow (`.github/workflows/vue-deploy.yml`) handles everything:

1. Push your changes to the `main` branch.
2. The workflow installs dependencies, builds the app, and deploys to GitHub Pages.
3. Your gallery is live at `https://<your-username>.github.io/my-moments/`.

### Enable GitHub Pages

Go to your repository **Settings → Pages** and set the source to **GitHub Actions**.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Vue 3](https://vuejs.org/) | Reactive UI framework |
| [Vite](https://vitejs.dev/) | Build tool and dev server |
| [PrimeVue](https://primevue.org/) | UI component library (tabs, theming) |
| [PhotoSwipe](https://photoswipe.com/) | Lightbox for full-screen image viewing |
| [Axios](https://axios-http.com/) | HTTP client for loading image metadata |
| [GitHub Pages](https://pages.github.com/) | Static site hosting |

## Project Structure

```
my-moments/
├── src/
│   ├── main.js               # App entry point (Vue + PrimeVue setup)
│   ├── App.vue                # Root component
│   └── components/
│       ├── TheMain.vue        # Hero image section
│       ├── TheTabs.vue        # Album tabs container
│       └── TheGallery.vue     # Image grid with PhotoSwipe lightbox
├── service/
│   └── api.js                 # API helpers for loading album data
├── images/                    # Your photos, organized by album folder
├── public/                    # Static assets (favicon, build-generated JSON)
├── .github/workflows/         # GitHub Actions deployment workflow
├── vite.config.js             # Vite config with build-time image indexing
└── .env.example               # Environment variable template
```

## License

This project is open source. Feel free to fork it and create your own photo gallery.
