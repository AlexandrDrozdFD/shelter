const btnMakeAFriend = document.querySelectorAll('.not-only__content__button')[0];
const btnGetTheRest = document.querySelector('.btn-pets');

btnMakeAFriend.addEventListener('click', () => {
  document.location = '../pets/index.html';
});
btnGetTheRest.addEventListener('click', () => {
  document.location = '../pets/index.html';
});

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
const burgerOverlay = document.querySelector('.burger__overlay');
const body = document.querySelector('body');


burger.addEventListener('click', () => {
  burger.classList.toggle('rotate');
  if (menu.className === 'menu js-menu') {
    
    menu.classList.toggle('active', true);
    body.style.overflow = 'hidden';

  } else if ((menu.className === 'menu js-menu active')){
    menu.classList.toggle('active', false);
    body.style.overflow = 'visible';
    
  }
  burgerOverlay.classList.toggle('not-visible');
   
  logo.addEventListener('click', () => {
    burger.classList.remove('rotate');
    menu.classList.remove('active');
    burgerOverlay.classList.add('not-visible');
  });
  burgerOverlay.addEventListener('click', () => {
    burger.classList.remove('rotate');
    menu.classList.remove('active');
    burgerOverlay.classList.add('not-visible');
    body.style.overflow = 'visible';
  });
});

menu.addEventListener('click', (e) => {
  const target = e.target;
  if (target.tagName === 'A' && target.className === 'list__item__link active') {
    document.location = '../main/index.html';
  }
});

