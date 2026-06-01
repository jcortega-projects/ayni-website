# Ayni — Meaningful Reciprocity

A static landing page for [ayniglobal.org](https://ayniglobal.org), the Ayni podcast and community platform. Real conversations with researchers, founders, and scholars.

## Adding a New Episode / Guest

1. Add the guest's photo to `photos/guests/` (e.g., `photos/guests/firstname.jpg`)
2. Open `index.html` and find the `<!-- EPISODES / PEOPLE -->` section
3. Copy the last episode block (everything between the `<!-- ====== EPISODE N -->` comments)
4. Paste it after the last episode, inside the `<section class="episodes">` tag
5. Update the following fields:
   - **Class**: alternate between `"episode"` and `"episode reverse"` so photos zigzag
   - **Photo path**: `style="background-image:url('photos/guests/yourguest.jpg')"`
   - **aria-label**: descriptive text for accessibility
   - **Status badge**: use `<span class="ep-status">Episode N · Live</span>` for live episodes, or `<span class="ep-status upcoming">Airs [Date]</span>` for upcoming
   - **Country, title, guest name, description**: update the text content
   - **Watch button**: replace `btn btn-disabled` / `Coming Soon` with `<a href="YOUTUBE_URL" target="_blank" class="btn btn-watch">Watch Episode</a>` when live
   - **LinkedIn**: update the `href` on the LinkedIn link

## Adding Carousel Photos

1. Add the photo to `photos/gallery/` (e.g., `photos/gallery/g7.jpg`)
2. Open `index.html` and find `<div class="carousel-track" id="carouselTrack">`
3. Add a new line inside the track:
   ```html
   <div class="carousel-item" style="background-image:url('photos/gallery/g7.jpg')"><span>Caption Here</span></div>
   ```
4. The JavaScript automatically duplicates all items for seamless infinite scrolling — no other changes needed.

## Deployment

Push to the `main` branch. GitHub Pages / Cloudflare Pages auto-deploys from there.

```bash
git add .
git commit -m "your message"
git push origin main
```

The `CNAME` file is set to `ayniglobal.org`.

## Folder Structure

```
ayni-website/
├── index.html              Main page
├── css/styles.css          All styles
├── js/main.js              Nav, mobile menu, carousel logic
├── photos/
│   ├── juan.jpg            Host photo (About section)
│   ├── guests/             Episode guest photos
│   └── gallery/            Carousel photos
├── assets/
│   ├── favicon.ico         Browser tab icon
│   └── og-image.jpg        Social media preview image
├── reference/
│   └── index.html          Original prototype (not deployed)
├── CNAME                   Custom domain config
├── README.md               This file
└── .gitignore
```

## Brand Reference

| Element | Value |
|---------|-------|
| Deep Navy | `#1B2A4A` |
| Warm Gold | `#C8943E` |
| Cream | `#F5F0E8` |
| Display Font | Playfair Display |
| Accent Font | Cormorant Garamond |
| Body Font | Jost |

## No Build Tools

This is a pure HTML/CSS/JS site. No npm, no bundler, no frameworks. Open `index.html` in a browser to preview locally.
