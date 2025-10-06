import { useFormik } from "formik";
export default function Comments({ addNewComment }) {
  // let [formData, setFormData] = useState({
  //   username: "",
  //   remark: "",
  //   rating: "",
  // });
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      remark: "",
      rating: "",
    },
    validate,
    onSubmit: (values) => {
      addNewComment(values);
    },
  });
  // let handleInputChange = (ev) => {
  //   setFormData((currData) => {
  //     return { ...currData, [ev.target.name]: ev.target.value };
  //   });
  // };
  // let handleSubmit = (ev) => {
  //   addNewComment(formData);
  //   ev.preventDefault();
  //   setFormData({
  //     username: "",
  //     remark: "",
  //     rating: "",
  //   });
  // };
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Enter name</label>
        <input
          type="text"
          placeholder="Enter name"
          name="username"
          id="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        {formik.errors.username ? <div>{formik.errors.username}</div> : <br />}
        <label htmlFor="textArea">Enter comment</label>
        <textarea
          style={{ backgroundColor: "black", color: "white" }}
          name="remark"
          id="textArea"
          rows={5}
          cols={29}
          placeholder="Enter commet"
          value={formik.values.textArea}
          onChange={formik.handleChange}
        ></textarea>
        <label htmlFor="rating">Enter rating(1-5)</label>
        <input
          type="number"
          placeholder="give rating"
          min={1}
          max={5}
          name="rating"
          id="rating"
          value={formik.values.rating}
          onChange={formik.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
