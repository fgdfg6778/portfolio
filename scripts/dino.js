// Dino walking logic
const dino = document.getElementById('dino-walker');
const dinoImg = document.getElementById('dino-img');
let direction = 1; // 1 = right, -1 = left
let x = 0;
let speed = 0.5;
let windowWidth = window.innerWidth;
let dinoWidth = 100;
let changeDirTimeout = null;

function walkDino() {
    x += direction * speed;
    if (x < 0) {
        x = 0;
        direction = 1;
        dinoImg.style.transform = 'scaleX(1)';
    }
    if (x > windowWidth - dinoWidth) {
        x = windowWidth - dinoWidth;
        direction = -1;
        dinoImg.style.transform = 'scaleX(-1)';
    }
    dino.style.left = x + 'px';
}

function randomDirectionChange() {
    if (Math.random() < 0.01) {
        direction *= -1;
        dinoImg.style.transform = direction === 1 ? 'scaleX(1)' : 'scaleX(-1)';
    }
    changeDirTimeout = setTimeout(randomDirectionChange, 100);
}

function animate() {
    walkDino();
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
});

dinoImg.addEventListener('click', () => {
    dinoImg.src = 'imgs/dino/Dinoraw.png';
    setTimeout(() => {
        dinoImg.src = 'imgs/dino/Dino.gif';
    }, 500);
});

dinoImg.style.transform = 'scaleX(1)';
randomDirectionChange();
animate();
