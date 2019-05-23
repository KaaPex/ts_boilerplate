(function component() {
  const element = document.getElementById('app');
  const btn = document.createElement('button');

  btn.innerHTML = 'Click me! Yeahh...';

  if (element) {
    element.appendChild(btn);
  }

  return element;
})();
