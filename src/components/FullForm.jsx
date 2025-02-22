import { useState } from "react";

const FullForm = () => {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  function formDataChange(e) {
    let fieldName = e.target.name;
    let newValue = e.target.value;

    setFormData((currValue) => {
      currValue[fieldName] = newValue;
      return { ...currValue };
    });
  }

  let submitChange = (event) => {
    event.preventDefault();
    console.log(formData);

    setFormData({
      fullName: "",
      userName: "",
      password: "",
    });
  };
  return (
    <form onSubmit={submitChange}>
      <label htmlFor="fullName">FullName : </label>
      <input
        type="text"
        id="fullName"
        value={formData.fullName}
        name="fullName"
        onChange={formDataChange}
      />
      <br />
      <br />
      <label htmlFor="userName">UserName : </label>
      <input
        type="text"
        id="userName"
        value={formData.userName}
        name="userName"
        onChange={formDataChange}
      />
      <br />
      <br />
      <label htmlFor="password">Password : </label>
      <input
        type="password"
        id="password"
        value={formData.password}
        name="password"
        onChange={formDataChange}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FullForm;
