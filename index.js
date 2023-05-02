const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const recipes = require('./data/data.json')

app.use(cors())

app.get('/', (req, res)=>{
    res.send('Hello! server running')
})

app.get('/recipes', (req, res)=>{
    res.send(recipes)

})



app.listen(port, ()=>{
    console.log(`My server running port: ${port}`)
})