import React from 'react';
import './formLogin.css';

const FormLogin = () => {
    return(
        <React.Fragment>
            <body>
                <div className="hero">
                    {/* <h2 className="login-p"> Form Login</h2> */}
                    <div className="login-card">
                        <h1 className="login-p-dua">Quiz 1</h1>
                        <div className="login-insert">
                            <div className="username">
                                <h4>Username</h4>
                                <input type="username" className="username-box" placeholder="Username ...." required/>
                            </div>
                            <div className="password">
                                <h4>Password</h4>
                                <input type="password" className="password-box" placeholder="Password ...." required/>
                            </div>
                        </div>
                        <div className="login-accept">
                            <button className="button-login" type="submit">Login</button>
                            <div className="remember-me">
                                <input className="checkbox" type="checkbox" id="check"/>   
                                <h4>Remember me</h4>  
                            </div>
                        </div>
                        <button className="cancel">Cancel</button>
                    </div>
                </div>
            </body>
        </React.Fragment>
    )
}

//agar component ini dapat dipakai di mana saja
export default FormLogin;