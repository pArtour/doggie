const scroll = (btnSelector, scrollToBlock) => {
    const btns = document.querySelectorAll(`.${btnSelector}`);
    
    const buttonClick = () => {
        const scrollTarget = document.querySelector(`.${scrollToBlock}`);
        const topOffset = 0; // 0 by default but can be changed if top offset is needed
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
    
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    btns.forEach(btn => btn.parentNode.tagName !== 'form'.toUpperCase() ? btn.addEventListener('click', buttonClick) : null);
};
export default scroll;