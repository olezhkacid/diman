const express = require('express')

const app = express()

app.listen(8000, () => {
    console.log('Im listening')
})

app.get('/hello', (req, res) => {
    res.send('Hello im server nahuy')
})