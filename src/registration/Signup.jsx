import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../firebase/Firebase';
import { Timestamp, addDoc, collection } from 'firebase/firestore';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signup = async () => {

        if (name === "" || email === "" || password === "") {
            alert('All fields are required')
        }

        try {
            const userS = await createUserWithEmailAndPassword(auth, email, password);
            // console.log(users) 

            const user = {
                name: name,
                uid: userS.user.uid,
                email: userS.user.email,
                time: Timestamp.now()
            }
            const userRef = collection(fireDB, "userS")
            await addDoc(userRef, user);
            console.log(user)
            alert("Signup successfully done");
            setName("");
            setEmail("");
            setPassword("");

        } catch (error) {
            console.log(error)
            alert('username and password incorrect')
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
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            name='name' type="text" className="form-control" id="name" placeholder="Enter your name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            name='email' type="email" className="form-control" id="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input value={password}
                                            onChange={(e) => setPassword(e.target.value)} name='password' type="password" className="form-control" id="password" placeholder="Enter your password" />
                                    </div>
                                    <button onClick={signup} type="submit" className="btn btn-primary">Sign Up</button>
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
