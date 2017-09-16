'use strict';
(function() {
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

    const employees = ['prakash', 'ravi', 'rajesh', 'madhu', 'murali', 'udhaya'];
    const salary = [20000, 15000, 30000, 43000, 52000, 99000];
    inputsElem.innerText = stringify(employees);
    inputsElem2.innerText = stringify(salary);

    // Using UnderScore Object Method

    const result_U = _.object(employees,salary);
    outPutElem1.innerText = stringify(result_U);

    // Using JavaScript For Loop

    const result_N = { };
    for (let i=0; i<=employees.length; i++) {
    	result_N [employees[i]] = salary[i];
    }

    outPutElem2.innerText = stringify(result_N);

}());