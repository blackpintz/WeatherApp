const content = document.getElementById('content');
const weatherDiv = document.createElement('div');
weatherDiv.id = 'weather-details';
weatherDiv.className = 'text-center weather d-flex flex-column justify-content-center';
const title = document.createElement('p');
const temp = document.createElement('p');
const cloud = document.createElement('p');
const back = document.createElement('button');
back.innerText = 'Go Back';
back.className = 'btn btn-light text-info';
const form = document.getElementById('form');

back.onclick = () => {
  const weatherDetails = document.getElementById('weather-details');
  weatherDetails.remove();
  return content.appendChild(form);
};

export default (data) => {
  const errTag = document.getElementsByClassName('err');
  const errArr = [...errTag];
  title.innerText = `City: ${data.name}.`;
  temp.innerText = `Temperature: ${data.main.feels_like}.`;
  cloud.innerText = `There is ${data.weather[0].main}.`;
  if (errArr.length > 0) {
    errArr.forEach((err) => {
      err.remove();
    });
  }
  form.remove();
  weatherDiv.appendChild(title);
  weatherDiv.appendChild(temp);
  weatherDiv.appendChild(cloud);
  weatherDiv.appendChild(back);
  return content.appendChild(weatherDiv);
};
