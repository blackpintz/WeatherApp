import './style.css';
import fetchData from './components/fetch';
import displayWeather from './components/dom';

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  fetchData(city).then((data) => {
    displayWeather(data);
  }).catch((error) => `Error: ${error} found.`);
});
