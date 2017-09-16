'use strict';
( function() {
	const inputsElem = document.querySelector('#inputs1');
	const inputsElem2 = document.querySelector('#inputs2');
    const outPutElem1 = document.querySelector('#u-js');
    const outPutElem2 = document.querySelector('#n-js');


    function stringify(data) {
    	try {
    		data = JSON.stringify(data);
    	} catch(e) {
    		console.error(e);
    	}

    	return data;
    }


    const employees = ['prakash', 'ravi', 'rajesh', 'madhu', 'ravi', 'rajesh'];
    inputsElem.innerText = stringify(employees);

    //Using Underscore Uniq Method
    const result_U = _.uniq(employees);

    outPutElem1.innerText = stringify(result_U);

    // Using JavaScript Spread Operator, Set Constructor..
    const result_N = [...new Set(employees)];
    outPutElem2.innerText = stringify(result_N);
} ());