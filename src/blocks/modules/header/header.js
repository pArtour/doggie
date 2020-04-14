const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.header__nav');
const navCloseBtn = document.querySelector('.header__nav-close');
const navButtons = document.querySelectorAll('.header__nav-btn');
const navInnerLists = document.querySelectorAll('.header__nav-inner-list');

hamburger.addEventListener('click',  function() {
    navList.classList.add('header__nav_active');
    this.classList.add('active');
});
navCloseBtn.addEventListener('click', () => {
    navList.classList.remove('header__nav_active');
    hamburger.classList.remove('active');
    navInnerLists.forEach(item => item.classList.remove('header__nav-inner-list_active'))
})


navButtons.forEach((button, index) => button.addEventListener('click', () => {
    navInnerLists[index].classList.toggle('header__nav-inner-list_active')
}));