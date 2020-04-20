import React from "react";

export function Input(props) {
  return (
    <div className="form-group">
      <input placeholder="type here" className="form-control" value={props.value} username={props.username} email={props.email}/>
    </div>
  );
}
