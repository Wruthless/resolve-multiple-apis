
function promiseSequence(inputs, promiseMaker) {
    inputs = [...inputs];

    function handleNextInput(outputs) {
        if (inputs.length === 0) {
            return outputs;
        } else {
            let nextInput = inputs.shift(); // Get the next input value,
            return promiseMaker(nextInput)  // compute the next output value,
                .then(output => outputs.concat(output))
                .then(handleNextInput);
        }
    }

    return Promise.resolve([]).then(handleNextInput);
}

function fetchBody(url) { return fetch(url).then(r => r.text()); }


let pArray = [
    "https://api.domainsdb.info/v1/domains/search?domain=facebook",
    "https://api.domainsdb.info/v1/domains/search?domain=microsoft",
    "https://api.domainsdb.info/v1/domains/search?domain=twitter"    
];

promiseSequence(pArray, fetchBody)
    .then(bodies => {console.log(bodies);  })
    .catch(console.error);

