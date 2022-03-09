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
    console.log('yes');

  } else if ((menu.className === 'menu js-menu active')){
    menu.classList.toggle('active', false);
    body.style.overflow = 'visible';
    console.log('no');
    
  }
  burgerOverlay.classList.toggle('not-visible');
  
  // click on logo (while burger is opened) I close burger and hide overlay 
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


//!slider


// let petsCards = document.querySelectorAll('.pets_cards'); //items
// let currentItem = 0;
// let isEnabledFlag = true;


// document.querySelector('.arrow_prev.left').addEventListener('click', function() {
//     if (isEnabledFlag) {
//         previousItem(currentItem);
//     }
// });
// document.querySelector('.arrow_next.right').addEventListener('click', function() {
//     if (isEnabledFlag) {
//         nextItem(currentItem);
//     }
// });

// function changeCurrentItem(n) {
//     currentItem = (n + petsCards.length) % petsCards.length; //! для карусели как только приходим к элеменкт акстивному 3
//     // возвращаемся в ноль. и так бесконечно
// }
// function previousItem(n) {
//     hideItem('to-right');
//     changeCurrentItem(n - 1);
//     showItem('from-left');
// }
// function nextItem(n) {
//     hideItem('to-left');
//     changeCurrentItem(n + 1);
//     showItem('from-right');
// }

// function hideItem(direction) {
//     isEnabledFlag = false;
//     items[currentItem].classList.add(direction);
//     items[currentItem].addEventListener('animationend', function() {
//         this.classList.remove('active', direction);
//     });
// }
// function showItem(direction) {
//     items[currentItem].classList.add('next', direction);
//     items[currentItem].addEventListener('animationend', function() {
//         this.classList.remove('next', direction);
//         this.classList.add('active');
//         isEnabledFlag = true;
//     });
// }



// const swipeDetect = (el) => {

//     let surface = el;
//     let startX = 0;
//     let startY = 0;
//     let distX = 0;
//     let distY = 0;


//     let startTime = 0;
//     let elapsedTime = 0;

//     let threshold = 150;
//     let restraint = 100;
//     let allowedTime = 300;

//     surface.addEventListener('mousedown', function(e) {
//         startX = e.pageX;
//         startY = e.pageY;
//         startTime = new Date().getTime();
//         e.preventDefault();
//     });

//     surface.addEventListener('mouseup', function(e) {
//         distX = e.pageX - startX;
//         distY = e.pageY - startY;
//         elapsedTime = new Date().getTime() - startTime;

//         if (elapsedTime <= allowedTime) {
//             if(Math.abs(distX) >= threshold && Math.abs(distY) <= restraint)  {
//                 if(distX > 0) {
//                     if (isEnabledFlag) {
//                         previousItem(currentItem);
//                     }
//                 }else {
//                     if (isEnabledFlag) {
//                         nextItem(currentItem);
//                     }
//                 }
//             }
//         }

//         e.preventDefault();
//     });

//     surface.addEventListener('touchstart', function(e) {
//         if (e.target.classList.contains('arrow') || e.target.classList.contains('control')) {
//             if (e.target.classList.contains('left')) {
//                 if (isEnabledFlag) {
//                     previousItem(currentItem);
//                 }
//             } else  if (e.target.classList.contains('right')) {
//                 if (isEnabledFlag) {
//                     nextItem(currentItem);
//                 }
//             }
//         }

//         let touchObj = e.changedTouches[0];
//         startX = touchObj.pageX;
//         startY = touchObj.pageY;
//         startTime = new Date().getTime();
//         e.preventDefault();
//     });
//     surface.addEventListener('touchmove', function(e) {
//         e.preventDefault();
//     });


//     surface.addEventListener('touchend', function(e) {
//         let touchObj = e.changedTouches[0];
//         distX = touchObj.pageX - startX;
//         distY = touchObj.pageY - startY;
//         elapsedTime = new Date().getTime() - startTime;

//         if (elapsedTime <= allowedTime) {
//             if(Math.abs(distX) >= threshold && Math.abs(distY) <= restraint)  {
//                 if(distX > 0) {
//                     if (isEnabledFlag) {
//                         previousItem(currentItem);
//                     }
//                 }else {
//                     if (isEnabledFlag) {
//                         nextItem(currentItem);
//                     }
//                 }
//             }
//         }
//         e.preventDefault();
//     });
// }
// let elem = document.querySelector('.carousel');
// swipeDetect(elem);
   
//!popup
// const petsCards = document.querySelectorAll('.pets_cards__card');
// const popup = document.querySelector('#popup');

// petsCards.forEach((petsCard) => {
//   petsCard.addEventListener('click', getPets);
// });
// burgerOverlay.addEventListener('click', () => {
//   burgerOverlay.classList.add('not-visible');
//   popup.remove();

// });


// // 


// async function getPets() {
//   const url = '../../assets/pets.json';
//   const response = await fetch(url);
//   const data = await response.json();
//   let rand = Math.floor(Math.random() * data.length);
//   console.log(data[rand].name)
//   console.log(data);
  
//   burgerOverlay.classList.remove('not-visible');
//   burgerOverlay.insertAdjacentHTML('beforebegin', `<div id="popup">${data[rand].name}</div>`);
 
// }

