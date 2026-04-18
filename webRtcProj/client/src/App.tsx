import {useState,useRef } from "react";
import {socket} from "./socket"
export default function App() {
  const localVideoRef=useRef(null);
  const remoteVideoReg=useRef(null);

  const peerConnection=useRef(null);
  const localstream = useRef(null)
  const remoteSocketId=useRef(null);

  const configuration={
    iceServers:[{url:"stun:stun.l.google.com:19302"}]
  }
 
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
