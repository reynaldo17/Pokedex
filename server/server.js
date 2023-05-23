const express = require('express')


const app = express()

const PORT = process.env.PORT || 8001


app.get('/', (req, res) => {
    res.send("Hello from server")
})

app.listen(PORT, () => {
    console.log(`The app is running on port ${PORT}`)
})