const React = require('react')
const ms = require('pretty-ms')

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            isOn: false,
            start: 0
        }
        
        this.stopTimerAndRec = this.stopTimerAndRec.bind(this);
        this.startTimerAndRec = this.startTimerAndRec.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    startTimerAndRec() {
        this.startTimer();
        this.props.recognition.start();
    }

    stopTimerAndRec() {
        this.stopTimer();
        this.props.recognition.stop();
    }

    startTimer() {
        this.setState({
            isOn: true,
            time: this.state.time,
            start: Date.now() - this.state.time
        })

        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1000);
    }

    stopTimer() {
        this.setState({ isOn: false });
        clearInterval(this.timer);
    }
    
    resetTimer() {
        this.setState({ time: 0, isOn: false });
    }
    
    render() {
            
        let start = (this.state.time == 0) ?
            <button onClick={this.startTimerAndRec}>Start</button> :
            null
        
        let stop = (this.state.time == 0 || !this.state.isOn) ?
            null :
            <button onClick={this.stopTimerAndRec}>Stop</button>
        
        let resume = (this.state.time == 0 || this.state.isOn) ?
            null :
            <button onClick={this.startTimer}>Resume</button>
        
        let reset = (this.state.time == 0 || this.state.isOn) ?
            null :
            <button onClick={this.resetTimer}>Reset</button>
        
        return (
            <div>
                <h3>Timer:</h3>
                    <p id="time">{ms(this.state.time)}</p>
                        {start}
                        {/* {resume} */}
                        {stop}
                        {reset}
            </div>
        )
    }
}
module.exports = Timer;