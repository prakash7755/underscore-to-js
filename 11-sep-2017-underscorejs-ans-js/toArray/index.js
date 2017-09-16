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


    const numbers = [1, 2, 3, 4, 5, 6];
    const num = numbers.toString()
    inputsElem.innerText = stringify(num);

    //Using Underscore ToArray Method

    const result_U = (function(){ return _.toArray(arguments).slice(); }) (num);
    outPutElem1.innerText = stringify(result_U);

    //Using JavaScript split Method

     const result_N = num.split();
     outPutElem2.innerText = stringify(result_N);
} ());