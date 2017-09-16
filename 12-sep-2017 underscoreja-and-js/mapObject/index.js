'use strict';

(function() {

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


// Input SubMarks
    const subMarks = { tamil: 60, english: 45, math: 70 };
    inputsElem.innerText = stringify(subMarks);

    // Using UnderScore Method

    function addInternalMarks(val, key) {
        return val + 24;
    }


    const result_U = stringify(_.mapObject(subMarks, addInternalMarks));

    // UnderScore JS Outpt

    outPutElem1.innerText = result_U;

    // using JavaScript For Loop

    const keys = Object.keys(subMarks);
    const values = Object.values(subMarks);
    const result_N = { };
    for (let i=0; i<= keys.length-1; i++) {
        result_N [keys[i]] = values[i] + 24;
    }
    
    outPutElem2.innerText = stringify(result_N);



}());