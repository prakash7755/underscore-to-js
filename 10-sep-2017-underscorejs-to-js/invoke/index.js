'use strict';
(function() {
    const inputsElem1 = document.querySelector('#inputs1');
    const inputsElem2 = document.querySelector('#inputs2');
    const outPutElem1 = document.querySelector('#u-js');
    const outPutElem2 = document.querySelector('#n-js');


    function stringify(data) {
        try {
            data = JSON.stringify(data);
        } catch (e) {
            console.log(e)
        }
        return data;
    }

    const boysNames = ['ravi', 'murali', 'gopal', 'raju'];
    inputsElem1.innerText = stringify(boysNames);


    //using UnderScore JS Invoke Method



    const result_U = _.invoke(boysNames, 'split', '');
    console.log(result_U)
    outPutElem1.innerText = stringify(result_U);

    // using JavaScript Sort Method

    function invoke(arr, method, arg) {
        if (!Array.isArray(arr) || !method || (typeof arg !== 'string')) {
            console.error('Something Went Wrong')
            return [];
        };

        try {
            var result = arr.map(x => x[method](arg));
            return result;
        } catch (e) {
            console.error(e);
            return [];
        }

    };

    const result_N = invoke(boysNames, 'split', '');
    console.log(result_N)
    outPutElem2.innerText = stringify(result_N);
}());