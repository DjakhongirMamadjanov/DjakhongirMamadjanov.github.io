function showMenu(toggleId, menuId){
     const toggle = document.getElementById(toggleId);
     const menu = document.getElementById(menuId);

     if(toggle && menu){
         toggle.addEventListener('click', function(){
             menu.classList.toggle('active');
         })
     }
}
showMenu('burger', 'menu');


const swiperslider = new Swiper('.hero_container', {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 700,
    grabCursor: true,

    effect: 'cube',
    cubeEffects:{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.9,
    }

//     effect: "coverflow",
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
    },
    keyboard: {
      enable: true,
    },
      
    navigation:{
        prevEl: ".arrow-left",
        nextEl: ".arrow-right",
    },
    pagination: {
      el: ".hero-pagination",
      clickable: true,

      renderBullet: function(index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
})



const sr = ScrollReveal({
  reset: true,
  distance: '100px',
  duration: 1000,
})

sr.reveal('.item-shop', {
  origin: 'bottom',
  interval: 300,
})
