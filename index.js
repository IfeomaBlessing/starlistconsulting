// Sticky navbar background swap
  const navbar = document.getElementById('navbar');
  const toggleNav = () => {
    if (window.scrollY > 40) navbar.classList.add('is-scrolled');
    else navbar.classList.remove('is-scrolled');
  };
  toggleNav();
  window.addEventListener('scroll', toggleNav, {passive:true});

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  navToggle.addEventListener('click', () => navbar.classList.toggle('nav-open'));
  document.querySelectorAll('.nav-links a, .nav-cta').forEach(a=>{
    a.addEventListener('click', ()=> navbar.classList.remove('nav-open'));
  });

  // Hero slides
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slide-dot');
  let current = 0;
  let timer;

  function goTo(index){
    slides[current].classList.remove('is-active');
    dots[current].classList.remove('is-active');
    current = index;
    slides[current].classList.add('is-active');
    dots[current].classList.add('is-active');
  }

  function next(){
    goTo((current + 1) % slides.length);
  }

  function startAuto(){
    timer = setInterval(next, 6500);
  }
  function stopAuto(){
    clearInterval(timer);
  }

  dots.forEach(dot=>{
    dot.addEventListener('click', () => {
      stopAuto();
      goTo(parseInt(dot.dataset.goto, 10));
      startAuto();
    });
  });

  startAuto();