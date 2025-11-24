import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      navigate("/About");
    },1000)
  },[navigate])
  return<Navigate to="/About"/>;
}
