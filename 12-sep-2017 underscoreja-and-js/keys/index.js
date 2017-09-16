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

    const subjectMarks = {tamil:62, english:73, math: 99};
    inputsElem.innerText = stringify(subjectMarks);

    // Using UnderScore Key Method

    const result_U = _.keys(subjectMarks);
    outPutElem1.innerText = result_U;

    // Using JavaScript Object

    const result_N = Object.keys(subjectMarks);
    outPutElem2.innerText = result_N;
} ());