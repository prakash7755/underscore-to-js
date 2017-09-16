'use strict';
( function() {
	 const inputsElem = document.querySelector('#inputs');
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




// Input Number Values
     const numbers = [44, 55, 22, 62];
     inputsElem.innerText = stringify(numbers);


       function add(memo, num) {
       	return memo + num;
       }

          // Using UnderScore JS Reduce Method

     const result_U = _.reduce(numbers, add)
     outPutElem1.innerText = stringify(result_U);

     // Using JavaScript Reduce Method

     const result_N = numbers.reduce(add)
     outPutElem2.innerText = stringify(result_N);
} () );