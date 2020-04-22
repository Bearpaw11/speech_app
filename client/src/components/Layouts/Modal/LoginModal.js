import React from "react";

function LoginModal() {
    return (
        <div>
            <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
  
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
  
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}

export default LoginModal;