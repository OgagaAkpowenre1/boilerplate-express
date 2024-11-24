let express = require('express');
const res = require('express/lib/response');
let app = express();
const absolutePath = __dirname + '/views/index.html'
const assetsAbsolutePath = __dirname + '/public'
app.get('/', (req, res) => {
    res.sendFile(absolutePath)
})
app.use('/public', express.static(assetsAbsolutePath))

































 module.exports = app;
