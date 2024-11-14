
function myMenuFunction() {
    const navItem = document.querySelector('.navMenuList');
    navItem.classList.toggle('show');
}

const motto1 = "Sham o Kha Studio...";
const motto2 = "Touching Elegance, Merging Tradition and Modernity, Shaping the Future";
let indexMotto1 = 0;
let indexMotto2 = 0;

function typeMotto1() {
    if (indexMotto1 < motto1.length) {
        document.getElementById("motto1").textContent += motto1.charAt(indexMotto1);
        indexMotto1++;
        setTimeout(typeMotto1, 100);
    } else {
        setTimeout(typeMotto2, 500);
    }
}
function typeMotto2() {
    if (indexMotto2 < motto2.length) {
        document.getElementById("motto2").textContent += motto2.charAt(indexMotto2);
        indexMotto2++;
        setTimeout(typeMotto2, 100);
    }
}
window.onload = typeMotto1;

const images = [
    '../JS/images/image1.jpg',
    '../JS/images/image2.jpg',
    '../JS/images/image3.jpg',
    '../JS/images/image4.jpg',
];

let currentIndex = 0;
const mainSection = document.getElementById("mainSection");

function changeBackgroundImage() {
    mainSection.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}
changeBackgroundImage();
setInterval(changeBackgroundImage, 3000);