import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getMovies, retrieveMovies } from "../../store/movies";
import Question from '../../components/Question';
import Timer from "../../components/Timer";
import Input from "../../components/Input";

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
            <h1>Est ce que cet acteur joue dans le film ? </h1>
            <Question />
            <Input label="true" id="true" name="true" type="button" value="true"/>
            <Input label="false" id="false" name="false" type="button" value="false"/>
        </main>
    )
}

export default Game