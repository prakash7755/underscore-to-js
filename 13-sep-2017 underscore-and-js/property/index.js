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

    const student = { name: 'prakash' };
    inputsElem.innerText = stringify(student);

    // Using UnderScore Property Method
    var result_U = ('prakash' === _.property('name')(student));
    outPutElem1.innerText = stringify(result_U);
    
  // Using JavaScript IndexOf Method
    const result_N = (Object.values(student).indexOf('prakash') != -1);
    outPutElem2.innerText = stringify(result_N);
} ())