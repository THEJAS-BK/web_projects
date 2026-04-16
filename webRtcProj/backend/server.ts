import  express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors"

const app = express();
app.use(cors(
   { origin:"http://localhost:3000"}
)); 


const httpServer = createServer(app);
const io = new Server(httpServer,{
     cors: {
      origin: "http://localhost:5173",
      methods:["GET", "POST"],
      credentials: true,
    },
});

io.on("connection",(socket)=>{
    console.log("just joined                           ",socket.id);

    socket.on("join-room",(roomId,UserId)=>{
        socket.join(roomId);
        io.to(roomId).emit("joined-room",UserId);
    })
})

httpServer.listen(8080,()=>{
    console.log("server is running on port 8080")
})