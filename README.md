# NewsNow - Modern News App

A modern, responsive news application built with React, Tailwind CSS, and Vite. Features a premium UI with dark theme, glassmorphism effects, and smooth animations.

## Features

- 📰 Real-time news from NewsAPI
- 🎨 Modern glassmorphism UI design
- 📱 Fully responsive layout
- 🌙 Dark theme with neon accents
- ⚡ Fast loading with progress indicators
- 🔄 Pagination with page indicators
- 🎯 Category-based news filtering

## Tech Stack

- **Frontend**: React 19, Tailwind CSS 4
- **Build Tool**: Vite
- **API**: NewsAPI (with CORS proxy)
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Setup & Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd newsnow
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Add your NewsAPI key to `.env`:
```env
VITE_API_KEY=your_newsapi_key_here
```

### Running the Application

**For Development (with CORS proxy):**

1. Start the proxy server (handles CORS issues):
```bash
npm run server
```

2. In a new terminal, start the React app:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` and the proxy at `http://localhost:5000`.

**For Production Build:**

```bash
npm run build
npm run preview
```

## API Configuration

This app uses NewsAPI which has CORS restrictions on the free plan. The included proxy server (`server.js`) bypasses these restrictions by making API calls from the server side.

### Getting a NewsAPI Key

1. Visit [NewsAPI](https://newsapi.org/)
2. Sign up for a free account
3. Get your API key from the dashboard
4. Add it to your `.env` file as `VITE_API_KEY`

## Project Structure

```
src/
├── components/
│   ├── NavBar.jsx          # Navigation component
│   ├── NewsCard.jsx        # Individual news card
│   ├── News.jsx            # News list with pagination
│   ├── NextButton.jsx      # Next page button
│   └── PreviousButton.jsx  # Previous page button
├── assets/                 # Static assets
├── App.jsx                 # Main app component
├── main.jsx                # App entry point
└── index.css               # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run server` - Start CORS proxy server
- `npm run lint` - Run ESLint

## Deployment

### Option 1: Static Deployment (Recommended)

For platforms like Vercel, Netlify, or GitHub Pages:

1. Build the app:
```bash
npm run build
```

2. Deploy the `dist/` folder

**Note**: For static deployments, you'll need to either:
- Upgrade your NewsAPI plan to allow CORS from your domain
- Use a serverless function (Vercel/Netlify) as a proxy
- Use a different news API that allows CORS

### Option 2: Full-Stack Deployment

Deploy both the React app and the Express proxy server to platforms like Heroku, Railway, or Render.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- [NewsAPI](https://newsapi.org/) for news data
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React](https://reactjs.org/) for the framework
