const express = require('express')
const mongoose  = require('mongoose')
const user  = require('./routes/user')
const cors  = require('cors')

const app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.json({extended :true})) // this
app.use(express.urlencoded({extended :true}))
app.use(cors('*'))

app.use('/users', user) // routes after parsing json()

app.get('/', function(req, res){
    res.sendFile('//Users/marinosmattbh/Desktop/test bun/test/index.html');
 });


mongoose.connect("mongodb+srv://test:test123@cluster0.tu5ae6t.mongodb.net/?retryWrites=true&w=majority").then(console.log("db connectec")).catch(e=>console.log(e))


// app.listen(5000,()=>console.log("At http://localhost:5000"))
// var nsp = io.of('/my-namespace');
// var clients = 0
    var roomno = 1;
io.on('connection', function(socket){
   socket.join("room-"+roomno);
   //Send this event to everyone in the room.
   io.sockets.in("room-"+roomno).emit('connectToRoom', "You are in room no. "+roomno);
   socket.on('disconnect', function () {
       socket.leave("room-"+roomno); 
       console.log("leaved");
       });
})
    // clients++;
    // socket.emit('newclientconnect',{ description: 'Hey, welcome!'});
    // socket.broadcast.emit('newclientconnect',{ description: clients + ' clients connected!'})
    
    // socket.on('disconnect', function () {
    //    clients--;
    //    socket.broadcast.emit('newclientconnect',{ description: clients + ' clients connected!'})
    // });
    
http.listen(5000, function(){
    console.log('listening on *:5000');
 });