import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getMovies } from "../../store/movies";
import Question from '../../components/Question';
import Timer from "../../components/Timer";
import Button from "../../components/Button";
import { useState } from "react";
import { useHistory } from "react-router";

const Game = () => {
    const movies = useSelector(getMovies);
    const [movie, setMovie] = useState();
    const [cast, setCast] = useState();
    const [actor, setActor] = useState();
    const history = useHistory();

    useEffect(() => {
        localStorage.setItem('points', 0);
        generateRandomeMovie();
    },[])

    const generateRandomeMovie = () => {
            let maxNumber = movies[0].results.length;
            let index = Math.floor(Math.random() *  maxNumber);
            setMovie(movies[0].results[index]);
            fetch(`https://api.themoviedb.org/3/movie/${movies[0].results[index].id}/credits?api_key=7ea5f490261a949e52930517e1b4657c`, {
                method: 'GET',
            })
            .then( response => response.json())
            .then( data => {
                setCast(data.cast);
                generateRandomActor(data.cast);
            })
    }

    const generateRandomActor = (cast) => {
        let maxNumber = cast.length;
        let index = Math.floor(Math.random() *  maxNumber);
        setActor(cast[index]);
    }

    const checkAnswerTrue = () => {
        let actorId = actor.id;
        for (var i = 0; i < cast.length; i++) {
            if (cast[i].id === actorId) {
              let points = parseInt(localStorage.getItem('points'));
              localStorage.setItem('points', points + 1)
              generateRandomeMovie();
              break;
            }
          }
    }

    const checkAnswerFalse = () => {
        let actorId = actor.id;
        let answer;
        for (var i = 0; i < cast.length; i++) {
            if (cast[i].id === actorId) {
              answer = false;
              break;
            }else{
                answer = true;
            }
        }
        if(answer === true){
            let points = parseInt(localStorage.getItem('points'));
                localStorage.setItem('points', points + 1)
                generateRandomeMovie();
        }else{
            history.push('/');
        }
    }

    return (
        <main className="container">
            <Timer />
            <h1>Est ce que cet acteur joue dans le film ? </h1>
            { movie != null && actor != null ?
                <>
                <Question movie={movie} actor={actor}/>
                </>
                :
                <>
                </>
            }
            <Button label="true" id="true" name="true" type="button" value="true"  onClick={checkAnswerTrue} />
            <Button label="false" id="false" name="false" type="button" value="false" onClick={checkAnswerFalse} />
        </main>
    )
}

export default Game