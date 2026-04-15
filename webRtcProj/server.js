const express = require("express")
const app = express();
const {createServer}=require("node:http");
const path = require("node:path");
const server=createServer(app)

const {Server}=require("socket.io")
const io=new Server(server)

const {v4:uuidV4}=require("uuid")


app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))

io.on("connection",(socket)=>{
    socket.on("join-room", (roomId,userId) => {
        console.log(roomId,userId)
        socket.join(roomId);
        socket.to(roomId).emit("user-connected",userId)
    });
});

app.get("/",(req,res)=>{
    res.redirect(`/${uuidV4()}`)
})

app.get("/:room", (req, res) => {
    res.render("room", { roomId: req.params.room });
});


server.listen(8080,()=>{
    console.log("server started")
})