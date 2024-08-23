"use strict";
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.
// Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value:
var Cordinate;
(function (Cordinate) {
    Cordinate[Cordinate["north"] = 0] = "north";
    Cordinate[Cordinate["south"] = 1] = "south";
    Cordinate[Cordinate["east"] = 2] = "east";
    Cordinate[Cordinate["west"] = 3] = "west";
})(Cordinate || (Cordinate = {}));
var Cordinate2;
(function (Cordinate2) {
    Cordinate2[Cordinate2["north"] = 2] = "north";
    Cordinate2[Cordinate2["south"] = 3] = "south";
    Cordinate2[Cordinate2["east"] = 4] = "east";
    Cordinate2[Cordinate2["west"] = 5] = "west";
})(Cordinate2 || (Cordinate2 = {})); //this time it will start from 2,3,4,5
console.log(Cordinate.north, Cordinate.south, Cordinate.east, Cordinate.west);
var Role;
(function (Role) {
    Role["admin"] = "admin";
    Role["hospital"] = "hospital";
    Role["donor"] = "donor";
})(Role || (Role = {}));
console.log(Role.admin, Role.hospital, Role.donor);
