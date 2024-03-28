let form = document.querySelector('.calc');
let res_field = document.querySelector('.calc__result-field');
let btn_num = document.querySelectorAll('.btn-add-res');
let btn_reset = document.querySelector('.btn-reset');
let btn_calc = document.querySelector('.btn-calc');

form.addEventListener('submit', function (e) {
    e.preventDefault()
});

for (i = 0; i < btn_num.length; i++) {
    btn_num[i].addEventListener('click', function (e) {
        e.preventDefault()
        res_field.value += this.innerHTML;
    })
};

btn_reset.addEventListener('click', function (e) {
    e.preventDefault()
    res_field.value = '';
});

btn_calc.addEventListener('click', function (e) {
    e.preventDefault()
    try {
        res_field.value = calculate(res_field.value);
    } catch (error) {
        res_field.value = 'Error';
    }
});

function calculate(expression) {
    // Regular expression to match only allowed characters
    let regex = /[\d+\-*/().]/;
    if (!regex.test(expression)) {
        throw new Error('Invalid expression');
    }
    // Using Function constructor to avoid eval()
    let calcFunction = new Function('return ' + expression);
    return calcFunction();
};