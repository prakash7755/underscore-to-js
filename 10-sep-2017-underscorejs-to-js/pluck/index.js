'use strict';
(function() {
    const inputsElem = document.querySelector('#inputs1');
    const outPutElem1 = document.querySelector('#u-js');
    const outPutElem2 = document.querySelector('#n-js');

    function stringify(data) {
        try {
            data = JSON.stringify(data);
        } catch (e) {
            console.log(e)
        }
        return data;
    }


    let i;
    const studentResults = [{ name: 'prakash', marks: 295 },
        { name: 'madhu', marks: 402 },
        { name: 'udhaya', marks: 492 }
    ];

    inputsElem.innerText = stringify(studentResults);

    // Using UnderScor JS pluck Method

    const result_U = stringify(_.pluck(studentResults, 'name'));
    outPutElem1.innerText = result_U;

    // Using JavaScript using For Loop
    const result_N = []

    for (let i = 0; i < studentResults.length; i++) {
        const result = studentResults[i].name;
        result_N.push(result);
    }
    outPutElem2.innerText = stringify(result_N);


}());