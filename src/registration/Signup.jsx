import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../firebase/Firebase';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("password");
    const [hidepassword, setHidepassword] = useState("Show Password");

    

    const showPwrd = () => {
        type === "password" ? (setType('text'), setHidepassword('Hide Password')) : (setType("password"), setHidepassword('Show Password'))
    }

    const signup = async () => {

        if (name === "" || email === "" || password === "") {
            return toast.error("All fields are required")
        }

        try {
            const userN = await createUserWithEmailAndPassword(auth, email, password);

            console.log(userN) 

            const user = {
                name: name,
                uid: userN.user.uid,
                email: userN.user.email,
                time: Timestamp.now()
            }
            const userRef = collection(fireDB, "userN")
            await addDoc(userRef, user);
            // console.log(user)
            setName("");
            setEmail("");
            setPassword("");
            toast.success("Signup Succesfully")

        } catch (error) {
            console.log(error)
            toast.error("Email already Registered ")
            setTimeout(() => {
                window.location.href = '/login'
            }, 2500);
        }
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">Signup</div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        {/* <label htmlFor="name" className="form-label">Name</label> */}
                                        <input type="text" value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            name='name'  className="form-control" id="name" placeholder="Enter your name" />
                                    </div>
                                    <div className="mb-3">
                                        {/* <label htmlFor="email" className="form-label">Email</label> */}
                                        <input  type="email" value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            name='email' className="form-control" id="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        {/* <label htmlFor="password" className="form-label">Password</label> */}
                                        <input type={type} value={password}
                                            onChange={(e) => setPassword(e.target.value)} name='password'  className="form-control" id="password" placeholder="Enter your password" />
                                    </div>
                                    {/* checkbox for show and hide password */}
                                    <div className=" mb-4">
                                        <input type="checkbox" onClick={showPwrd} id="default-checkbox"  value="" className=" " />
                                        <label htmlFor="default-checkbox" className="ms-3">{hidepassword}</label>
                                    </div>
                                    <button onClick={signup} type="submit" className="btn btn-primary">Sign Up</button>
                                    <div>
                                        <h5 className='text-dark'>if you have already account <Link className='text-danger' to={'/login'}>Login</Link></h5>
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

export default Signup
