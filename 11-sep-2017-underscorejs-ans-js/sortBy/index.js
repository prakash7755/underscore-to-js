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


    const numbers = [99, 20, 35, 58, 92, 98, 89];
    inputsElem.innerText = stringify(numbers);

    //Using UnderScore Js SortBy Method

    const result_U = _.sortBy(numbers);
    outPutElem1.innerText = stringify(result_U);

    //Using JavaScript Sort Method

    const result_N = numbers.sort();
    outPutElem2.innerText = stringify(result_N);

} ());