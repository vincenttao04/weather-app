# Simple React Weather App

A simple weather app built with React that allows users to check the 3 day weather forecast of any city.

## Context

Built as a fun at-home project to explore APIs and experiment with different React.js features like voice input integration and Material UI.

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

- Flexible text size incase of long text
- Make weather icon sizes consistent with each other
- Fix error message up positioning (make it drop from the top of the screen)
- Try out other APIs? Maybe one for flags?

#### Big Ideas:

- Add visibility / cloud coverage / precipitation metrics to weather card (test on Figma)
- AI-generated weather summary / clothing recommendations (text-based)
- Unit, component, integration testing (vitest?)
- Add animation / motion transition to error messages

Current PR / Branch Development:

- Implement a one day view
- Sort out the layout and position of layouts
- Finalise the css styling of the one day view and the view toggle

Next PR / Branch Development:

- Use OpenAI's GPT API to generate human readable weather summaries based on raw weather data and display it into the one day view

Todo:

- clear/simplify css - remove redundant lines
- refactor css, make names more readable to 3/1 day views
- make h1 to h6, etc.
