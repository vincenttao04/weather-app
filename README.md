# Weather App ☀️🌧️🌩️

## Table of Contents

- [Overview](#overview)
- [Demo](#demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#-prerequisites)
  - [Clone the Repository \& Install Dependencies](#-clone-the-repository--install-dependencies)
  - [API Configuration](#-api-configuration)
  - [Run in Development Mode](#-run-in-development-mode)
- [TODO / Future Improvements](#-todo--future-improvements)
- [License](#-license)
- [Author](#-author)

## Overview

A simple and responsive weather application built with **JavaScript** and **React**. This app fetches real-time weather data based on user input and displays key weather parameters in a clean, visually appealing UI.

## Demo

## Features

- Search current weather by city, state, or country name
- Displays temperature, humidity, wind speed, and other weather conditions
- Dynamic icons/images based on weather conditions
- Graceful handling of invalid city, state, or country names
- Fully responsive design for desktop and laptop screens with light and dark mode support

## Tech Stack

- Frontend Framework: [React 19](https://react.dev/)
- Build Tool: [Vite 6](https://vitejs.dev/)
- UI Components: [Material UI (MUI)](https://mui.com/)
- Styling: [Emotion (CSS-in-JS)](https://emotion.sh/docs/introduction)
  - `@emotion/react`
  - `@emotion/styled`
- Icons:
  - [React Icons](https://react-icons.github.io/react-icons/)
  - [MUI Icons](https://mui.com/components/material-icons/)
- Date & Time Formatting: [Moment.js](https://momentjs.com/)
- Linting & Code Quality:
  - [ESLint](https://eslint.org/)
  - `eslint-plugin-react-hooks`
  - `eslint-plugin-react-refresh`
- Developer Experience:
  - Vite hot module reload (HMR)
  - Type support via `@types/react` and `@types/react-dom`

## Project Structure

```plaintext
weather-app/
├── src/
│   ├── assets/                             # Weather icons/images
│   ├── components/                         # Reusable React components
│   ├── pages/
│   │   └── HomePage.jsx                    # Main landing page with weather UI
│   ├── services/
│   │   └── weatherApiService.js            # Handles API calls to OpenWeatherMap
│   ├── styles/                             # Modular CSS stylesheet
│   ├── utils/                              # Utility functions
│   ├── main.jsx                            # App entry point
│   └── index.css                           # Global CSS stylesheet
├── .env                                    # Environment variables (API key)
├── index.html                              # HTML template used by Vite
├── LICENSE                                 # MIT License
├── package.json                            # Dependencies & scripts
├── vite.config.js                          # Vite configuration
└── README.md
```

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Clone the Repository & Install Dependencies

1. Clone the repository:

```bash
git clone https://github.com/vincenttao04/weather-app.git
```

2. Navigate to the repository:

```bash
cd weather-app
```

3. Install dependencies:

```bash
npm install
```

### API Configuration

This app uses the OpenWeatherMap API to retrieve real-time weather data.

#### Steps to Enable OpenWeatherMap API:

1. Sign up at https://openweathermap.org/price
2. Get your API key (select "Free Access" option)
3. Create a `.env` file in the root directory and add your API key:

```env
VITE_APP_ID=your_api_key
```

### Run in Development Mode

1. Start the development server (from the root directory):

```bash
npm run dev
```

2. Open your browser and navigate to:

```bash
http://localhost:5173
```

## TODO / Future Improvements

- Unit toggle (°C/°F)
- 5-day and weekly forecast
- Name suggestions (city, state, or country) as users type
- Clear, human-readable descriptions of weather conditions based on raw weather data

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Vincent Tao  
[GitHub Profile](https://github.com/vincenttao04)
