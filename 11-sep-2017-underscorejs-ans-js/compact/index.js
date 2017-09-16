'use strict';
( function() {
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


    const falsyValues = [0, 1, false, 2, '', 3];
    inputsElem.innerText =  stringify(falsyValues);

    // Using UnderScore Compact Method
    const result_U = _.compact(falsyValues);
    outPutElem1.innerText = stringify(result_U);

    //Using JavaScript Filter Method

      function filterer(arr) {
     return arr > 0|| isNaN(arr) === true;
  }
    const result_N = falsyValues.filter(filterer)
    outPutElem2.innerText = stringify(result_N);
} ());