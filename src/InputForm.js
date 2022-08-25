import "./App.css";
import React, { useState } from "react";

const InputForm = () => {
  let [title, setTitle] = useState("");
  const [valid, setValid] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
  
  };

  const onChangeText = (value) => {
    setTitle({
      title: value.target.value,
    });
   
    if (value.target.value.length===0) {
     setValid({
      valid: false,
     })
    } else {
      setValid({
        valid:true,
      });
    }
    console.log(valid);
    console.log(value.target.value.length);
    console.log(title);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div className={`main-body__style ${valid? 'invalid': ''}`}>
        <label>
          Enter Title
        </label>
        <input type="text" onChange={onChangeText}></input>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default InputForm;
