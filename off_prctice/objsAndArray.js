let students = new Array();
let std = [];
console.log(students.length);
console.log(students);

let x;

console.log(typeof x);
// console.log(x.length);

// how to add values in an array?

x = [3434, 34, 3434342, 34];
console.log(typeof x);

console.log(x.length);

std = [1, 2, 3];
console.log(std);
console.log(std.length);

std.push(434, 343);
console.log("push");
console.log(std);

std.unshift(34, 34, 34);
console.log("unshift", std);

std[2] = 6;
console.log(std);

std[0] = 1;

console.log(std);
console.log(std.length);

// how to access a value from an array
console.log("pop", std.pop());
console.log(std);

console.log("shift", std.shift());

console.log(std);
console.log(std.length);
console.log(std[0]);
let arr = [];

let arr2 = arr;
console.log(arr, arr2);
console.log(arr == arr2);

arr = [34];
console.log(arr, arr2);

console.log(arr == arr2);

// objects
let obj = new Object();
let users = {};

obj = {
  strr: "value",
  objss: {},
  arrs: [],
  nums: 34,
  bools: true,
  strr: "new val",
  34: "dsfkl",
  "key jadoo": "lkjsdklf",
};

console.log(obj);

console.log(obj.strr);

console.log(obj["key jadoo"]);

users = {
  Hunter: {
    username: "Hunter",
    pass: "kljdflksjflksdjflksjflk",
  },
  Hunter2: {
    username: "Hunter2",
    pass: "kljdflksjflksdjflksjflk",
  },
  Hunter3: {
    username: "Hunter3",
    pass: "kljdflksjflksdjflksjflk",
  },
  Hunter4: {
    username: "Hunter4",
    pass: "kljdflksjflksdjflksjflk",
  },
};

// const res = prompt("username");

console.log(users);

users.Hunter3 = {
  ...users.Hunter3,
  //  username: "Hunter3",
  // pass: "kljdflksjflksdjflksjflk",
  occupation: "gammer",
};

users.xyz = { username: "xyz", pass: "ksdfksdfjsdklkldsfj" };
console.log(users);
