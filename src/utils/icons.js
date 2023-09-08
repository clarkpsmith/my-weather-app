const weatherIcons = {
  1000: 'clear_day.svg',
  1001: 'cloudy.svg',
  1100: 'mostly_clear_day.svg',
  1101: 'partly_cloudy_day.svg',
  1102: 'mostly_cloudy.svg',
  2000: 'fog.svg',
  2100: 'fog_light.svg',
  // 3000: "Light Wind",
  // 3001: "Wind",
  // 3002: "Strong Wind",
  4000: 'drizzle.svg',
  4001: 'rain.svg',
  4200: 'rain_light.svg',
  4201: 'rain_heavy.svg',
  5000: 'snow.svg',
  5001: 'flurries.svg',
  5100: 'snow_light.svg',
  5101: 'snow_heavy.svg',
  6000: 'freezing_drizzle.svg',
  6001: 'freezing_rain.svg',
  6200: 'freezing_rain_light.svg',
  6201: 'freezing_rain_heavy.svg',
  7000: 'ice_pellets.svg',
  7101: 'ice_pellets_heavy.svg',
  7102: 'ice_pellets_light.svg',
  8000: 'tstorm.svg',
};

export function getIcon(weatherCode) {
  if (weatherCode) {
    return weatherIcons[weatherCode];
  }
}
