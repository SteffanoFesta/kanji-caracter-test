const request = require('request')

// const $messageForm = document.querySelector('#message-form')
// const $messageFormInput = $messageForm.querySelector('input')
// const $messageFormButton = $messageForm.querySelector('button')
// const resposta = document.querySelector('#resposta')

// const url = 'https://kanjiapi.dev/v1/kanji/蛍'
// const re = encodeURI(url)

const kanji = (caracter, callback) => {
    const url = 'https://kanjiapi.dev/v1/kanji/' + caracter
    const re = encodeURI(url)


    request(re,  (error, {body}) =>{
        if (error) {
            callback('Unable to connect to location services!', undefined)
        }
        const bodyJSON = JSON.parse(body)
        callback(undefined, {
            kanji: bodyJSON.kanji,
            grade: bodyJSON.grade,
            kun_readings:bodyJSON.kun_readings,
            on_readings:bodyJSON.on_readings,
            name_readings:bodyJSON.name_readings,
            jlpt:bodyJSON.jlpt,
            stroke: bodyJSON.stroke_count,
            meaning: bodyJSON.meanings
        })
      })
}

module.exports = kanji






