import  express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors"
import e from "express";

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
        socket.to(roomId).emit("user-joined",UserId);
    })

    socket.on("offer",({offer,to})=>{
        io.to(to).emit("offer",{
            offer,
            from:socket.id
        })
    })

      socket.on("answer", ({ answer, to }) => {
    io.to(to).emit("answer", {
      answer,
      from: socket.id,
    });
  });
})

httpServer.listen(8080,()=>{
    console.log("server is running on port 8080")
})