// class User{
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `121${this.password}@#`
//     }

//     changeUsername(){
//         return this.username.toUpperCase()
//     }
// }

// const user1 = new User("satyam","eee@gamil.com","rtyj8")
// console.log(user1)
// console.log(user1.encryptPassword());
// console.log(user1.changeUsername());


//behind the scene

function User(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encryptPassword = function () {
    return `121${this.password}@#`
} 
User.prototype.changeUsername = function() { return this.username.toUpperCase()}

const user2 = new User('satyam','eee@gamil.com','rtyj')
console.log(user2)
console.log(user2.encryptPassword())
console.log(user2.changeUsername())




