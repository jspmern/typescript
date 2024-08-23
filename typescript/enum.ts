// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.
// Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value:
enum Cordinate{
    north,
    south,
    east,
    west
}
enum Cordinate2{
    north=2,
    south,
    east,
    west
}   //this time it will start from 2,3,4,5
console.log(Cordinate.north,Cordinate.south,Cordinate.east,Cordinate.west)

enum Role{
    admin="admin",
    hospital="hospital",
    donor="donor"
}
console.log(Role.admin,Role.hospital,Role.donor)