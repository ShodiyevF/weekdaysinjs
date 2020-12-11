var elForm = document.querySelector('.form');
var elFormInput = document.querySelector('.form-input');
var elResult = document.querySelector('.result');

elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var formInputValue = elFormInput.value;

    if (formInputValue == 1) {
        elResult.textContent = 'Dushanbi';

    } else if (formInputValue == 2) {
        elResult.textContent = 'Seshanbi';

    } else if (formInputValue == 3) {
        elResult.textContent = 'Chorshanbi';

    } else if (formInputValue == 4) {
        elResult.textContent = 'Payshanbi';

    } else if (formInputValue == 5) {
        elResult.textContent = 'Juma';

    } else if (formInputValue == 6) {
        elResult.textContent = 'Shanbi';

    } else if (formInputValue == 7) {
        elResult.textContent = 'Yakshanbi';

    } else {
        elResult.textContent = "Birat yoki sistra faqat 1 dan 7 gacha bulgan raqam kiriting 😗";
    }
});