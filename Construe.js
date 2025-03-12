// script.js
const images = document.querySelectorAll('.ghostly-image');

let currentIndex = 0;

function switchImage() {
  images.forEach((img, index) => {
    if (index === currentIndex) {
      img.style.opacity = 1;
      img.style.filter = `blur(${Math.random() * 10}px) grayscale(${Math.random() * 100}%)`;
    } else {
      img.style.opacity = 0;
    }
  });

  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(switchImage, 500); // Switch images every 500ms
