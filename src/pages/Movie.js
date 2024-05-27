import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const movieID = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieID}`)
      .then((r) => r.json())
      .then((movie) => {
        setMovie(movie);
      })
      .catch((error) => console.log(error));
  }, []);

  const genres = movie.genres;

  console.log(genres);

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movie.title}</h1>
        <p>{movie.time} mins</p>
        {genres && genres.map((genre) => <span key={genre}>{genre}</span>)}
      </main>
    </>
  );
}

export default Movie;
