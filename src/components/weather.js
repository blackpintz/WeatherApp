export default (condition, city) => {
  switch (condition) {
    case 'Clouds':
      return `It is cloudy in ${city}.`;
    case 'Clear':
      return `The sky is clear in ${city}.`;
    case 'Rain':
      return `It is raining in ${city}.`;
    case 'Fog':
      return `It is foggy in ${city}.`;
    case 'Snow':
      return `It is snowing in ${city}.`;
    case 'Thunderstorm':
      return `There is thunderstorms in ${city}.`;
    case 'Drizzle':
      return `It is drizzling in ${city}.`;
    default:
      return `It is ${condition}y in ${city}.`;
  }
};