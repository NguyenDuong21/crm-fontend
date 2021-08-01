import React from 'react';
import PropTypes from 'prop-types';
export default function Login({handelChange,handelSubmit,switchPage, email, password}) {
    return (
        <div className="container">
            <div className="row">
                
                <div className="col">
                <h1 className="text-center text-info">Client Login</h1>
                    <form onSubmit={handelSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" value={email} name="email" onChange={handelChange} className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" password={password} name="password" onChange={handelChange} className="form-control" placeholder="Password" />
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    <br />
                    <a href="#" id="forgot" onClick={() => switchPage("reset")}>Forgot password</a>
                </div>
            </div>
        </div>
    )
};
Login.propTypes = {
    handelChange: PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handelSubmit: PropTypes.func.isRequired
}