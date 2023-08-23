let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

require('./routes')(app)

app.get('/status', function (req, res){
    res.send('hello nodejs server')
})

app.get('/hello/:person', function (req,res) {
    console.log('hello -' + req.params.person)
    res.send('say hello with ' + req.params.person)
})

let port = 8081
app.listen(port, function () {
    console.log('server running on' + port)
})
