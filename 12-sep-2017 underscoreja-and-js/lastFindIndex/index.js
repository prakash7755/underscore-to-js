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

    const salary = [20000, 15000, 30000, 43000, 52000, 30000, 99000];
    inputsElem.innerText = stringify(salary);

    // Using UnderScore FindIndex Method
    
     const result_U = _.findLastIndex(salary,30000);
     outPutElem1.innerText = stringify(result_U);

     // Using JavaScript IndexOf Method

     const result_N = salary.lastIndexOf(30000);
     outPutElem2.innerText = stringify(result_N);
} ());