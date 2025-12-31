//Async tasks can be db calls,network calls, cryto related work.

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async tast 1 completed");
        resolve() //this directly connected with .then we can also pass data with this.
    },1000)
})
promiseOne.then(function(){
    console.log("Promise 1 resolved")
})

//we can also make promised without variable
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 completed")
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 resolved")
})

//sometime data will also come like in db calls etc so after we pass it to then from resolve.

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        const user = {username: "satyam",email:"eer@gmail.com"}
        resolve(user)
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

//we also have reject also which will we use when we need to give error that task is not completed

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({user:"rohan",email:"34@gmail.com"})
        }else {
            reject("Error !! something went wrong")
        }
    },1000)
})

//then --> resolve and catch --> reject
//we can also chain .then as sometimes we want some data from while data coming in then
//.finally runs always it tells either the promise is resolved or rejected , just tells promise is over ,kuch to hua h
promiseFour
.then((user)=>{
    console.log(user)
    return user.user
})
.then((username) => console.log(username))
.catch((error)=> console.log(error)
)
.finally(()=> console.log("Promise 4 is either resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({name:"javascript",work:"backend"})
        }else {
            reject("Error in 5 !! something went wrong")
        }
    },1000)
})

// we can also consume the promise by async await instead of then and catch as we just want some time for the final verdict,but we have to use try and catch to get the error

async function consumePromiseFive(){
  try {
    const response =  await promiseFive
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
consumePromiseFive()

//writing another promise
async function getGithubUser(){
    try {
        const response = await fetch("https://api.github.com/users/Satyamgupta002")
        //fetch returns a promise
        const data = await response.json() //json conversion takes time
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// getGithubUser()

//we can also write it by then and catch
fetch("https://api.github.com/users/Satyamgupta002")
.then(function(response){
    return response.json()
})
.then((data)=>{ //not needed jus written as we needed data in json format we can also take the data from above then as it is.
    
    console.log(data)
})
.catch((error)=> console.log(error))