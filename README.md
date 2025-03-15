# Simple React Weather App

A simple weather app built with React that allows users to check the 3 day weather forecast of any city.

Features:

- Voice input search functionality (coming soon)

## Installation & Setup

#### 1. Clone the repository

```sh
git clone $ https://github.com/vincenttao04/weather-app.git
git cd weather-app
```

#### 2. Install dependencies

```sh
npm install
```

#### 3. Set up environment variables

Create a `.env` file in the root directory and add your OpenWeatherMap (Current Weather Data, Free Access) API key:

```sh
VITE_APP_ID=your_api_key
```

#### 4. Run the application

```sh
npm run dev
```

## Improvement Ideas

#### Small Ideas:

- ✔️ 'Enter' button functionality into search bar
- ✔️ Add error messages into the app ui, remove alert messages
- ✔️ Clear search bar after successful search
- ✔️ Improve search bar aesthetic/ change search img to be within the search bar (?)
- ✔️ Update radius of components
- ✔️ Remove feature where weather data is hidden if invalid/no city search
- ✔️ Weather.jsx - clean code for allIcons
- ✔️ Disable search bar button if no search bar text input
- ✔️ Update README with instructions
- ✔️ Remove .env file / fix API key leak
- ✔️ Fix weather card size / stop dynamic size changes
- Flexible text size incase of long text
- Make weather icon sizes consistent with each other

#### Big Ideas:

- Change background depending on day/night
- Add visibility / cloud coverage / precipitation metrics to weather card (test on Figma)
- ✔️ Add more weather icons
- ✔️ Add in 3 day weather forecast (check Figma)
- Button to expand weather chip to show more/less details
- AI-generated weather summary / clothing recommendations (text-based)
- Unit, component, integration testing
- Autocomplete dropdown for search bar (Google Places API?)
- ✔️ Refactor code
- Add voice input option for searching
