import React from "react";
import MeetTeam from "./render.js";
import Team from "./team.json";
import Mel from "./Photos/melpic.jpg"
import David from "./Photos/david.jpeg";
import Shauna from "./Photos/shauna.jpg";
import Chris from "./Photos/chris.jpeg";

function TeamSection(props) {
    return (
        <div className="row">
            <div className="col-sm-2 col-md-6" id="lefter">
                <div className="avatar mx-auto">
                    <MeetTeam 
                        image={David}
                        name={Team[0].name}
                        bio={Team[0].bio}
                    />
                </div>
            </div>

            <div className="col-sm-2 col-md-6" id="melAdjust">
                <div className="avatar mx-auto">
                    <MeetTeam 
                        image={Mel}
                        name={Team[1].name}
                        bio={Team[1].bio}
                    />
                </div>
            </div>
            
            <div className="col-sm-2 col-md-6" id="shaunaAdjust">
                <div class="avatar mx-auto">
                    <MeetTeam 
                        image={Shauna}
                        name={Team[2].name}
                        bio={Team[2].bio}
                    />
                </div>
            </div>

            <div className="col-sm-2 col-md-6" id="chrisAdjust">
                <div class="avatar mx-auto">
                    <MeetTeam 
                        image={Chris}
                        name={Team[3].name}
                        bio={Team[3].bio}
                    />            
                </div>
            </div>
        </div>
    )
}

export default TeamSection;