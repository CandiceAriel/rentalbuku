import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import '../scss/signup.scss'

const Signup = () => {
    const [user,setUser]=useState([]);

    const [userID,setUserID] = useState('');
    const [nama,setNama] = useState('');
    const [noHP,setNoHP] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    //update Email value
    const updateEmail = e => {
        setEmail(e.target.value);
    }

    return (
        <div className="signup__container">
            <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
            </head>
            <body>
                <div className="signup__title">
                    <h3>BookRental</h3>
                </div>                
                <form className="signup__form">
                    <h5 className="title">Daftar dulu,yuk</h5>
                    <div className="signup-form__group">
                        <input type="email" className="form__input" placeholder="email" value={email} onChange={updateEmail}/>
                        <div className="form__message">
                            <p>Misal: 081234567890, atau nama@email.com</p>
                        </div>
                    </div>
                    <Link className="link--big">Daftar</Link>
                    <p className="subtitle">
                        Sudah punya akun?
                        <span><Link to="/SignIn" className="subtitle__link">Login</Link></span>
                    </p>
                </form>
            </body>
        </div>
    )
}

export default Signup
