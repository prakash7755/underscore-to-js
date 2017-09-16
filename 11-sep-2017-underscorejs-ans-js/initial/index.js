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

    const employees = ['kottai', 'prakash', 'murali', 'ravi'];
    inputsElem.innerText = stringify(employees);

    //Using UnderScore Initial Method
    const result_U = _.initial(employees);
    outPutElem1.innerText = stringify(result_U);

    // Using JavaScript Pop Method
    const result_N = employees.pop();
    outPutElem2.innerText = stringify(employees);
} ());