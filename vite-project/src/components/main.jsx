import MovieTitle from "./movieTitle"

export default function getMovies(props) {
    return (
        <>
            {console.log(props.movieList)};
            <MovieTitle title="Action" />
            <ul>
                <li>{props.movieList[0]}</li>
                <li>{props.movieList[1]}</li>
                <li>{props.movieList[2]}</li>
                <li>{props.movieList[3]}</li>
            </ul>
        </>
    )
}