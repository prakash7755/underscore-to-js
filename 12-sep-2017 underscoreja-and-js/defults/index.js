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
  const employeesHCL = {name: 'prakash', salary: 30000};
  const  employeesIBM = {name: 'murali'};
  inputsElem.innerText = stringify(employeesHCL);
  inputsElem2.innerText = stringify(employeesIBM);

  // Using UnderScore Defult Method

   const result_U = _.defaults(employeesIBM,employeesHCL);
   outPutElem1.innerText = stringify(result_U);

   // Using JavaScript Object Replace
   employeesHCL.name = 'murali';
   outPutElem2.innerText = stringify(employeesHCL);
} ());