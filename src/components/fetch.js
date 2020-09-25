const fetch = require('node-fetch');

export default async (location) => {
  let response;
  try {
    response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=03538b785f3c918aa4b66f04b2d344e7`);
    if (!response.ok) throw new Error(`${location} not found.`);
    return response.json();
  } catch (err) {
    const content = document.getElementById('content');
    const errTag = document.createElement('h3');
    errTag.className = 'err text-center';
    errTag.innerText = err;
    return content.appendChild(errTag);
  }
};
