'use strict';

(function() {

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


// Input SubMarks
    const subMarks = { tamil: 60, english: 45, math: 70 };
    inputsElem.innerText = stringify(subMarks);

    // Using UnderScore Method

    function addInternalMarks(marks, key) {
        return marks + 24;
    }


    const result_U = stringify(_.map(subMarks, addInternalMarks));

    // UnderScore JS Outpt

    outPutElem1.innerText = result_U;

    // using JavaScript Method


    function value(col) {
        return Object.keys(col).map(key => col[key])
    }

    function mab(col, cb) {
        return Object.keys(col).map(cb);
    }

    var result = value(subMarks);
    const result_N = stringify(result.map(num => num + 24));

    // Using JavaScript Output
    outPutElem2.innerText = result_N;



}());