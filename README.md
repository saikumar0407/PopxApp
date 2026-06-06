# PopX Mobile App

A mobile-first React application that replicates the PopX app design. Built with Vite, React Router DOM, and plain CSS.

## Tech Stack

- React (Vite)
- React Router DOM
- Plain CSS (no UI libraries)
- Functional Components & React Hooks

## Features

- **Welcome Page** (`/`) — Landing screen with navigation to register or login
- **Login Page** (`/login`) — Email/password form with disabled state validation
- **Register Page** (`/register`) — Full registration form with required field validation
- **Account Settings** (`/account`) — Profile card with user info and bio

## Installation

1. Navigate to the project directory:

```bash
cd popx-app
```

2. Install dependencies:

```bash
npm install
```

## Run the Project

Start the development server:

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`) in your browser.

## Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── pages/
│   ├── Welcome.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── AccountSettings.jsx
├── components/
│   ├── MobileLayout.jsx
│   ├── InputField.jsx
│   └── Button.jsx
├── styles/
│   ├── global.css
│   ├── welcome.css
│   ├── login.css
│   ├── register.css
│   └── account.css
├── assets/
├── App.jsx
└── main.jsx
```

## Routes

| Route       | Page              |
|-------------|-------------------|
| `/`         | Welcome           |
| `/login`    | Login             |
| `/register` | Create Account    |
| `/account`  | Account Settings  |

## Deploy to Vercel

The project includes a `vercel.json` so React Router routes work in production.

### Option 1: Vercel CLI (fastest)

1. Log in to Vercel (opens browser):

```bash
cd popx-app
npx vercel login
```

2. Deploy to production:

```bash
npx vercel --prod
```

Vercel auto-detects Vite. Default settings:

- **Build Command:** `npm run build`
- **Output Directory:** `dist`

### Option 2: GitHub + Vercel Dashboard

1. Push the project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your repository.
4. Keep the default Vite settings and click **Deploy**.

Every push to `main` will trigger a new deployment automatically.
