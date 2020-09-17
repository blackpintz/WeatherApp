import './style.css';

const fetch = require('node-fetch');

const content = document.getElementById('content');
const title = document.createElement('p');
const temp = document.createElement('p');
const cloud = document.createElement('p');
const location = 'Nairobi,Kenya';

const fetchData = async (location) => {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=03538b785f3c918aa4b66f04b2d344e7`);
  if (data.status === 200) {
    return data.json();
  }
  throw new Error('Unable to fetch data');
};

fetchData(location).then((data) => {
  title.innerText = `City: ${data.name}.`;
  temp.innerText = `Temperature: ${data.main.feels_like}.`;
  cloud.innerText = `It feels abit ${data.weather[0].description}.`;
  content.appendChild(title);
  content.appendChild(temp);
  content.appendChild(cloud);
}).catch((error) => `Error: ${error} found.`);

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=03538b785f3c918aa4b66f04b2d344e7`, {}).then((response) => {
//     if(response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('Unable to fetch data')
//     }
// }).then((data) => {
//     title.innerText = data.name
//     content.appendChild(title);
// }).catch((error) => {
//     console.log(error)
// })