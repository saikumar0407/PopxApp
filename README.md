# PopX Mobile App

A responsive React application built by recreating the provided PopX mobile app design. The project focuses on clean UI implementation, smooth navigation, reusable components, and a mobile-first user experience.

## Overview

This application consists of four screens:

- Welcome Screen
- Login Screen
- Create Account Screen
- Account Settings Screen

The design has been implemented with attention to spacing, typography, colors, and overall user experience to closely match the provided mockups.

## Technologies Used

- React JS
- Vite
- React Router DOM
- CSS3
- JavaScript (ES6+)

## Features

### Welcome Screen

- Entry point of the application
- Navigation to Login and Create Account screens

### Login Screen

- Email and Password fields
- Basic form validation
- Login button enabled only when required fields are filled

### Create Account Screen

- User registration form
- Required field validation
- Agency selection using radio buttons
- Navigation to Account Settings after successful submission

### Account Settings Screen

- User profile information
- Profile image with edit icon
- User details and description section

## Project Structure

```text
src/
├── components/
│   ├── Button.jsx
│   ├── InputField.jsx
│   └── MobileLayout.jsx
│
├── pages/
│   ├── Welcome.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── AccountSettings.jsx
│
├── styles/
│   ├── global.css
│   ├── welcome.css
│   ├── login.css
│   ├── register.css
│   └── account.css
│
├── assets/
├── App.jsx
└── main.jsx
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run the Application

```bash
npm run dev
```

The application will start on the local development server. Open the URL displayed in the terminal to view the project.

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Routing

| Route     | Description             |
| --------- | ----------------------- |
| /         | Welcome Screen          |
| /login    | Login Screen            |
| /register | Create Account Screen   |
| /account  | Account Settings Screen |

## Deployment

The project is deployed using Vercel and supports React Router navigation in production.

### Deploy Using Vercel

```bash
npx vercel --prod
```

Alternatively, connect the GitHub repository to Vercel and deploy directly through the Vercel dashboard.

## Author

Developed as part of a React JS UI implementation assignment, focusing on clean code structure, reusable components, responsive design, and seamless user navigation.
