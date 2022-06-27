# Resolve-multiple-apis

This is a function which takes an array of input values and a function which generates `Promises`. For any value in the array, the promise generator will return a `Promise` to fulfill to an output value. The function returns a `Promise`  that fulfills to an array of the processed output values.

I am utilizing this public API for the implementation example.

https://api.domainsdb.info/v1/domains/search?domain=xxxxxxxx

The  `promiseSequnce()` function is generic, another function must be defined to fetch the resource you desire. Consider the following.

<pre>
function fetchBody(url) {
    return fetch(url).then(r => r.text());
}
</pre>

This function is included in the script as a way to fetch URLs and is used as the `Promise` generator in my implementation.
