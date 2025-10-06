import { useState, useEffect } from "react";
export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);
  let Incount = () => {
    setCountx((currCount) => currCount + 1);
  };
  let Incounted = () => {
    setCounty((currCount) => currCount + 1);
  };
  useEffect(
    function sideEffect() {
      console.log("this is side component");
    },
    [countx]
  );
  return (
    <div>
      <h3>Count = {countx}</h3>
      <button onClick={Incount}>Increase count</button>
      <h3>Count = {county}</h3>
      <button onClick={Incounted}>Increase count</button>
    </div>
  );
}
