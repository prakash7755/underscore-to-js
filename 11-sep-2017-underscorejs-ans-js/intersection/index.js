'use strict';
( function() {
	const inputsElem = document.querySelector('#inputs1');
	const inputsElem2 = document.querySelector('#inputs2');
    const outPutElem1 = document.querySelector('#u-js');
    const outPutElem2 = document.querySelector('#n-js');

var employeesHCl = ['prakash', 'murali', 'rajesh', 'madhu'];
var employeesIBM = ['ravi', 'anil', 'naresh', 'madhu', 'rajesh'];
    inputsElem.innerText = JSON.stringify(employeesHCl);
    inputsElem2.innerText = JSON.stringify(employeesIBM);

    // Using UnderScore Intersection Method
    const result_U = _.intersection(employeesHCl,employeesIBM);
    outPutElem1.innerText = JSON.stringify(result_U);

    // Using JavaScript Filter And Index Method

     
      var result_N = employeesIBM.filter(x => employeesHCl.indexOf(x) >= 1 );
      outPutElem2.innerText = JSON.stringify(result_N);
} ());