'use strict';
(function() {

    const inputsElem = document.querySelector('#inputs');
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



    const names = ['prakash', 'rajes', 'ramu'];

    inputsElem.innerText = stringify(names);


    // This Function Will Create Element For Each Name..
    function createNameElement(name, outPutElem) {
        const div = document.createElement('DIV');
        div.innerText = name;
        outPutElem.appendChild(div);
    }

    function showOutput1(name) {
        const outPutElem = outPutElem1;
        createNameElement(name, outPutElem);
    }

    function showOutput2(name) {
        const outPutElem = outPutElem2;
        createNameElement(name, outPutElem);
    }


    // Using Underscore Js

    _.each(names, showOutput1);


    // Using Vanila Js

    Object.keys(names).forEach(function(key) {
        showOutput2(names[key])
    })


}());