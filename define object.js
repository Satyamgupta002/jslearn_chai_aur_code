const user = {
    name: "Satyam",
    id: 34,
    isLoggedIn: true
}

//writebale,iterable,configurable true
console.log(Object.getOwnPropertyDescriptor(user,"name"))
user.name = "Rohan"  //you can change as writable is true
console.log(user) 

//define property
Object.defineProperty(user,"name",{
    writable:false,
    enumerable:false //it will not come when we iterate this object
})

user.name = "Sanat"
console.log(user)  // not changed name

for(let [key,value] of Object.entries(user)){
    console.log(`${key} : ${value}`)
} // will not get name in this loop




