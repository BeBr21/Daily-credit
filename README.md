# Daily Credit

iOS- und Android-App mit [Capacitor](https://capacitorjs.com). Die Web-App liegt in `www/index.html`.

## Setup
```bash
npm install
npx cap sync          # nach jeder Änderung an www/
npx cap open ios      # Xcode (nur macOS)
npx cap open android  # Android Studio
```
In Xcode/Android Studio auf Simulator oder Gerät starten.

## Icons & Startbildschirm
Quellbilder liegen in `assets/` (erzeugt mit `node assets/render.js`). Neu generieren:
```bash
npx capacitor-assets generate --ios --android --iconBackgroundColor "#23253A" --splashBackgroundColor "#F5F5F7" --splashBackgroundColorDark "#1D1D1F"
npx cap sync
```
