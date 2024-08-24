"use strict";
//example
function identity(arg) {
    return arg;
}
let output = identity('HELLO');
//example
function merge(arg1, arg2) {
    return [arg2];
}
merge('utsav', { name: "utsav" });
//3.example 
function arrayHandler(arg) {
    return arg;
}
let number1 = [1, 2, 3, 4, 5];
arrayHandler(number1);
//example
async function fetchHandler(url) {
    let res = await fetch(url);
    let data = await res.json();
    return data;
}
const url = 'https://jsonplaceholder.typicode.com/posts';
fetchHandler(url).then((item) => {
    if (item) {
        console.log(item);
    }
});
