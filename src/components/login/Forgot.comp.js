import React from 'react';
import PropTypes from 'prop-types';
export default function Forgot({ handelChange, handelResetSubmit, switchPage, email }) {
    return (
        <div className="container">
            <div className="row">

                <div className="col">
                    <h1 className="text-center text-info">Reset password</h1>
                    <form onSubmit={handelResetSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" value={email} name="email" onChange={handelChange} className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>

                        <button type="submit" className="btn btn-primary">Reset</button>
                    </form>
                    <br />
                    <a href="#" id="login" onClick={() => switchPage("login")}>Login</a>
                </div>
            </div>
        </div>
    )
};
Forgot.propTypes = {
    handelChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    handelSubmit: PropTypes.func.isRequired
}