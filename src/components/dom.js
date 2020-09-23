const content = document.getElementById('content');
const title = document.createElement('p');
const temp = document.createElement('p');
const cloud = document.createElement('p');

export default (data) => {
  const errTag = document.getElementById('err');
  title.innerText = `City: ${data.name}.`;
  temp.innerText = `Temperature: ${data.main.feels_like}.`;
  cloud.innerText = `There is ${data.weather[0].main}.`;
  if (errTag) errTag.remove();
  content.appendChild(title);
  content.appendChild(temp);
  return content.appendChild(cloud);
};
