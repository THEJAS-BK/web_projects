import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
  });
  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };
  let handleChange = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div>
        <form action="" onSubmit={handleChange}>
          <label htmlFor="FullName">Full Name</label>
          <input
            type="text"
            placeholder="Enter name"
            name="fullName"
            id="FullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
