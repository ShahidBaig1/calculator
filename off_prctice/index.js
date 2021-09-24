// declear and initlize variable with null value
let name;
console.log(name);
console.log("typeof name is:", typeof name);

name = null;
console.log(name);
console.log("typeof name is:", typeof name);

name = 3335;
console.log(name);
console.log("typeof name is:", typeof name);

name = "uddin";
console.log(name);
console.log("typeof name is:", typeof name);

name = true;
console.log(name);
console.log("typeof name is:", typeof name);

let expression = "name" * 2;
console.log(expression);
console.log("typeof expression is:", typeof Infinity);

const NAME = "bashir";
console.log(NAME);
console.log("typeof NAME is:", typeof NAME);

/*
this
is 
a 
multiple
line 
comment
*/

/* 
a = 1
b = 0
c = 1
a and b or a and c */

let a = 190,
  b = 33,
  c = 10;
// (a && b) || (a && c)

let expResult = (a && b) || (a && c);
/*

190 and 33  OR  190 and 10
33 OR 10
33
*/
if (expResult) {
}
console.log(expResult);
console.log("typeof expResult is:", typeof expResult);

/*

190 and 33  >  190 and 10
33 > 10
true
*/
let exp2Result = (a && b) > (a && c);
console.log(exp2Result);
console.log("typeof exp2Result is:", typeof exp2Result);

console.log(
  //
  "",
  Boolean(""),
  //
  0,
  Boolean(0),
  //
  0.1,
  Boolean(0.1),

  //
  "NaN",
  Boolean(NaN),
  //
  null,
  Boolean(null),

  //
  undefined,
  Boolean(undefined)
);

console.log(3 % 2);
