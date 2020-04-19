const accordion = (buttons, items) => {
    document.addEventListener('DOMContentLoaded', () => {

        const buttonElements = document.querySelectorAll(`.${buttons}`);
        const galeryElements = document.querySelectorAll(`.${items}`);

        buttonElements.forEach((button, index, array) => button.addEventListener('click', () => {
            array.forEach(btn => btn.classList.remove(`${buttons}_active`));

            button.classList.add(`${buttons}_active`);

            galeryElements.forEach(item => item.classList.remove(`${items}_active`));

            galeryElements[index].classList.add(`${items}_active`);

        }));
    });
}
export default accordion;