const expoCarousel = document.getElementById('expoCarousel');
const galaCarousel = document.getElementById('galaCarousel');
const defileCarousel = document.getElementById('defileCarousel');


const expoCarouselElem = new bootstrap.Carousel(expoCarousel, {
  interval: 2000,
  touch: false
});

const galaCarouselElem = new bootstrap.Carousel(galaCarousel, {
    interval: 2000,
    touch: false
});

const defileCarouselElem = new bootstrap.Carousel(defileCarousel, {
    interval: 2000,
    touch: false
});   