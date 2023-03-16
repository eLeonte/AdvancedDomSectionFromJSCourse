'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////
//////////////////////////////////
//////////////////////////////////

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn--close--cookie">Got it!</button>';

// header.prepend(message); // first child of header section
header.append(message); // last child of header section
// header.append(message.cloneNode(true)); // we copy it.

//header.before(message); // vecini, inainte de sectiunea header
// header.after(message); // vecini, dupa sectiunea header//
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

// 187. Styles, Attributes and Classes
message.style.backgroundColor = '#37383d';
message.style.width = '120%'; // we must add the unit %

window.localStorage.setItem('Hello World!', 'HelloWorld');

console.log(message.style.height); // no results because style returns and its applied only on in-line styles
console.log(message.style.backgroundColor); // valid - style set above manually ourselves.

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 25 + 'px';
console.log(getComputedStyle(message).height);

//document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');

console.log(link.href);
console.log(link.getAttribute('href'));

// Data Attribute
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'd', 'e');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');
// Don't use because this will override all existing classes.
// logo.className = 'andrei';

// 188. Implementing Smooth Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const section1coords = section1.getBoundingClientRect();

  console.log(section1coords);
  //console.log(e.target.getBoundingClientRect());

  console.log(
    'Current scroll (X/Y)',
    window.pageXOffset,
    window.pageYOffset,
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  console.log(section1coords.top);
  // Scrolling
  // scrollTo - window method we can use

  // 1.
  /** 
    window.scrollTo( 
     section1coords.left + window.pageXOffset, 
     section1coords.top + window.pageYOffset
   );
    */

  // current position + current scroll
  // 2.
  /** 
  window.scrollTo({
    left: section1coords.left + window.pageXOffset,
    top: section1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
  */
  section1.scrollIntoView({ behavior: 'smooth' });
});

// 189. Types of Events and Events Handlers

const h1 = document.querySelector('h1');

const alertH1Hover = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};

h1.addEventListener('mouseenter', alertH1Hover);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1Hover), 5000);

// pe element direct globalEventHandler onmouseenter
// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// };

// addEventListener is better because we can add more events
// we can remove one event when we don't need it anymore.
