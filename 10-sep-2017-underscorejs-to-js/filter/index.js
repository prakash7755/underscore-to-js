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

// Input Persons Age
const ages = [5, 8, 4, 18, 20];
inputsElem.innerText = stringify(ages);

function checkAdult(age) {
	return age >= 18;
}

// Using UnderScore JS Filter Method
const result_U = stringify(_.filter(ages, checkAdult));
outPutElem1.innerText = result_U;

// Using JavaScript Filter Method
const result_N = stringify(ages.filter(checkAdult));
outPutElem2.innerText = result_N;
} ());