import React,{ useState } from 'react'
import { Link,useHistory } from 'react-router-dom'
import Axios from 'axios'
import '../scss/signin.scss'

const Signin = () => {
    const [user,setUser]=useState([]);

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const history = useHistory();
    const navigateToHome = () => history.push('/');

    //update Email value
    const updateUsername = e => {
        setUsername(e.target.value);
    }

    //update Password value
    const updatePassword = e => {
        setPassword(e.target.value);
    }

    const buttonClicked = () => {
        navigateToHome();
    }

    const signin = e => {
        e.preventDefault();
        Axios.post("http://localhost:3001/signin",
        {
            username: username,
            password: password
        }).then((response) => {
            if(response.data.message ){
                console.log(response.data.message)
            }else {
                localStorage.setItem('signindata', JSON.stringify(response.data));
                var admindata = JSON.parse(localStorage.getItem('signindata'));
                delete admindata[0].password;

                localStorage.setItem('signindata', JSON.stringify(admindata));
            }
            navigateToHome();
        });
    }

    return (
        <div className="signin__container">        
                <form className="signin__form">
                    <h5 className="signin__title">BookRental</h5>
                    <h5 className="form__title">Silahkan masuk dengan akun kamu</h5>
                    <div className="form__subtitle">
                        <p className="form__subtitle">
                            Belum punya akun?
                            <span><Link to="/Signup" className="subtitle__linksignin">Daftar disini</Link></span>
                        </p>
                    </div>
                    <div className="signin-form__group">
                        <input type="email" className="form__input" placeholder="Username" value={username} onChange={updateUsername}/>
                    </div>
                    <div className="signin-form__group">
                        <input type="password" className="form__input" placeholder="Password" value={password} onChange={updatePassword}/>
                    </div>
                    <button onClick={signin} className="link--big">Sign In</button>
                </form>
        </div>
    )
}

export default Signin
