let slides = document.querySelectorAll('.imgslideshow');
let n = -1;

window.onload = function() {
    showslides();
}

function showslides() {
    n++;
    if(n===slides.length) {    setTimeout(() => {
        slides[n].style.display = 'none';
    }, 6000); n=0; }
    if(n>0){
    setTimeout(() => {
        slides[n-1].style.display = 'none';
    }, 6000);}
    slides[n].style.display='block';

    setTimeout(showslides, 12000);
}
