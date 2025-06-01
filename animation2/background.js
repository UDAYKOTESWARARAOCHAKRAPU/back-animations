const background = document.getElementById('background-animation');

for (let i = 0; i < 50; i++) {
  const dot = document.createElement('div');
  dot.className = 'dot';
  const size = Math.random() * 6 + 2;
  dot.style.width = `${size}px`;
  dot.style.height = `${size}px`;
  dot.style.left = `${Math.random() * 100}vw`;
  dot.style.animationDuration = `${Math.random() * 10 + 5}s`;
  dot.style.animationDelay = `${Math.random() * 5}s`;
  background.appendChild(dot);
}
