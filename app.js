const nav = document.getElementById('navbar');
const bar = document.getElementById('bar');
const close = document.getElementById('close');
let mainImg = document.getElementById('mainImg');
let smallImg = document.getElementsByClassName('small-img');
const heroButton = document.getElementById('hero-button');
const tshirt = document.getElementById('t-shirt');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

if(mainImg && smallImg) {
   smallImg[0].onclick = function(){
   mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
   mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
   mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
   mainImg.src = smallImg[3].src;
}
}
if(heroButton) {
    heroButton.addEventListener('click', () => {
    window.location.href = "shop.html";
})
}
if(tshirt) {
    tshirt.addEventListener('click', () => {
        window.location.href = "sproduct.html";
    })
}