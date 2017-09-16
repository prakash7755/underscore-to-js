'use strict';
(function() {
    const inputsElem = document.querySelector('#inputs1');
    const inputsElem2 = document.querySelector('#inputs2');
    const outPutElem1 = document.querySelector('#u-js');
    const outPutElem2 = document.querySelector('#n-js');


    function stringify(data) {
        try {
            data = JSON.stringify(data);
        } catch (e) {
            console.error(e);
        }

        return data;
    }


    const empInIBM = ['anil', 'raju', 'ramesh', 'magesh', 'ravi', 'udhaya'];
    const salary = [20000, 15000, 30000, 43000, 52000, 99000];
    inputsElem.innerText = stringify(empInIBM);
    inputsElem2.innerText = stringify(salary);

    //Using UnderScore Zip Method

    const result_U = _.zip(empInIBM, salary);
    outPutElem1.innerText = stringify(result_U);

    //Using JavaScript Map Method

    function zip(name, i) {
        return [name, salary[i]];
    }

    const result_N = empInIBM.map(zip);
    outPutElem2.innerText = stringify(result_N);
}());