const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('nav .nav-item');
const toggle = document.querySelector('.sidebar .toggle');

toggle.addEventListener('click', () => {

	if (sidebar.className === 'sidebar')
		sidebar.classList.add('open');
	else{
    sidebar.classList.remove('open');
  }
		
});

navItems.forEach(navItem => {

	navItem.addEventListener('click', () => {

		navItems.forEach(navItem => {
			navItem.classList.remove('active');
		});

		navItem.classList.add('active');

	});

});
/**/

$(".closecarouselmodal").click(function(){
    $(".carouselmodal").fadeOut(50); 
  });
  $(".opencarouselmodal").click(function(){
    $(".carouselmodal").fadeIn(50); 
  });
  
  
  // carousel
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });