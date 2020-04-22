import React from "react";

function Speeches() {
    const script=document.createElement("script");
    script.src="./voice.js"
    
    return (
        <div className="container shadow p-3 mb-5 bg-white rounded">
                <div className="col-4 offset-4">
                    <form action="https://www.google.com/search" method="get" id="search-form" target="_blank">
                        <input type="text" placeholder="Search Google" autoComplete="off" autoFocus />
                    </form>
                </div>
    
        <div className="container">
            <br></br> Press Start and begin speaking! <br></br>

            <button type="button" className="btn btn-info">Start</button>
            
            <br></br><br></br>
           
            <label htmlFor="validationTextarea">Transcription area</label>

                <textarea className="form-control is-invalid" id="textarea" placeholder="Your message will appear here" required/>
                
                <br></br>
               
                <button type="button" className="btn btn-dark" id="save">Save Recording</button>
                <br></br><br></br>

                <textarea className="form-control is-invalid" id="textresults" placeholder="Your results will display here" required/>        
   
                <br></br>
                
                <button type="button" className="btn btn-primary">View Speeches</button>
        </div>
    </div>
)
}

export default Speeches;