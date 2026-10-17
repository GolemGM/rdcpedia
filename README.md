# RDCpedia v0.2 — static prototype

A working-file prototype for the Red Dust Colony encyclopedia. Open `index.html` locally in your browser. No npm, React, Git, build, or server is required to run the prototype.

## What changed since v0.1
- Paused gameplay fills the available viewport. No second dark overlay is added when the encyclopedia opens.
- Encyclopedia overlay covers 85% width and height; X closes it.
- Real landing/Home screen inside Encyclopedia.
- Selecting a Building or Item category shows a grid of pages in the central area.
- Selecting a page switches to detail: narrow category rail, bounded quick selection + Contents, central article, Related links.
- Navigation history follows actual visited views and pages. Breadcrumb labels can navigate to Home or the section/category overview.
- Original MediaWiki body is partially converted: headings, lists, linked item references, infoboxes, tables. It is not a full MediaWiki parser; unusual templates remain for future iteration.
- Search matches Building/Item titles. Other thematic sections are pending.

## Static GitHub Pages
Included `.github/workflows/deploy.yml` deploys the static files directly. It does not use Node.js, npm, package-lock.json, or a build step. GitHub Pages must use **GitHub Actions** as the source. Do not mix this with the old React project without a deliberate clean replacement.

## Source data
Building/Item entries were imported from the project wiki XML. Images were supplied in the Building.zip and Items.zip archives. Source texts, original images, and project assets should be used only in line with permission from their owners.

## Known limitations
- Rendering is a practical wiki-text subset, not a complete MediaWiki parser.
- Technology, Colonists, Station, Environment, Guidebook, Features, Controls are currently placeholders.
- Display font approximates game UI; exact game font is not bundled.
- Layout/zoom/visual behavior still needs user review in a real browser.
