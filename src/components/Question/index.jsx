import { useEffect } from "react";
import './index.scss';

const Question = (props) => {
    useEffect(()=>{
    }, [])
    return (
        <>
        <div class="flex">
        <div>
            <img src={"https://image.tmdb.org/t/p/original/" + props.movie.poster_path } alt="" />
            <p>{props.movie.title}</p>
        </div>
        <div>
            <img src={"https://image.tmdb.org/t/p/original/" + props.actor.profile_path } alt="" />
            <p>{props.actor.name}</p>
        </div>
        </div>
        </>
    )
}


export default Question