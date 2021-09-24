// let users = {};
// users = {
//   khan: {
//     username: "khan",
//     password: 1234,
//     adress: "sadiqabad ",
//     age: 25,
//   },
//   Ali: {
//     username: "Ali",
//     password: 123456,
//     adress: "lahore ",
//     age: 25,
//   },
//   hussain: {
//     username: "hussain",
//     password: 45678,
//     adress: "islamabad ",
//     age: 25,
//   },
// };
// console.log(users);
// // console.log(users[khan]) this find properties of khan
// let uName = prompt("enter user name");

// there should be an object
//  it should store some dummy users
let obj = {
  mubarak: {
    username: "mubarak",
    pass: "123",
  },
  abkr: {
    username: "abkr",
    pass: "123",
  },
  rehan: {
    username: "rehan",
    pass: "123",
  },
  shahid: {
    username: "shahid",
    pass: "123",
  },
};
// it should ask user for his username
//  and password.
let userInput = prompt("username");
console.log(obj[userInput]);
if (obj[userInput]) {
  let currUser = obj[userInput];
  let i = 0;
  while (i < 3) {
    // if username and password are correct
    //  the system should console.log his details
    let pass = prompt("Your pass?");
    if (pass !== currUser.pass) i++;
    else {
      console.log("your Details", currUser);
      break;
    }
  }
} else {
  let newuser = prompt("enter new user");
  if (obj[newuser]) {
    alert("already exists");
  } else {
    while (true) {
      let passnew = prompt("enter your pass");
      if (passnew) {
        let newobj = { username: newuser, pass: passnew };
        obj[newuser] = newobj;
        break;
      }
    }
  }
  console.log(obj);
}
// else the system should register new
// if username already exits
//  do not save that name
// user with username and password as
// required inputs
