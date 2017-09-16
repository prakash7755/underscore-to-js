'use strict';
( function() {
	const inputsElem1 = document.querySelector('#inputs1');
	const inputsElem2 = document.querySelector('#inputs2');
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

    const boysNames = ['prakash', 'ravi', 'murali'];
    const girlsNames = ['kalpana', 'saranya', 'sudha'];
    inputsElem1.innerText = stringify(boysNames);
    inputsElem2.innerText = stringify(girlsNames);

    // Using UnderScore JS Reduce Right Method

        function concat(a, b) {
        	return a.concat(b)
        }
    const nameList = [boysNames, girlsNames];
    const result_U = _.reduceRight(nameList, concat)
    outPutElem1.innerText = stringify(result_U);

    // Using JavaScript Concat Method

    const result_N = girlsNames.concat(boysNames);
    outPutElem2.innerText = stringify(result_N);
} ());