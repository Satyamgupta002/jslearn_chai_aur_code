class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}
//sometimes same person needs to be in other category so if we set some property in teacher they will also get set for User also

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const user1 = new Teacher("satyam","sss@gmail.com","123")
user1.addCourse()
const user2 = new User("rohan")
user1.logMe()

console.log(user1 instanceof User)
console.log(user1 instanceof Teacher)

// this inheritance gives derived class and its instance the excess of all properties and method of parent class , if you want any method to not permitted to its instance or derived class, write static before it.