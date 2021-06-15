import { Link } from "react-router-dom"

const Play = (props) => {
    return (
        <div>
            <Link to="/game">{props.text}</Link>
        </div>
    )
}

export default Play