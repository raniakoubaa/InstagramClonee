import React from 'react'
import login from '../Login/login.jpg';

import './Login.css'
import { useState } from 'react'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setCheck] = useState(false);
    const handleCheckChange = () => {
        setCheck(!checked);
      };
      const submitValues = (e) => {
        e.preventDefault();
    
        if (!email || !password) {
          alert("Please add your informations to log in!");
        } else {
          console.log(`Email: ${email} , Password: ${password}`);
          alert(`Email: ${email} , Password: ${password}, Remember me: ${checked}`);
        }
    }
    return (
        
            <div className='d-flex justify-content-around'>
                <div style={{marginLeft:"70px", marginTop:"30px"}}><img src={login} alt="login" /></div>
                <div className="log-cont">
        {/* {location.pathname === "/" && ( */}
        <form onSubmit={submitValues}>
          <div className="login-txt">
            <h1 style={{fontStyle:"italic"}}>Instagram</h1>
          </div>
          <div>
            
            <input
              className="input-field"
              type="text"
              placeholder="Num,Telephon,nom d'utilisateur ou email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            {/* <label>Password </label> */}
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
            />
          </div>  
          <button className="submit-btn" variant="primary" type="submit">
            connexion
          </button>
          <div className='d-flex' style={{marginTop:"20px"}}>
            <img src="./Facebook.png" alt="facebook" widht="20px"/><label className="sm-txt">Se connecter avec Facebook </label>
            </div>
          <div className="bottom-txt">
            <p>
              Don't have an account?{" "}
              {/* <Link to="/signup"> */}
                <strong className="signup-txt">Create Account</strong>
              {/* </Link> */}
            </p>
          </div>
          <div className="final-bot-txt">
            <p style={{marginLeft:"50px"}}>Télécharger l'application</p>
           <div className='d-flex'>
               <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_french-fr.png/485fcccb52dc.png" alt="img1" height="40" width="136px"/>
           <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_french-fr.png/46aa4b6fd58d.png" alt="img2"  height="40" width="136px"/></div>
          </div>
        </form>
                    
                    {/* <Card.Text>
                        Ou
                        <img src="./Facebook.png" alt="facebook"/><p>Se connecter avec Facebook</p>
                    </Card.Text>
                </Card.Body>
            </Card> */}
            </div>
        </div>
    )
}

export default Login
