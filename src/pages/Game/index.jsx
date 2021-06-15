import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getMovies, retrieveMovies } from "../../store/movies";
import Question from '../../components/Question';
import Timer from "../../components/Timer";


const Game = () => {
    const dispatch = useDispatch();
    const movies = useSelector(getMovies);

    useEffect(() => {
        if (!movies.length) {
          dispatch(retrieveMovies());
        }
    })
    return (
        <main className="container">
            <Timer />
            <Question />
        </main>
    )
}

export default Game