const express = require('express'),
app = express();


app.use(express.static('public'))

app.get('*',(req,res)=>{
	res.sendFile(__dirname + '/index.html');
})

app.listen(3000,(err)=> console.log('listening on port 3000'));