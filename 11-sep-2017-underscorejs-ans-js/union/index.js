'use strict';
( function() {
	const inputsElem = document.querySelector('#inputs1');
	const inputsElem2 = document.querySelector('#inputs2');
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

    const employeesHCL = ['prakash', 'murali', 'muni', 'madhu'];
    const employeesIBM = ['ravi', 'ramu', 'madhu'];
    inputsElem.innerText = stringify(employeesHCL);
    inputsElem2.innerText = stringify(employeesIBM);

    //Using Underscore Union Method
    const result_u = _.union(employeesHCL,employeesIBM)
    outPutElem1.innerText = stringify(result_u);

    // Using Javascript Spreed Operaton 

    const result_N = [...new Set([...employeesHCL, ...employeesIBM])];
    outPutElem2.innerText = stringify(result_N);
} ());