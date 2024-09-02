const express = require('express')
const app = express()
const port = 1212

app.listen(port, (err)=>{
    if(!err) {
        console.log(`server is running on port ${port}`)
    }
})

app.get('/', (req, res)=>{
    res.send('Hello World')
})