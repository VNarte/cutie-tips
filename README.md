# Cutie Tips 🔮✦

A whimsical, gemstone-and-witchcraft-themed tip calculator for Ginger. Add your line items, and it automatically calculates the Hawai'i state General Excise Tax (GET) and lets you pick a tip. No sign-up, no backend, just open it in a browser.

**Try it out** ~ [http://cutie.tips/](http://cutie.tips/)

## Features

- **Unlimited line items** - add as many pre-tax amounts as you need, each with an optional description
- **Hawai'i GET built in** - calculated at the 4.712% pass-on rate used statewide
- **Tip presets** - 10%, 15%, 18%, 20%, or a custom percentage
- **Live receipt summary** - subtotal, tax, tip, and total update instantly as you type
- **Installable** - has a web app manifest, so it can be added to a phone's home screen like a native app
- **Mobile-friendly** - single-column layout, 16px inputs (no iOS zoom-on-focus), and large tap targets

## Project structure

```
index.html            Markup - structure and layout of the page
styles.css            All visual styling (the gemstone/witchy theme)
calculator.js         All calculator logic (line items, tax, tip, totals)
manifest.json         Web app manifest (name, icons, theme color, install behavior)
cutie-logo.png        Logo displayed at the top of the page
icons/
  favicon.ico           Multi-size favicon (16/32/48px)
  favicon-16.png        16px favicon
  favicon-32.png        32px favicon
  apple-touch-icon.png  180px icon for iOS home screen
  icon-192.png          192px icon for Android/PWA
  icon-512.png          512px icon for Android/PWA
```

All files are referenced by **relative path**, so the whole folder needs to stay together — on your computer, in a Git repo, or wherever you host it.

## Running it locally

No build step, no installs required. Just open `index.html` in any browser:

- Double-click the file, or
- Drag it into an open browser window

## Deploying it online

Since this is a fully static site (HTML/CSS/JS, no server or database), you can deploy it for free with any static host. A few easy options:

- **[Netlify Drop](https://app.netlify.com/drop)** - drag the whole folder onto the page, get a live URL instantly, no account needed
- **GitHub Pages** - push the folder to a GitHub repo, enable Pages in the repo settings
- **Vercel** / **Cloudflare Pages** - connect a repo or drag-and-drop, similar to Netlify

## Customizing

A few things you might want to tweak, and where to find them:

| What                     | Where                                                              |
| ------------------------ | ------------------------------------------------------------------ |
| Tax rate                 | `GET_RATE` constant at the top of `calculator.js`                  |
| Default tip options      | The `.tip-btn` buttons in `index.html`                             |
| Colors                   | The `:root` variables at the top of `styles.css`                   |
| Fonts                    | The `@import` line at the top of `styles.css`                      |
| Page title / description | The `<title>` and `<meta name="description">` tags in `index.html` |

## Credits

Made with ✦ by [lol.rip](http://lol.rip)
