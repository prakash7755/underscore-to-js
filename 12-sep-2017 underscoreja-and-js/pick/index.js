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

    const subMarks = { tamil: 60, english: 45, math: 70 };
    inputsElem.innerText = stringify(subMarks);

    // Using UnderScore Pick Method
    const result_U = _.pick(subMarks,'tamil','english');
    outPutElem1.innerText = stringify(result_U);
    
  // Using JavaScript Delete Method
    delete subMarks.math
    outPutElem2.innerText = stringify(subMarks);
} ());