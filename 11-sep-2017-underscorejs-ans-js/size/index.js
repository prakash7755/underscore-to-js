'use strict';
( function() {
	const inputsElem = document.querySelector('#inputs1');
    const outPutElem1 = document.querySelector('#u-js');
    const outPutElem2 = document.querySelector('#n-js');

      function stringify(data) {
    try {
        data = JSON.stringify(data);
    } catch(e){
         console.log(e)
    }
    return data;
   }


    const numbers = [1, 2, 3, 4, 5, 6, 7]
    inputsElem.innerText = stringify(numbers);

    // Using Underscore Size Method

    const result_U = _.size(numbers);
    outPutElem1.innerText = stringify(result_U);

    // Using JavaScript Length Method

    const result_N = numbers.length;
    outPutElem2.innerText = stringify(result_N);
} ());