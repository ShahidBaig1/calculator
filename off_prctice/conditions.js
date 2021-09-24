let PM = "abc";
console.log(PM);

if (1 > 2) {
  console.log("if stm ext", PM);
  // let PM = "abc";
} else {
  console.log("else stm ext", PM);
  if (PM === "abc") {
    let PM = "xyz";
    console.log("else stm ext", PM);

    let abc = "abc";
  }
  // console.log(abc);
  // let PM = "xyz";
}

console.log(PM);

if (true && " ") {
  console.log("if stm ext");
} else {
  console.log("else stm ext");
}

let userType = "";

if (userType === "admin") {
  console.log("RES \n CREATE, DELETE, READ, UPDATE");
} else if (userType === "student") {
  console.log("RES \n CREATE,  READ");
} else {
  console.log("unAuth");
}

let subMarks = 100;

// if the type of user is an admin give him access to create ,read, delete and upadte file

// if the type of user is std give him access to create and read files
