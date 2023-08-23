let express = require('express')
let bodyParser = require('body-parser')
const config = require('./config/config')
const { sequelize } = require('./models')

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

let port = process.env.PORT || config.port
sequelize.sync({force: false}).then(() => {
    app.listen(port, function () {
        console.log('server running on : ' + port)
    })
})

