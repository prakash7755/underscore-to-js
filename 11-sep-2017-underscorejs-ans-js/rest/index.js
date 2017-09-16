'use strict';
(function() {
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



    const employees = ['kottai', 'prakash', 'ravi', 'murali']
    inputsElem.innerText = stringify(employees);

    // Using UnderScore Rest Method

    const result_U = _.rest(employees);
    outPutElem1.innerText = stringify(result_U);

    // Using JavaScript Shift Method
    const result_N = employees.shift();
    outPutElem2.innerText = stringify(employees);

}());