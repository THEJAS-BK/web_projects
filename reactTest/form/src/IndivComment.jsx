export default function IndivComment({ info }) {
  return (
    <>
      <div className="comment">
        <p>
          <span>{info.remark}</span>
          &nbsp;
          <span>(rating = {info.rating})</span>
        </p>
        <p>username: {info.username}</p>
      </div>
      <br />
    </>
  );
}
