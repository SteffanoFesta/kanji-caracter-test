const request = require('request')

const url = 'https://kanjiapi.dev/v1/kanji/蛍'
const re = encodeURI(url)

request( re, function (error, response, body) {
  //console.log(body)
  const bodyJSON = JSON.parse(body)
  console.log(bodyJSON.meanings[0])
 // console.log(body.meanings['0'])
})