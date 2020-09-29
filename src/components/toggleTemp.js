import temperatureData from './tempTable';

const element = (type, data, bol) => {
  const newElement = document.createElement(type);
  newElement.className = 'font-weight-bold text-success';
  if (!bol) {
    newElement.innerText = `The temperature is ${temperatureData(data).dataInCelsius().main} °C. But it feels like ${temperatureData(data).dataInCelsius().feels_like} °C.`;
  } else {
    newElement.innerText = `The temperature is ${temperatureData(data).dataInFaht().main} °F. But it feels like ${temperatureData(data).dataInFaht().feels_like} °F.`;
  }
  return newElement;
};

export default (id, data, bol, div) => {
  if (id) id.remove();
  const celsiuspgh = element('h3', data, bol);
  celsiuspgh.id = 'temp1';
  return div.appendChild(celsiuspgh);
};
