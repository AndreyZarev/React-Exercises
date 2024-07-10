import GetMovies from "./components/main"
import { useState } from "react"
const [count, setCount] = useState(0)
function App() {

  const movieList = [
    "Godfather",
    "Superman",
    "Batman",
    "Baki",
    count,
    setCount
  ]
  return (
   
    <GetMovies movieList={movieList} title="Great movies" />

  )
}

export default App
