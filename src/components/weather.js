export default (title, temp, condition) => {
  const content = document.getElementById('content');
  const display = document.createElement('div');
  // creates a paragraph depending on the weather condition.
  display.className = condition;
  return content.appendChild(display);
};