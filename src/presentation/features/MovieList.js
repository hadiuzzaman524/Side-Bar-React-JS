import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { useEffect, useState } from "react";
import AddMovieForm from "./AddMovieForm";
import Style from "./MovieList.module.css";
import app from "./FirebaseConfiguration";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

//https://react-http-8edde-default-rtdb.firebaseio.com/
const db = getFirestore(app);

const MovieList = () => {
  const [isLoading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  let content = "Please Fetch Movies";
  const [addMovieLoading, setMovieLoading] = useState(false);

  async function fetchData() {
    const querySnapshot = await getDocs(collection(db, "movies"));
    const newMovieList = [];
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      newMovieList.push(doc.data());
    });
    setMovies(newMovieList);
    console.log(MovieList);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function addMovieInfo(title, description) {}

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
              <h1>{item.name}</h1>
              <p>{item.description}</p>
            </div>
          );
        })}
    </div>
  );
};

export default MovieList;
