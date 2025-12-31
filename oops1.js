
function User(username,loginCount,isLoggedIn){
    this.username = username // lhs is the variable of function and rhs is the parameter came
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`hii good morning ${this.username} `)
    }
    return this
}

//WHEN CONTEXT IS SAME
// const user1 = User("satyam",13,true)
// console.log(user1)
// const user2 = User("sam",34,false)// it override the values because context is same
// console.log(user1) 

//WHEN CONTEXT IS DIFFERENT
const user1 = new User("satyam",13,true)
console.log(user1)
const user2 = new User("sam",34,false)// it override the values because context is same
console.log(user1) 
console.log(user1.greeting())
console.log(user1.constructor)