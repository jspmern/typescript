"use strict";
let userName = 'utsav';
//username=23    //here you are getting error because by default it become string type, that is desided by typescript
userName = "aman";
//string
let user1 = "utsav";
let user2 = `aman`;
let user3 = 'vijaya';
//number type
let age = 5;
let num1 = 9.33;
//boolean
let isActive = true;
//bigint (but make enable to your bigint you have to change config file {target:'ES2020',"lib":['ES2020','DOM']})
let no = 12345666666666666666666666n;
//any  (any is a type that disables type checking and effectively allow all types to be used)
let not_known;
not_known = 'hello';
not_known = {};
not_known = [];
//console.log(typeof not_known)   #error because bydefault type is any
//unknown (the unknown type in typescript is used for variables whose type is not yet known and need to determind)
let not_known1;
not_known1 = 'hello';
not_known1 = {};
not_known1 = [];
console.log(typeof not_known1);
