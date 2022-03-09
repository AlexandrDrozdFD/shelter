const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const burgerOverlay = document.querySelector('.burger__overlay');

burger.addEventListener('click', () => {


  burger.classList.toggle('rotate');
  if (menu.className === 'menu') {
    
    menu.classList.toggle('active', true);
    body.style.overflow = 'hidden';
    console.log('yes');

  } else if ((menu.className === 'menu active')){
    menu.classList.toggle('active', false);
    body.style.overflow = 'visible';
    console.log('no');
    
  }

  burgerOverlay.classList.toggle('not-visible');

  logo.addEventListener('click', () => {
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
    document.location = '../pets/index.html';
  }
})

