const form = formSelector => {
    const formElem = document.querySelector(`.${formSelector}`),
          inputs = formElem.querySelectorAll('.appointment__input');

    function onBlurEffect() {
        if (!this.value) {
            this.classList.add('invalid');
        } else this.classList.remove('invalid');
    }
    inputs.forEach(input => input.addEventListener('blur', onBlurEffect));
}
export default form;