const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-link');
  const navLinks = document.querySelectorAll('.nav-link li');

  burger.addEventListener('click', () => {
    // toggle nav
    nav.classList.toggle('nav-active');

    // animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation){
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade .5s ease forwards ${index / 3}s`;
      }
    });
  });
}

navSlide();