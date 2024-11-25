const res = require('express/lib/response');
let express = require('express');
let bodyParser = require('body-parser')

require('dotenv').config()
let app = express();
const absolutePath = __dirname + '/views/index.html'
const assetsAbsolutePath = __dirname + '/public'
app.get('/', (req, res) => {
    res.sendFile(absolutePath)
})
app.use('/public', express.static(assetsAbsolutePath))


// app.get('/json', (req, res) => {
//     if(process.env.MESSAGE_STYLE === 'uppercase'){
//         res.json({"message": "HELLO JSON"})
//     } else {
//         res.json({"message": "Hello json"})
//     }
// })

// function mware(req, res, next){
//     console.log(`${req.method} ${req.path} - ${req.ip}`)
//     next()
// }

// app.use(mware)

// function mware(req, res, next){
//     req.time = new Date().toString()
//     next()
// }

// app.get('/now',  (req, res, next) => {
//     req.time = new Date().toString()
//     next()
// }, (req, res) => {
//     console.log(req.time)
//     res.json({"time": `${req.time}`})
// })

// app.get('/:word/echo', (req, res) => {
//     res.json({"echo":`${req.params.word}`})
// })

app.use(bodyParser.urlencoded({extended: false}))


app.route('/name').get((req, res) => {
    res.json({"name": `${req.query.first} ${req.query.last}`})
}).post((req, res)=> {
    res.json({"name": `${req.body.first} ${req.body.last}`})
})





















 module.exports = app;
