// Sprinkle effect script
// Shows several sprinkle.png images on the home section, fading out slowly


function createSprinkle() {
  const sprinkle = document.createElement('img');
  sprinkle.src = 'imgs/sprinkle.png';
  sprinkle.className = 'sprinkle-effect';
  sprinkle.style.position = 'absolute';
  sprinkle.style.left = Math.random() * 80 + 5 + '%';
  sprinkle.style.top = Math.random() * 60 + 20 + '%';
  sprinkle.style.width = '48px';
  sprinkle.style.height = '48px';
  sprinkle.style.opacity = '1';
  sprinkle.style.pointerEvents = 'none';
  sprinkle.style.transition = 'opacity 5s linear';

  document.querySelector('.home').appendChild(sprinkle);

  setTimeout(() => {
    sprinkle.style.opacity = '0';
    setTimeout(() => {
      sprinkle.remove();
    }, 5000);
  }, 100);
}

function sprinkleBurst(count = 12) {
  for (let i = 0; i < count; i++) {
    setTimeout(createSprinkle, i * 150);
  }
}

// Sprinkle every 3 seconds
setInterval(() => sprinkleBurst(12), 3000);
