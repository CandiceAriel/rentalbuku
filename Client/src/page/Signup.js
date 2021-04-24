import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

import '../scss/signup.scss'

const Signup = () => {
    const [user,setUser]=useState([]);

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    //update Email value
    const updateUsername = e => {
        setUsername(e.target.value);
    }

    //update Password value
    const updatePassword = e => {
        setPassword(e.target.value);
    }

    //Sign Up
    const signup = () => {
        Axios.post("http://localhost:3001/register", {
          username: username,
          password: password,
        }).then(() => {
          setUser([
            ...user,
            {
                username: username,
                password: password,
            },
          ]);
          alert("Registered")
        });
      };

    return (
        <div className="signup__container">
                <div className="signup__title">
                    <h3>BookRental</h3>
                </div>                
                <form className="signup__form">
                    <h5 className="title">Daftar dulu,yuk</h5>
                    <div className="signup-form__group">
                        <input type="email" className="form__input" placeholder="username" value={username} onChange={updateUsername}/>
                        <div className="form__message">
                            <p>Misal: 081234567890, atau nama@email.com</p>
                        </div>
                    </div>
                    <div className="signup-form__group">
                        <input type="password" className="form__input" placeholder="password" value={password} onChange={updatePassword}/>
                    </div>
                    <Link to="/SignIn" className="link--big" onClick={signup}>Daftar</Link>
                    <p className="subtitle">
                        Sudah punya akun?
                        <span><Link to="/SignIn" className="subtitle__link">Login</Link></span>
                    </p>
                </form>
        </div>
    )
}

export default Signup
