import MovieTitle from "./movieTitle"

export default function getMovies(props) {
    return (
        <>
            {console.log(props.movieList)}
            <MovieTitle title={props.title} />
            <ul>
                <li>{props.movieList[0]}</li>
                <li>{props.movieList[1]}</li>
                <li>{props.movieList[2]}</li>
                <li>{props.movieList[3]}</li>
            </ul>
        </>
    )
}