import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/Firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState("password");
    const [hidepassword, setHidepassword] = useState("Show Password");

    const navigate = useNavigate();

    const showPwrd = () => {
        type === "password" ? (setType('text'), setHidepassword('Hide Password')) : (setType("password"), setHidepassword('Show Password'))
    }

    const login = async () => {
        try {
            const userDetails = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem('user', JSON.stringify(userDetails)
            )
            // toast.success("successfully login")
            setEmail('')
            setPassword('')
            navigate('/') // here navigate is used for when we loged in navigate forward us to home page
        } catch (error) {
            console.log(error);
            // toast.error('email and password did not match')
            setEmail('')
            setPassword('')
        }

    }

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">Login</div>
                            <div className="card-body">
                                <form>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            name='email' type="email" className="form-control" id="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input value={password}
                                            onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Enter your password" />
                                    </div>
                                    {/* checkbox for show and hide password */}
                                    <div className=" mb-4">
                                        <input onClick={showPwrd} id="default-checkbox" type="checkbox" value="" className=" " />
                                        <label htmlFor="default-checkbox" className="ms-3">{hidepassword}</label>
                                    </div>
                                    <button onClick={login} type="submit" className="btn btn-primary">Login</button>
                                    <div>
                                        <h5 className='text-dark'>Don&apos;t have an account <Link className='text-danger' to={'/signup'}>Signup</Link></h5>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
