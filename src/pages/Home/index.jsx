import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Play from '../../components/Play'
import { getMovies, retrieveMovies } from '../../store/movies';

const Home = () => {
    const points = localStorage.getItem('points');
    const dispatch = useDispatch();
    const movies = useSelector(getMovies);
    useEffect(() => {
        if (!movies.length) {
          dispatch(retrieveMovies());
        }  
    })
    return (
        <main className="container">
            { points === null ? 
                <>
                    <h1>Jouez à DaMovieQuiz. 60 secondes pour trouver un maximum de réponses</h1>
                    <Play text="play"/>
                </>
                :
                <>
                    <h1>Vous avez { points } points. Rejouez ! </h1>
                    <Play text="play again"/>
                </>
            }
            
            
        </main>
    )
}

export default Home