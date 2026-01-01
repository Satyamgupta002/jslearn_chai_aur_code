class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    get password()
    {
        return this._password+"###"
    }
    set password(value){
        this._password = "@@@" + value
    }
}


const user1 = new User("satyam","dip@gmail.com","rtyj8")
console.log(user1.password)
