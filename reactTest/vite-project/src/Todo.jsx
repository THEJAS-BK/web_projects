import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Todo() {
  let [getInp, setGetInp] = useState("");
  let [arrVal, setArrVal] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  function getInpVal(ev) {
    setGetInp(ev.target.value);
  }
  function getArr() {
    setArrVal((curInp) => {
      return [...curInp, { task: getInp, id: uuidv4(), isDone: false }];
    });
    setGetInp("");
  }
  function deleteItem(id) {
    setArrVal((val) => val.filter((va) => va.id != id));
  }
  function toUpperVal() {
    setArrVal(
      arrVal.map((val) => {
        return { ...val, task: val.task.toUpperCase() };
      })
    );
  }
  function uppercaseOne(id) {
    setArrVal(
      arrVal.map((val) => {
        if (val.id == id) {
          return { ...val, task: val.task.toUpperCase() };
        } else {
          return val;
        }
      })
    );
  }
  function markOneDone(id) {
    setArrVal(
      arrVal.map((val) => {
        if (val.id == id) {
          return {
            ...val,
            isDone: true,
          };
        } else {
          return val;
        }
      })
    );
  }

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Add tasks"
        onChange={getInpVal}
        value={getInp}
      />
      <button onClick={getArr}>Submit</button>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h2>Todays Tasks</h2>
      <ul>
        {arrVal.map((val) => (
          <li
            key={val.id}
            style={val.isDone ? { textDecorationLine: "line-through" } : {}}
          >
            {val.task}
            &nbsp;&nbsp;
            <button onClick={() => deleteItem(val.id)}>Delete</button>
            <button onClick={() => uppercaseOne(val.id)}>uppercase one</button>
            <button onClick={() => markOneDone(val.id)}>mark Done</button>
          </li>
        ))}
      </ul>
      <button onClick={toUpperVal}>TO uppercase</button>
    </div>
  );
}
