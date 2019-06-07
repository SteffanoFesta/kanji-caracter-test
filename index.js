const path = require('path') // core module
const http = require('http')
const express = require('express')
const request = require('request')
const kanji = require('./kanji')
const app = express()
const server = http.createServer(app)  

const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '/public') 

app.use(express.static(publicDirectoryPath)) 


server.listen(port, () => {
    console.log(`server is up on port ${port}!`)
})

app.get('',  (req, res) => { 
    if (!req.query.caracter) {
            return res.send({
                error: 'You must provide an caracter!'
            })
    }
    kanji(req.query.caracter, (error, { stroke, meaning, grade, kun_readings, on_readings, name_readings, jlpt} = {}) => {
        if (error) {
            return res.send({ error }) 
        }
        res.send({
            kanji: req.query.caracter,
            stroke,
            meaning,    
            grade,
            kun_readings,
            on_readings,
            name_readings,
            jlpt
                                
        })        
    })
})