import { useState, useRef, useEffect } from "react";
import { socket } from "./socket";
export default function App() {
  const [remoteSDP, setRemoteSDP] = useState("");
  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);

  const localStream = useRef<MediaStream | null>(null);
  const peerConnection = useRef<RTCPeerConnection | null>(null);

  const configuration: RTCConfiguration = {
    iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
  };

  const createOffer = async () => {
    if (!peerConnection.current) return;

    try {
      const offer = await peerConnection.current.createOffer();

      await peerConnection.current.setLocalDescription(offer);

      console.log("=== SDP OFFER ===");
      console.log(JSON.stringify(offer, null, 2));
    } catch (err) {
      console.error("Error creating offer:", err);
    }
  };

  const handleReceiveOffer = async () => {
    if (!peerConnection.current) return;

    try {
      const offer = JSON.parse(remoteSDP);

      await peerConnection.current.setRemoteDescription(offer);

      const answer = await peerConnection.current.createAnswer();
      await peerConnection.current.setLocalDescription(answer);

      console.log("=== SDP ANSWER ===");
      console.log(JSON.stringify(answer, null, 2));
    } catch (err) {
      console.error("Error handling offer:", err);
    }
  };

  const handleReceiveAnswer = async () => {
    if (!peerConnection.current) return;

    try {
      const answer = JSON.parse(remoteSDP);

      await peerConnection.current.setRemoteDescription(answer);

      console.log("Answer applied successfully");
    } catch (err) {
      console.error("Error handling answer:", err);
    }
  };

  const handleReceiveIce = async () => {
  if (!peerConnection.current) return;

  try {
    const candidate = JSON.parse(remoteSDP);
    await peerConnection.current.addIceCandidate(candidate);

    console.log("ICE candidate added");
  } catch (err) {
    console.error("Error adding ICE:", err);
  }
};

  useEffect(() => {
    const initMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        localStream.current = stream;

        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }

        //create peer connection
        peerConnection.current = new RTCPeerConnection(configuration);
        //ice candidates
        peerConnection.current.onicecandidate = (event) => {
          if (event.candidate) {
            console.log("=== ICE CANDIDATE ===");
            console.log(JSON.stringify(event.candidate));
          }
        };
        //add tracks
        stream.getTracks().forEach((track) => {
          peerConnection.current?.addTrack(track, stream);
        });

        //listen for remote streams
        peerConnection.current.ontrack = (event: RTCTrackEvent) => {
          console.log("Remote stream received");

          if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = event.streams[0];
          }
        };
        console.log("peer Connction ready");
      } catch (err) {
        console.error("Error accessing media devices:", err);
      }
    };
    initMedia();
    return () => {
      localStream.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  return (
    <div>
      <h2>local</h2>
      <video ref={localVideoRef} autoPlay muted playsInline width={400}></video>

      <h2>Remote</h2>
      <video ref={remoteVideoRef} autoPlay playsInline width={400}></video>

      <textarea
        placeholder="Paste SDP here"
        value={remoteSDP}
        onChange={(e) => setRemoteSDP(e.target.value)}
        rows={10}
        cols={50}
      />

      <br />

      <button onClick={createOffer}>Create Offer</button>
      <button onClick={handleReceiveOffer}>Receive Offer</button>
      <button onClick={handleReceiveAnswer}>Receive Answer</button>
      <button onClick={handleReceiveIce}>Add ICE</button>
    </div>
  );
}
