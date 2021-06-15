import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";

const Timer = () => {
    const [seconds, setSeconds] = useState(60);
    const history = useHistory();
    useEffect(() => {
        if (seconds > 0) {
          setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
          setSeconds('BOOOOM!');
          history.push('/');
        }
    });

    return (
        <div className="Timer">
            <div>
                {seconds}
            </div>
        </div>
    )
}

export default Timer