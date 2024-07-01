import GetMovies from "./components/main"

function App() {

  const movieList = [
    "Godfather",
    "Superman",
    "Batman",
    "Baki"
  ]
  return (

    <GetMovies movieList={movieList} title="Action" />

  )
}

export default App
