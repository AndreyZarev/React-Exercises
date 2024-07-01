import GetMovies from "./components/main"

function App() {

  const movieList = [
    "Godfather",
    "Superman",
    "Batman",
    "Baki"
  ]
  return (

    <GetMovies movieList={movieList} />

  )
}

export default App
