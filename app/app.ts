(function component(): HTMLElement | null {
  const element: HTMLElement | null = document.getElementById('app');
  const btn: HTMLButtonElement = document.createElement('button');

  btn.innerHTML = 'Click me! Yeah...';

  if (element) {
    element.appendChild(btn);
  }

  return element;
})();
