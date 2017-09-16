'use strict';
( function() {
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

const value = 'prakash';
inputsElem.innerText = stringify(value);

//using UnderScore Js Empty Method

const result_U = _.isString(value);
outPutElem1.innerText = stringify(result_U);

// Using JavaScript IndexOf Method

const result_N = (typeof(value) === 'string') ;
outPutElem2.innerText = stringify(result_N);
}());