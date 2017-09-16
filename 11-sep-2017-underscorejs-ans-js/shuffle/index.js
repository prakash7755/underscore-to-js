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


    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    inputsElem.innerText = stringify(numbers);

    // Using UnderScore Shuffle Methgod

    const result_U = _.shuffle(numbers)
    outPutElem1.innerText =  stringify(result_U);

    // Using JavaScript Random Method

    function shuffle(num) {
        return Math.floor(Math.random() * numbers.length + 1)
    }
    const result_N = numbers.map(shuffle)
    outPutElem2.innerText = stringify(result_N);

}());