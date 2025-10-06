import { useState } from "react";

import "./ShowComments.css";
import Comments from "./Comments";
import IndivComment from "./IndivComment";
export default function ShowComments() {
  let [comment, setComment] = useState([
    {
      username: "MR x",
      remark: "This shit is useless",
      rating: "4",
    },
  ]);
  let addNewComment = (comment) => {
    setComment((currComment) => [...currComment, comment]);
    console.log(comment);
  };
  return (
    <div>
      <h1>Show comment</h1>
      {comment.map((val, idx) => (
        <IndivComment info={val} key={idx} />
      ))}
      <Comments addNewComment={addNewComment} />
    </div>
  );
}
