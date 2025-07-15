import { useState } from "react";
import { Link } from "react-router-dom";

interface MainContainerProps {
  setFunc: (name: string) => void;
  data: Movie[] | null;
}

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  popularity: number
  vote_average: number;
}

function MainContainer({ setFunc, data }: MainContainerProps) {
  const [name, setName] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div className="main-container">
        <div className="input">
          <h1>Encontre um filme!</h1>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="movie-name"
            id="movie-name"
          />
          <button
            onClick={() => {
              setFunc(name);
              setClicked(true);
            }}
          >
            Pesquisar
          </button>
        </div>

        <div className="output">
          {clicked && (
            <div className="movies">
              {data && data.length > 0 ? (
                data.map((movie) => (
                  <div key={movie.id} className="movie">
                    {movie.poster_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={movie.title}
                      />
                    )}
                    <div className="info">
                      <h3>{movie.title}</h3>
                      <p>Data de lançamento: {movie.release_date}</p>
                      <p>Nota: {movie.vote_average.toFixed(2)}</p>
                      <Link to={`/details/${movie.id}`}>
                        <button>Ver detalhes</button>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p>Nenhum resultado encontrado.</p>
              )}
            </div>
          )}
        </div>

      </div>
    </>
  );
}

export default MainContainer;
