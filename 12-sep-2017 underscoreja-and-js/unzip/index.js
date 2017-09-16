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


    const employees_Salary = [["prakash",20000],["ravi",15000],["rajesh",30000],["madhu",43000],["murali",52000],["udhaya",99000]];
    inputsElem.innerText = stringify(employees_Salary);
   	

    // Using UnderScore Unzip Method
    const result_U = _.unzip(employees_Salary);
    outPutElem1.innerText = stringify(result_U);

    // Using JavaScript For Loop

       const result1 = [];
       const result2 = [];
       const result = employees_Salary.join();
       const final = result.split(',')
       for (let i=0; i < final.length; i++) {
       	if ((i+2)%2 === 0) {
       		result1.push(final[i]);
       	}
       	else {
       		result2.push(final[i]);
       	}
       }
    const result_N = [result1,result2];
    outPutElem2.innerText = stringify(result_N)
} ());