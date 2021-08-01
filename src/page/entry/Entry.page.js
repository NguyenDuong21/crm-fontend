import { React, useState } from 'react';
import "./Entry.page.css";
import Login from '../../components/login/Login.comp';
import Forgot from '../../components/login/Forgot.comp';

const Entry = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [frmType, setfrmType] = useState('login');
    const handelChange = (e) => {
        let { name, value } = e.target;
        switch (name) {
            case "email":
                setemail(value);
                break;
            case "password":
                setpassword(value);
                break;
            default:
                break;
        }
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return alert("You need provide value for input");
        }
        console.log("Email : " + email + " Password: password");
    }
    const handelResetSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            return alert("You need provide value for input");
        }
    };
    const switchPage = (type) => {
        setfrmType(type);
    }
    return (
        <div className="wrap bg-info">
            <div className="jumbotron bg-white">
                {frmType === "login" && <Login handelChange={handelChange} switchPage={switchPage} handelSubmit={handelSubmit} email={email} password={password} />}
                {frmType === "reset" && <Forgot handelChange={handelChange} switchPage={switchPage} handelSubmit={handelResetSubmit} email={email} />}

            </div>
        </div>
    )
}

export default Entry
