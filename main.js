const swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
    },
    speed: 1000,
    direction: 'horizontal',
    navigation:
    {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination:
    {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    zoom: true,
    keyboard:
    {
        enabled: true,
        onlyInViewport: false,
    },
    mousewheel:
    {
        invert: true,
    },
    autoplay:
    {
        delay: 5000,
    },
    loop: true,

});
document.getElementById("mainButton").onclick=function(){
    window.location.href="TovarList.html";
};


