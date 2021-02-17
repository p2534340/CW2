const navSlide = () => {
  const button = document.querySelector('.NAVBUTTON');
  const nav = document.querySelector('.Links');
  const navLinks = document.querySelectorAll('.Links li');

    button.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    navLinks.forEach((link, index) => {
      link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 6}s';
      console.log(index / 6);
    });



  navSlide();
