import weatherMessage from './weather';
import temperatureData from './tempTable';
import displayTemperature from './toggleTemp';

const content = document.getElementById('content');
const weatherDiv = document.createElement('div');
weatherDiv.id = 'weather-details';
const title = document.createElement('p');
title.className = 'display-2 font-weight-bold w-50 text-info';
const temp = document.createElement('div');
const back = document.createElement('button');
back.innerText = 'Go Back';
back.className = 'btn btn-success btn-lg';
const tempBtn = document.createElement('button');
tempBtn.innerText = 'Show in Celsius';
tempBtn.className = 'btn btn-lg btn-info mb-2';
const form = document.getElementById('form');
let bool = true;
back.onclick = () => {
  const weatherDetails = document.getElementById('weather-details');
  const tempDetails = document.getElementById('temp1');
  bool = true;
  tempBtn.innerText = 'Show in Celsius';
  tempDetails.remove();
  weatherDetails.remove();
  return content.appendChild(form);
};

export default (data) => {
  const errTag = document.getElementsByClassName('err');
  const errArr = [...errTag];
  title.innerText = weatherMessage(data.weather[0].main, data.name);
  const tempInfo = document.createElement('h3');
  tempInfo.innerText = `The temperature is ${temperatureData(data).dataInFaht().main} °F.  But it feels like ${temperatureData(data).dataInFaht().feels_like} °F`;
  tempInfo.className = 'font-weight-bold text-success';
  tempInfo.id = 'temp1';
  temp.appendChild(tempInfo);
  const condition = data.weather[0].main.toLowerCase();
  weatherDiv.className = `${condition} text-center weather d-flex flex-column justify-content-center align-items-center`;

  tempBtn.onclick = () => {
    const celsiusDetails = document.getElementById('temp1');
    bool = !bool;
    if (bool) {
      tempBtn.innerText = 'Show in Celsius';
      return displayTemperature(celsiusDetails, data, bool, temp);
    }
    tempBtn.innerText = 'Show in Fahrenheits';
    return displayTemperature(celsiusDetails, data, bool, temp);
  };
  if (errArr.length > 0) {
    errArr.forEach((err) => {
      err.remove();
    });
  }
  form.remove();
  weatherDiv.appendChild(title);
  weatherDiv.appendChild(temp);
  weatherDiv.appendChild(tempBtn);
  weatherDiv.appendChild(back);
  return content.appendChild(weatherDiv);
};
