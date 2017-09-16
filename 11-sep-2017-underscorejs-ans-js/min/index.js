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


    const ages = [20, 35, 58, 92, 98, 89];
    inputsElem.innerText = stringify(ages);

    // Using UnderScore JS Min Method

    const result_U = _.min(ages);
    outPutElem1.innerText = stringify(result_U);

    // Using JavaScript Min Method
    const result_N = Math.min(...ages);
    outPutElem2.innerText = stringify(result_N);
} ());