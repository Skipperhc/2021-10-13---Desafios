const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Você usou o get')
})

app.post('/', (req, res) => {
    res.send('Você usou o post')
})

app.put('/', (req, res) => {
    res.send('Você usou o put')
})

app.listen(3030)
