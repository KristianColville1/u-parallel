$(document).ready(() => {

  // window scroll
  $(window).scroll(() => {
    var scrollHeight = 50;
    if($(window).scrollTop() >= scrollHeight){
      $('nav.navbar').addClass('nav-shadow-on').removeClass('nav-shadow-off');
    } else if($(window).scrollTop() <= scrollHeight){
      $('nav.navbar').removeClass('nav-shadow-on').addClass('nav-shadow-off');
    }
  });

  // hamburger menu
  $('button.navbar-toggler').on('click', ()=> {
    let bars = document.querySelectorAll('.bar');
    bars.forEach(bar => bar.classList.toggle('x'));
  });
});