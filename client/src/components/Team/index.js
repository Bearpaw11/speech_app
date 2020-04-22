import React from "react";
import MeetTeam from "./render.js";
import Team from "./team.json";
import Mel from "./Photos/melpic.jpg"
import David from "./Photos/david.jpeg";
import Shauna from "./Photos/shauna.jpg";
import Chris from "./Photos/chris.jpeg";

function TeamSection(props) {
    return (
        <div>
            <MeetTeam 
                image={David}
                name={Team[0].name}
                bio={Team[0].bio}
            />
            <MeetTeam 
                image={Mel}
                name={Team[1].name}
                bio={Team[1].bio}
            />
            <MeetTeam 
                image={Shauna}
                name={Team[2].name}
                bio={Team[2].bio}
            />
            <MeetTeam 
                image={Chris}
                name={Team[3].name}
                bio={Team[3].bio}
            />            
        </div>
    )
}

export default TeamSection;