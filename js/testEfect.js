
$('.tabs_content').on('click', function () {
    if(!$(this).hasClass('active')) {
      $('.tabs_content.active').removeClass('active');
      $(this).addClass('active');
    }
  });

  ScrollTrigger.create({
    trigger: '.tabs',
    start: "top top",
    pin: true,
    endTrigger: ".tabs-wrapper",
    end: "bottom bottom",
    onUpdate : (self) => {
      let nb = Math.round(gsap.utils.mapRange(0, 1, 0, 4, self.progress))
      console.log(nb)
      if (!$('.tabs_content').eq(nb).hasClass('active')) {
        $('.tabs_content.active').removeClass('active');
        $('.tabs_content').eq(nb).addClass('active');
      } 
    }
  });