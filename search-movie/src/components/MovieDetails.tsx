import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './MovieDetails.css'

interface MovieDetailsData {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    runtime: number;
    poster_path: string | null;
    vote_average: number;
}

function MovieDetails() {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<MovieDetailsData | null>(null);

    useEffect(() => {
        if (!id) return;

        const API_KEY = "8e70e5ec2d29432ff553d6ec89881166";
        const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`;


        fetch(URL)
            .then((res) => res.json())
            .then((data) => setMovie(data))
            .catch((err) => console.error(err));
    }, [id]);

    if (!movie) return <p>Carregando...</p>;

    return (
        <div className="details-container">
            <div className="movie-details">
                {movie.poster_path && (
                    <img
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={movie.title}
                    />
                )}
                <div className="info">
                    <h2>{movie.title}</h2>
                    <p><strong>Data de lançamento:</strong> {movie.release_date}</p>
                    <p><strong>Duração:</strong> {movie.runtime} min</p>
                    <p><strong>Nota:</strong> {movie.vote_average.toFixed(2)}</p>
                    <p className="sinopse"><strong>Sinopse:</strong> {movie.overview}</p>
                    <Link to="/">
                        <button>Voltar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
