var promise = new Promise(function (resolve, reject) {
    // var random = Math.round(Math.random()) //random is a number between 0 and 1, and round rounds it. so i'm getting back either 0 or 1.
    var random = true
    if (random) {
      resolve(10)
    } else {
      reject('I did not resolve :( ' + random)
    }
    resolve()
}).then(function (result) {
    return new Promise(function (resolve, reject) {
        resolve(result * 2) //this tells the comp to go to a success for this new Promise.
        //reject('too bad') //this tells the comp to go to an error for this promise. everytime. if its not commented
        }).catch(function(error){
            console.error('Inner error!', error);
        })
}).then(function (result){
    console.log('Inner success!', result);
}).catch(function (error) {
    console.error('Shields up, red alert: ', error);
})

console.log(promise);
