const rp = require('request-promise')
const BASE_URL = 'https://anapioficeandfire.com/api'

// Let's make a request to get some information about a character
var character = "brienne of tarth"

function constructURL (character) {
  return `${BASE_URL}/characters?name=${escape(character)}`
}

rp({
    uri: constructURL(character),
    json: true
}).then(function (result){
    var brienne = result[0]
    var uri = brienne.allegiances[0]
    var promise = rp({
        uri: uri,
        json: true
    }).then(function (allegiance){
        // return [brienne, allegiance]
        brienne.allegiances[0] = allegiance
        return brienne //this will give me brienne's object WITH allegiance[0] ALSO written out
    })
    return promise
}).then(function (result){
    console.log(result);
}).catch(function (error){
    console.error('error: ', error);
})
