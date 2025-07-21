import { useEffect, useState } from 'react'
import './App.css'
import MainContainer from './components/MainContainer'

interface Movie {
  id: number,
  title: string,
  poster_path: string | null,
  release_date: string,
  popularity: number,
  vote_average: number
}

function App() {
  const [name, setName] = useState("")
  const [movieData, setMovieData] = useState<Movie[] | null>(null)

  function addName(movieName: string) {
    if (movieName.trim() !== "") {
      setName(movieName)
    }
  }

  useEffect(() => {
    if (!name) return

    const fetchMovie = async (movieName: string) => {
      const API_KEY = "8e70e5ec2d29432ff553d6ec89881166"
      const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieName)}&language=pt-BR`

      try {
        const response = await fetch(URL)
        if (!response.ok) {
          console.log("Erro na requisição:", response.status)
          return;
        }
        const data = await response.json()

        const sortedResults = data.results.sort(
          (a: Movie, b: Movie) => b.popularity - a.popularity
        )

        setMovieData(sortedResults)
      } catch (error) {
        console.log("Erro ao buscar filme:", error)
      }
    }

    fetchMovie(name)
  }, [name])




  return (
    <div className={"app"}>
      <MainContainer setFunc={ addName } data={movieData} />
    </div>
  )  
}

export default App
