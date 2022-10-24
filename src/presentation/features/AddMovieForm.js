import { useState } from "react";
import Style from "./MovieList.module.css";

const AddMovieForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addMovie = () => {
    console.log("Clicked");
    props.onSubmit(title, description);
  };

  const setTitleHandler = (value) => {
    console.log(value.target.value);
    setTitle(value.target.value);
  };
  const setDescriptionHandler = (value) => {
    console.log(value.target.value);
    setDescription(value.target.value);
  };

  return (
    <div className={Style.add_movie}>
      <label>Movie Title</label>
      <input type="text" onChange={setTitleHandler}></input>
      <label>Description</label>
      <input type="text" onChange={setDescriptionHandler}></input>
      <button onClick={addMovie}>Add Movie</button>
    </div>
  );
};
export default AddMovieForm;
