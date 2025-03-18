import brokenclouds_day_icon from "../assets/weather/brokenclouds_day.png";
import brokenclouds_night_icon from "../assets/weather/brokenclouds_night.png";
import clear_night_icon from "../assets/weather/clear_night.png";
import mist_icon from "../assets/weather/mist.png";
import rain_day_icon from "../assets/weather/rain_day.png";
import rain_night_icon from "../assets/weather/rain_night.png";
import scatteredclouds_day_icon from "../assets/weather/scatteredclouds_day.png";
import scatteredclouds_night_icon from "../assets/weather/scatteredclouds_night.png";
import snow_icon from "../assets/weather/snow.png";
import thunderstorm_icon from "../assets/weather/thunderstorm.png";
import clear_day_icon from "../assets/weather/clear_day.png";

// Export a list of weather icons
const weatherIcons = {
  "01d": clear_day_icon,
  "01n": clear_night_icon,
  "02d": clear_day_icon,
  "02n": clear_night_icon,
  "03d": scatteredclouds_day_icon,
  "03n": scatteredclouds_night_icon,
  "04d": brokenclouds_day_icon,
  "04n": brokenclouds_night_icon,
  "09d": rain_day_icon,
  "09n": rain_night_icon,
  "10d": rain_day_icon,
  "10n": rain_night_icon,
  "11d": thunderstorm_icon,
  "11n": thunderstorm_icon,
  "13d": snow_icon,
  "13n": snow_icon,
  "50d": mist_icon,
  "50n": mist_icon,
};

export default weatherIcons;
