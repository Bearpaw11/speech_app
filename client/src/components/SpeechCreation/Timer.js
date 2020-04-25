import React from 'react';
import Timer from 'react-compound-timer';

function Timing() {
<Timer
    initialTime={55000}
    direction="backward"
>
    {() => (
        <React.Fragment>
            <Timer.Days /> days
            <Timer.Hours /> hours
            <Timer.Minutes /> minutes
            <Timer.Seconds /> seconds
            <Timer.Milliseconds /> milliseconds
        </React.Fragment>
    )}
</Timer>

}
    export default Timing;