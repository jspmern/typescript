"use strict";
let obj = { name: 'utsavs', age: 8 };
//if some of key is missing in that time you are getting error for that one you can create optional (?)
let obj2 = { name: 'utsav', age: 23 }; //here add become optional
let res3 = Object.keys(obj2);
console.log(res3);
let obj3;
let obj4 = { name: "utsav", address: 'delhi', age: 23 };
console.log(obj4.name, obj4.address, obj4.age);
let obj5;
obj5 = { name: "utsav", roll: 34 };
