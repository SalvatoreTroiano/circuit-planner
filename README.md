# 🔄 Circuit Planner

> Pianificatore di schede allenamento a circuito per **Personal Trainer**  
> Crea, organizza e genera **PDF professionali** in pochi secondi.

![Circuit Planner](icons/icon-192x192.png)

---

## ✨ Funzionalità

- 📅 **7 giorni** di pianificazione settimanale
- 🔄 **Circuiti multipli** per ogni giorno (con giri configurabili)
- 💪 **Libreria esercizi** per tipo: Mobility, Strength, Core/Power, Cardio
- 🏋️ Differenziazione **superiore / inferiore** per Strength
- ⏱️ Gestione **ripetizioni e recuperi** (preset + campo libero)
- 📝 **Note** tecniche per ogni esercizio
- 🖼️ **Upload logo** del PT
- 📄 **Generazione PDF** professionale con intestazione, tabelle colorate e numerazione pagine
- 📲 **Installabile come App** (PWA) su iOS, Android e desktop
- 🌐 **Funziona offline** grazie al Service Worker

---

## 🚀 Deploy su GitHub Pages

### 1. Crea il repository

```bash
# Inizializza git nella cartella del progetto
git init
git add .
git commit -m "🚀 Initial commit — Circuit Planner PWA"
```

### 2. Crea il repository su GitHub

1. Vai su [github.com/new](https://github.com/new)
2. Dai il nome **`circuit-planner`** (o qualsiasi nome)
3. Lascialo **Public**
4. **Non** inizializzare con README (lo hai già)

### 3. Collega e pusha

```bash
git remote add origin https://github.com/TUO_USERNAME/circuit-planner.git
git branch -M main
git push -u origin main
```

### 4. Abilita GitHub Pages

1. Vai su **Settings** → **Pages**
2. In **Source** seleziona **"GitHub Actions"**
3. Il workflow si attiverà automaticamente ad ogni push

### 5. Accedi all'app

L'app sarà disponibile su:
```
https://TUO_USERNAME.github.io/circuit-planner/
```

> ⚠️ Sostituisci `TUO_USERNAME` con il tuo username GitHub in `robots.txt` e `manifest.json`.

---

## 📁 Struttura del progetto

```
circuit-planner/
├── index.html              # App principale
├── manifest.json           # PWA Manifest
├── sw.js                   # Service Worker (offline)
├── favicon.ico             # Favicon multi-size
├── browserconfig.xml       # Tile Windows/Edge
├── robots.txt              # SEO
├── .nojekyll               # Disabilita Jekyll su GitHub Pages
├── .gitignore
├── icons/
│   ├── icon.svg            # Icona sorgente SVG
│   ├── icon-16x16.png
│   ├── icon-32x32.png
│   ├── icon-48x48.png
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-180x180.png    # Apple Touch Icon
│   ├── icon-192x192.png    # Android standard
│   ├── icon-192x192-maskable.png  # Android adaptive
│   ├── icon-256x256.png
│   ├── icon-384x384.png
│   ├── icon-512x512.png    # PWA splash
│   └── icon-512x512-maskable.png  # Android adaptive large
└── .github/
    └── workflows/
        └── deploy.yml      # Auto-deploy su Pages
```

---

## 📲 Installazione come App

### Android (Chrome)
1. Apri l'URL nel browser
2. Tocca il menu **⋮** → **"Aggiungi a schermata Home"** oppure usa il banner che appare automaticamente

### iOS (Safari)
1. Apri l'URL in **Safari**
2. Tocca **Condividi** → **"Aggiungi a schermata Home"**

### Desktop (Chrome / Edge)
1. Apri l'URL
2. Clicca l'icona di installazione nella barra degli indirizzi

---

## 🛠️ Sviluppo locale

Dato che l'app è puro HTML/CSS/JS, basta un server HTTP locale:

```bash
# Con Python
python3 -m http.server 8080

# Con Node.js (npx)
npx serve .

# Con VS Code: installa l'estensione "Live Server"
```

Poi apri `http://localhost:8080`

---

## 📄 Licenza

MIT — Libero uso, modifica e distribuzione.

---

*Fatto con ❤️ per i Personal Trainer italiani*
