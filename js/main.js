// Nav background on scroll
var nav = document.getElementById('nav');
window.addEventListener('scroll', function () {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile menu
var toggle = document.getElementById('navToggle');
var links = document.getElementById('navLinks');
toggle.addEventListener('click', function () {
  links.classList.toggle('open');
});
links.querySelectorAll('a').forEach(function (a) {
  a.addEventListener('click', function () {
    links.classList.remove('open');
  });
});

// Duplicate carousel items for seamless infinite loop
var track = document.getElementById('carouselTrack');
track.innerHTML += track.innerHTML;
