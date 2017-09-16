'use strict';
(function() {

    const inputsElem = document.querySelector('#inputs1');
    const inputsElem2 = document.querySelector('#inputs2');
    const outPutElem1 = document.querySelector('#u-js');
    const outPutElem2 = document.querySelector('#n-js');


    function stringify(data) {
        try {
            data = JSON.stringify(data);
        } catch (e) {
            console.error(e);
        }

        return data;
    }

    const student = { name: 'prakash', age: 25 };

    inputsElem.innerText = stringify(student);

    // Using UnderScore Isequal Method
    var result_U = _.isMatch(student, {age: 25})
    outPutElem1.innerText = stringify(result_U);

    // Using JavaScript If  Condtion

    function check(a, b) {
        if (a.age === 25) {
            return true;
        } else {
            return false;
        }
    }
    const result_N = check(student);
    outPutElem2.innerText = stringify(result_N);
}())