import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { useEffect, useState } from "react";
import Style from "./MovieList.module.css";


const MovieList = () => {

    const [isLoading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    let content = "Please Fetch Movies";

    async function fetchData() {
        setLoading(true);
        try{
        const response = await fetch("https://swapi.dev/api/films/");
        const data = await response.json();
        console.log("Loading....");
        if (response.ok) {
            const transformedMovieList = data.results.map((item) => {
                return {
                    id: item.episode_id,
                    title: item.title,
                    description: item.opening_crawl
                };
            });

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
    }catch (error){
        console.log(error);
    }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return <div className={Style.main_container}>
        <button className={Style.button} onClick={fetchData}>Fetch Movies</button>
        {isLoading && <p>Loading....</p>}
        {!isLoading && movies.length > 0 && movies.map((item) => {
            return <div className={Style.movie_card}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
            </div>;
        })}

    </div>;
}

export default MovieList;