export const fetchWeather = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
      import.meta.env.VITE_API_KEY
    }`;
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message.charAt(0).toUpperCase() + data.message.slice(1)
      );
    }

    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error.message);

    return null;
  }
};
