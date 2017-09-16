'use sttict';
( function() {
	const inputsElem = document.querySelector('#inputs1');
	const inputsElem1 = document.querySelector('#inputs2');
    const outPutElem1 = document.querySelector('#u-js');
    const outPutElem2 = document.querySelector('#n-js');




	const names = ['prakash', 'ravi', 'madhu', 'murali', 'udhaya'];
	const name = 'murali';
   
   function stringify(data) {
   	try {
   		data = JSON.stringify(data);
   	} catch(e){
         console.log(e)
   	}
   	return data;
   }
   
	inputsElem.innerText = stringify(names);
	inputsElem1.innerText = stringify(name);

	// Using UnderScore JS Contains Method

	const result_U = _.contains(names, name);
	outPutElem1.innerText =  stringify(result_U);

	// Using JavaScript filter And Indexof Method

	const result_N = (names.indexOf(name) != -1);
	outPutElem2.innerText = stringify(result_N);
} ());