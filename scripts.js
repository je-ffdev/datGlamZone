const navbar = document.getElementById('navbar');
const scrollUpBtn = document.getElementById('scrollUp');
const scrollDownBtn = document.getElementById('scrollDown');

// Navbar scroll behavior
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
    scrollUpBtn.style.display = 'block';
    scrollDownBtn.style.display = 'none';
  } else {
    navbar.classList.remove('scrolled');
    scrollUpBtn.style.display = 'none';
    scrollDownBtn.style.display = 'block';
  }
});

// Scroll behavior
scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

scrollDownBtn.addEventListener('click', () => {
  window.scrollTo({ top: window.scrollY + window.innerHeight, behavior: 'smooth' });
});
