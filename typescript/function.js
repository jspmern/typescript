"use strict";
//example one for function with argument with return type
// function demo3 (no:number,no1:number): void
// {
//    console.log(no+no1)
// }
// demo3(25,24)
// demo3(23, 24);
function print(data) {
    console.log(data);
}
function more(arg1, arg2, cb) {
    cb(`${arg1} ${arg2} `);
}
more('utsav', 'apoorve', print);
