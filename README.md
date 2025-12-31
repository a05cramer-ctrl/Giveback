# $GIVEBACK - Solana Token Website

A modern, dark-themed website for the $GIVEBACK Solana token. This project automatically distributes creator rewards to holders in real time.

## Features

- **Dark Theme**: Navy/black gradient background with glassmorphism cards
- **Live Activity Feed**: Auto-updating reward distribution feed with mock data
- **Performance Dashboard**: Vault stats and distribution metrics
- **Smooth Animations**: Framer Motion powered animations and falling money effect
- **Responsive Design**: Mobile-friendly layout

## Getting Started

### Installation

Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

Build the project:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Technologies

- **React** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Typed JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navigation.tsx      # Top navigation bar
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Overview.tsx        # Overview cards
│   │   ├── GivebackEngine.tsx  # Engine explanation
│   │   ├── Performance.tsx     # Vault dashboard
│   │   ├── LiveActivity.tsx   # Activity feed
│   │   ├── Footer.tsx          # Footer CTA
│   │   └── FallingMoney.tsx    # Background animation
│   ├── utils/
│   │   └── mockData.ts         # Mock data generators
│   ├── App.tsx                 # Main component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## Mock Data

The website currently uses mock data generators. To integrate with live on-chain data:

1. Replace functions in `src/utils/mockData.ts` with API calls
2. Use Solana web3.js or a blockchain indexer API
3. Connect to WebSocket for real-time updates in `LiveActivity.tsx`

## Design

- **Colors**: Dark navy (#0a0e27), black gradient, green accent (#00ff88)
- **Style**: Glassmorphism cards, smooth animations, premium feel
- **Tone**: Execution-first, transparent, anti-hype

