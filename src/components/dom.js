import weatherMessage from './weather';

const content = document.getElementById('content');
const weatherDiv = document.createElement('div');
weatherDiv.id = 'weather-details';
// weatherDiv.className = 'text-center weather d-flex flex-column justify-content-center';
const title = document.createElement('p');
title.className = 'display-2 font-weight-bold w-50 text-info';
const back = document.createElement('button');
back.innerText = 'Go Back';
back.className = 'btn btn-success btn-lg';
const form = document.getElementById('form');

back.onclick = () => {
  const weatherDetails = document.getElementById('weather-details');
  weatherDetails.remove();
  return content.appendChild(form);
};

export default (data) => {
  const errTag = document.getElementsByClassName('err');
  const errArr = [...errTag];
  title.innerText = weatherMessage(data.weather[0].main, data.name);
  const condition = data.weather[0].main.toLowerCase();
  weatherDiv.className = `${condition} text-center weather d-flex flex-column justify-content-center align-items-center`;
  if (errArr.length > 0) {
    errArr.forEach((err) => {
      err.remove();
    });
  }
  form.remove();
  weatherDiv.appendChild(title);
  weatherDiv.appendChild(back);
  return content.appendChild(weatherDiv);
};
