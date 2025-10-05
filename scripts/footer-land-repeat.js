document.addEventListener('DOMContentLoaded', function () {
  const repeatContainer = document.querySelector('.footer__land-repeat');
  const repeatImg = document.querySelector('.footer__img--repeat');

  function updateRepeats() {
    repeatContainer.innerHTML = '';
    // Only repeat if screen is wider than 1350px
    if (window.innerWidth <= 200) return;
    // Get image width (wait for image to load)
    const imgWidth = 165;
    const containerWidth = repeatContainer.offsetWidth;
    const count = Math.floor(containerWidth / imgWidth);
    for (let i = 0; i < count; i++) {
      const clone = repeatImg.cloneNode(true);
      repeatContainer.appendChild(clone);
    }
  }

  if (repeatContainer && repeatImg) {
    if (repeatImg.complete) {
      updateRepeats();
    } else {
      repeatImg.onload = updateRepeats;
    }
    window.addEventListener('resize', updateRepeats);
  }
});