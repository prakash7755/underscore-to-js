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


    const employeesHCl = ['prakash', 'ravi', 'rajesh', 'madhu'];
    const employeesIBM = ['madhu', 'murali', 'udhaya','prakash'];
    inputsElem.innerText = stringify(employeesHCl);
    inputsElem2.innerText = stringify(employeesIBM);

    // Using UnderScore Difference Method

    const result_U = _.difference(employeesHCl, employeesIBM);
    outPutElem1.innerText = stringify(result_U);

    // Using JavaScript Filter And Index Method
     
     function differenceName(name) {
     	return employeesIBM.indexOf(name) <= -1
     }

    const result_N = employeesHCl.filter(differenceName)
    outPutElem2.innerText = stringify(result_N);
        console.log(result_N);

} ());