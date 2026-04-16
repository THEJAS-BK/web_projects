import { useEffect, useState } from "react";
import { io } from "socket.io-client";
const socket =io("http://localhost:8080");
export default function App() {
  const [userId,setUserId]=useState("");
  const [roomId,setRoomId]=useState("")
 
  const handleTestClick=()=>{
    console.log("hello")
    socket.emit("join-room",1234,1111)

    socket.on("joined-room",(arg)=>{
      console.log(arg);
    })
  }
  return (
    <div>
      <button onClick={handleTestClick}>Click me</button>
    <input type="number" name="roomId" placeholder="roomId" onChange={(e)=>setRoomId(e.target.value)} />
    <input type="number" name="userId" placeholder="userId" onChange={(e)=>setUserId(e.target.value)} />



    <p>RoomId : {roomId}</p>
    <p>UserId : {userId}</p>
    </div>
  )
}
