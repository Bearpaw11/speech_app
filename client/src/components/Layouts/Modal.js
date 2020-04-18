import React from "react";

function Modal() {
    return (   
        <div>
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true"></div>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Login to your account</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
            
                <div className="modal-body modalBodyStyle">
              
                <form>
                    <div className="form-group">
                        <label for="inputEmail4">Email:</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="" aria-describedby="emailHelp" />
                    </div>
                
                    <div className="form-group">
                        <label for="inputPassword6">Password</label>
                            <input type="password" className="form-control" id="inputPassword6" />
                    </div>
              </form>
            
            </div>
                    <div className="modal-footer">
                        <button type="button" id="login" className="btn btn-primary loginBtn">Login</button>
                    </div>
            </div>
        </div>
    </div>
    )
    }

      export default Modal;