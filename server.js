var express = require('express');
var app = express();

require('./server/config/routes')(app);
app.use(express.static(__dirname + "/public/public/dist/public"));

app.listen(6789, function(){
    console.log('listening on port 6789');
})