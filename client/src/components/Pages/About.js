
import React from "react";
import Team from "../Team/index.js";
import visiongraphic from "../Layouts/ContactCSS/visionwave.png"

function About() {
    return (
      <div className="containerDiv">
          <div className="visionDiv">
          <img className="visionHeader" src={visiongraphic} alt="Vision"></img>
            
            <p>
                Speech Therapy was created by David Coons, Melanie Rogoff,
                Chris Behrens, and Shauna McGrail in order to address the need of having a single 
                app that will allow users to enhance their public speaking skills.
            </p>

            <p>
                Speech Therapy provides a fun, user-friendly platform that 
                allows for the seamless recording of speeches, access to in-depth analysis
                containing information about speech timing and filler word counts, as well as an
                audio playback/annotation feature. 
            </p>

            <p>
                It is our hope that Speech Therapy will be used by individuals 
                throughout the world in order to become better public speakers, which will in 
                turn allow them to increase their earning potential, as well as their 
                overall confidence and performance in interpersonal and occupational situations. 
            </p>
            </div>
            <div className='teamDiv'>
            <h1 className="vision headerTitles">Meet The Team </h1> <br/>
            <Team />
            </div>
      </div>
    )
}

export default About;
