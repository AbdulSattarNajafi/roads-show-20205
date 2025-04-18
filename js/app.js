'use strict';
// ============  Header Menu
const menuBtn = document.getElementById('nav-toggler-btn');
const menuContent = document.getElementById('header-menu');
const navLinks = document.querySelectorAll('.header__menu-link');

menuBtn.addEventListener('click', toggleMenu);
navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

function toggleMenu() {
  menuBtn.classList.toggle('open');
  const isActive = menuBtn.classList.contains('open');

  if (isActive) {
    menuContent.style.maxHeight = menuContent.scrollHeight + 'px';
  } else {
    menuContent.style.maxHeight = null;
  }
}
function closeMenu() {
  menuBtn.classList.remove('open');
  menuContent.style.maxHeight = null;
}

// =========== Show & Hide Button Scroll to Top
const btnUp = document.querySelector('.btn-up');
const header = document.querySelector('.header');
window.onscroll = function () {
  const windowHeight = window.innerHeight;

  if (window.scrollY > 2 * windowHeight) {
    btnUp.classList.add('show');
  } else {
    btnUp.classList.remove('show');
  }

  if (window.scrollY >= 20) {
    header.classList.add('expand');
  } else {
    header.classList.remove('expand');
  }
};

// ==================== Footer Year
const footerYear = document.getElementById('full-year');
footerYear.textContent = new Date().getFullYear();

// ===================== Timer
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.timer__item-time');
  // Date Setting
  // futureDate = YYYY/MM/DD /HH/MM/SS GMT+0800 => Hong Kong Time zone
  // const futureDate = new Date('2025-05-15 12:00:00 GMT+0800');
  const futureDate = new Date('2025-05-15T12:00:00+08:00');

  const futureTime = futureDate.getTime();

  function getRemainingTime() {
    const now = new Date().getTime();
    const t = futureTime - now;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;

    let day = Math.floor(t / oneDay);
    let hour = Math.floor((t % oneDay) / oneHour);
    let minute = Math.floor((t % oneHour) / oneMinute);
    let second = Math.floor((t % oneMinute) / oneSecond);

    const val = [day, hour, minute, second];

    function format(item) {
      return item < 10 ? `0${item}` : item;
    }

    items.forEach((item, index) => {
      item.innerHTML = t > 1 ? format(val[index]) : '00';
    });

    if (t < 1) clearInterval(countdown);
  }

  let countdown = setInterval(getRemainingTime, 1000);
  getRemainingTime();
});
