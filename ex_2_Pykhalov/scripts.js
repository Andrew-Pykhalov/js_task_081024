let calculation = function() {
    let numberA = document.querySelector('[name="calc_number_a"]');
    let numberB = document.querySelector('[name="calc_number_b"]');

    let resultBtn = document.querySelector('.result_btn');
    

    resultBtn.addEventListener('click', function() {
        let a = +numberA.value,
            b = +numberB.value;

        let select = document.querySelector('select');

        let option = select.value;

        if(option == 'plus') plus(a, b);

        if(option == 'minus') minus(a, b);

        if(option == 'divide') divide(a, b);

        if(option == 'multiply') multiply(a, b);
    
    });

    let result;

    function plus(a, b) {
        result = a + b;
        show(result);
    }

    function minus(a, b) {
        result = a - b;
        show(result);
    }

    function divide(a, b) {
        result = a / b;
        show(result);
    }

    function multiply(a, b) {
        result = a * b;
        show(result);
    }

    function show(result) {
        let answer = document.querySelector('.result');
        answer.innerHTML = result;
    }
}

window.addEventListener('load', function() {
    calculation();
});