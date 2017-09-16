'use strict';
( function() {
	const inputsElem = document.querySelector('#inputs1');
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



    const student = ['prakash',  'ramya', 'kalpana', 'saranya'];
    const boyName = 'prakash';
    inputsElem.innerText = stringify(student);
    inputsElem2.innerText = boyName;

    // Using UnderScore WithOut Method

    const girlsNames = _.without(student,boyName);
    outPutElem1.innerText = stringify(girlsNames);

    // Using JavaScript Filter And Index Method

    function findName(name) {
    	return boyName.indexOf(name) <= -1
    }

    const result_N = student.filter(findName);
    outPutElem2.innerText = stringify(result_N);


} ());