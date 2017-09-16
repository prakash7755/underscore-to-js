'use strict';
( function() {
	  const inputsElem = document.querySelector('#inputs');
    const inputsElem1 = document.querySelector('#inputs2');
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


// Input Persons Age
const ages = [5, 8, 4, 18, 20];
const checkAdultAge = 18;
inputsElem.innerText = stringify(ages);
inputsElem1.innerText = stringify(checkAdultAge);

function checkAdult(age) {
	return age >= 18;
}

// Using UnderScore JS every Method
const result_U = (_.every(ages, checkAdult));
outPutElem1.innerText = result_U;

// Using JavaScript Every Method
const result_N = (ages.every(checkAdult));
outPutElem2.innerText = result_N;
} ());