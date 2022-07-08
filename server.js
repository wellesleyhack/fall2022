const express = require('express')
const app = express()
var pub_dir = require('path').join(__dirname, 'public');
app.use(express.static(pub_dir));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000, function() {
    console.log('listening on 3000')
})