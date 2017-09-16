'use strict';
(function() {
    const inputsElem = document.querySelector('#inputs2');
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


    const numbers = [1, 2, 3, 4, 5, 6]
    inputsElem.innerText = stringify(numbers);

    //Using Underscore countBy Method

    function count(num) {
        return num % 2 == 0 ? 'even' : 'odd';
    }

    const result_U = _.countBy(numbers, count);
    outPutElem1.innerText = stringify(result_U);

    //Using JavaScript Filter Method
  var tmp = { even: [], odd: [] };

    numbers.forEach(function(val) {
        var key = (val % 2 === 0) ? 'even' : 'odd';
        tmp[key].push(val);
    });

    var rsl = { even: tmp.even.length, odd: tmp.odd.length };


   outPutElem2.innerText = stringify(rsl);
   
}());