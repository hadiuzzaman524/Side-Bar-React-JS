import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { useEffect, useState } from "react";
import AddMovieForm from "./AddMovieForm";
import Style from "./MovieList.module.css";

//https://react-http-8edde-default-rtdb.firebaseio.com/
const MovieList = () => {
  const [isLoading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  let content = "Please Fetch Movies";
  const [addMovieLoading, setMovieLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(
        "https://react-http-8edde-default-rtdb.firebaseio.com/movies.json"
      );
      const data = await response.json();
      console.log("Loading....");
      if (response.ok) {
        const transformedMovieList = [];

        for (const key in data) {
          transformedMovieList.push({
            id: key,
            title: data[key].title,
            description: data[key].description,
          });
        }

        setMovies(transformedMovieList);
        if (transformedMovieList.length < 1) {
          content = "No Movie Found";
        }
      } else {
        content = "Could not fetch the data";
        throw Error("Something went wrong!!");
      }
      setLoading(false);
      console.log("Loaded");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function addMovieInfo(title, description) {
    setMovieLoading(true);
    const response = await fetch(
      "https://react-http-8edde-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify({
          id: Date(),
          title: title,
          description: description,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    setMovieLoading(false);
  }

  return (
    <div className={Style.main_container}>
      <AddMovieForm onSubmit={addMovieInfo}></AddMovieForm>
      {addMovieLoading && <p>Loading....</p>}
      <button className={Style.button} onClick={fetchData}>
        Fetch Movies
      </button>
      {isLoading && <p>Loading....</p>}
      {!isLoading &&
        movies.length > 0 &&
        movies.map((item) => {
          return (
            <div className={Style.movie_card}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          );
        })}
    </div>
  );
};

export default MovieList;
