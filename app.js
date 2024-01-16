const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);
const path = require('path');
app.use(express.static(path.resolve("./public")))

io.on("connection",(socket)=>{
    console.log("a user connected",socket.id)
    socket.on("message",(msg)=>{
        console.log(msg)
    })
})

app.get("/",(req,res)=>{

    return res.sendFile("index.html")
})


server.listen(3000, () => {
    console.log('listening on *:3000');
})