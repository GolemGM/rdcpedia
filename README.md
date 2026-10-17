# RDCpedia — Red Dust Colony Encyclopedia

An independent interactive encyclopedia prototype for **Red Dust Colony**. Uses the supplied Red Dust Colony Wiki XML export (16 October 2026) and the original building/item images provided for this project.

## Development

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open the local address printed by Vite (normally http://localhost:5173).

## Build

```bash
npm run build
```

This creates `dist/`, a static application deployable to GitHub Pages. `vite.config.ts` uses `base: './'` so it also works from a repository subpath.

## Publish to GitHub Pages

1. Push this project to `GolemGM/rdcpedia`.
2. In repository **Settings → Pages**, select **GitHub Actions** for Build and deployment.
3. The provided workflow automatically builds on pushes to `main` and deploys the generated static site.

## Current scope — prototype 0.1

- 64 building articles and 43 item articles imported from original Wiki XML; original wiki markup is retained in `src/catalog.json`.
- 69 building illustrations and 45 item illustrations supplied in the two archives; alternative variants retained in assets.
- Game-background preview, interactive open/close, navigation, category browser, search, three-entry quick selection, linked article references, scrollable article sections, back/forward visited history, zoom and compact menu.
- The remaining thematic sections are **marked as upcoming**, not fabricated. Conversion of full guides, research, and features from the existing text sources is the next milestone.
- Recipe wiki tables are displayed using an initial lightweight renderer; advanced wiki markup may require further parser improvements.

## Attribution and permissions

Game name, images and original game UI belong to their respective owners. Wiki source and game art are provided for the RDCpedia project. **Confirm permission for redistributing the game images publicly before pushing the asset folders to a public repository**. The code carries no claim of official affiliation.

## Notes

The extracted 64 + 43 count does not include exported helper templates, which are intentionally not encyclopedia articles. Individual asset image filenames are mapped from wiki infoboxes. No original uploaded files were modified.
