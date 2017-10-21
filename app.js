const express = require('express'),
app = express(),
port = process.env.PORT || 3001;



app.use(express.static('public'))

app.get('*',(req,res)=>{
	res.sendFile(__dirname + '/index.html');
})

app.listen(port,(err)=> console.log('listening on port 3000'));