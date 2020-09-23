export default (title, temp, condition) => {
  const content = document.getElementById('content');
  const display = document.createElement('div');
  display.className = condition;
  return content.appendChild(display);
};