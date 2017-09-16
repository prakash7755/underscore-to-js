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

    const employee = { name: 'prakash', age: 25, salary: 25000 };
    inputsElem.innerText = stringify(employee);

    // Using UnderScore PropertyOf Method
    var result_U = _.propertyOf(employee)('name');
    outPutElem1.innerText = stringify(result_U);
    
  // Using JavaScript find Method

     function val(name){
        return name = 'prakash'
     }
    const result_N = (Object.values(employee).find(val));
    outPutElem2.innerText = stringify(result_N);
} ())