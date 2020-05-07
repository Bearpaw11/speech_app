import React from 'react';

function MeetTeam(props) { 
    return (
        <div>
            <img className="groupPics" src={props.image} alt="Headshot"></img>
                <p className="groupName">{props.name}</p>
                <p className="bios">{props.bio}</p>
        </div>        
    )
}

    export default MeetTeam;