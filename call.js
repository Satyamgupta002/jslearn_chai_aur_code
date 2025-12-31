
//HERE WE CAN'T SET THE USERNAME BECAUSE ON CALLING SET USERNAME IT HAS CONTEXT OF SETUSERNAME FUNCTION, it is running but it is setting username in its context not createUser context as soon as this function ends all its variable are also gone so username not set for our createUser.
// function SetUsername(username){
//     // complex DB calls
//     this.username = username
//     console.log("called")
// }

// function createUser(username, email, password){
//     SetUsername(username)

//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai);

//to send the context we also pass "this" along with the parameter with call
function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    SetUsername.call(this,username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);