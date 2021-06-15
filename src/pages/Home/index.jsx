import Play from '../../components/Play'

const Home = () => {
    const points = localStorage.getItem('points');
    return (
        <main className="container">
            { points === null ? 
                <>
                    <h1>Jouez à DaMovieQuiz. 60 secondes pour trouver un maximum de réponses</h1>
                    <Play />
                </>
                :
                <>
                    <h1>Vous avez { points } points. Rejouez ! </h1>
                    <Play />
                </>
            }
            
            
        </main>
    )
}

export default Home