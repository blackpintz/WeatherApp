export default (data) => {
  const dataInCelsius = () => {
    const temperature = {
      main: Math.round(data.main.temp - 274.15),
      feels_like: Math.round(data.main.feels_like - 274.15),
    };
    return temperature;
  };

  const dataInFaht = () => {
    const temperature = {
      main: Math.round(1.8 * (data.main.temp - 274.15) + 32),
      feels_like: Math.round(1.8 * (data.main.feels_like - 274.15) + 32),
    };
    return temperature;
  };

  return { dataInCelsius, dataInFaht };
};
