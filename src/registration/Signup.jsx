import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../firebase/Firebase';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

// const Signup = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [type, setType] = useState("password");
//     const [hidepassword, setHidepassword] = useState("Show Password");



//     const showPwrd = () => {
//         type === "password" ? (setType('text'), setHidepassword('Hide Password')) : (setType("password"), setHidepassword('Show Password'))
//     }

//     const signup = async () => {

//         if (name === "" || email === "" || password === "") {
//             return toast.error("All fields are required")
//         }

//         try {
//             const userN = await createUserWithEmailAndPassword(auth, email, password);

//             console.log(userN) 

//             const user = {
//                 name: name,
//                 uid: userN.user.uid,
//                 email: userN.user.email,
//                 time: Timestamp.now()
//             }
//             const userRef = collection(fireDB, "userN")
//             await addDoc(userRef, user);
//             // console.log(user)
//             setName("");
//             setEmail("");
//             setPassword("");
//             toast.success("Signup Succesfully")

//         } catch (error) {
//             console.log(error)
//             toast.error("Email already Registered ")
//             setTimeout(() => {
//                 window.location.href = '/login'
//             }, 2500);
//         }
//     }
//     return (
//         <>
//             <div className="container mt-5">
//                 <div className="row justify-content-center">
//                     <div className="col-md-6">
//                         <div className="card">
//                             <div className="card-header">Signup</div>
//                             <div className="card-body">
//                                 <form>
//                                     <div className="mb-3">
//                                         {/* <label htmlFor="name" className="form-label">Name</label> */}
//                                         <input type="text" value={name}
//                                             onChange={(e) => setName(e.target.value)}
//                                             name='name'  className="form-control" id="name" placeholder="Enter your name" />
//                                     </div>
//                                     <div className="mb-3">
//                                         {/* <label htmlFor="email" className="form-label">Email</label> */}
//                                         <input  type="email" value={email}
//                                             onChange={(e) => setEmail(e.target.value)}
//                                             name='email' className="form-control" id="email" placeholder="Enter your email" />
//                                     </div>
//                                     <div className="mb-3">
//                                         {/* <label htmlFor="password" className="form-label">Password</label> */}
//                                         <input type={type} value={password}
//                                             onChange={(e) => setPassword(e.target.value)} name='password'  className="form-control" id="password" placeholder="Enter your password" />
//                                     </div>
//                                     {/* checkbox for show and hide password */}
//                                     <div className=" mb-4">
//                                         <input type="checkbox" onClick={showPwrd} id="default-checkbox"  value="" className=" " />
//                                         <label htmlFor="default-checkbox" className="ms-3">{hidepassword}</label>
//                                     </div>
//                                     <button onClick={signup} type="submit" className="btn btn-primary">Sign Up</button>
//                                     <div>
//                                         <h5 className='text-dark'>if you have already account <Link className='text-danger' to={'/login'}>Login</Link></h5>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }


function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const signup = async () => {
        if (name === "" || email === "" || password === "") {
            return toast.error("All fields are required")
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

            setName("");
            setEmail("");
            setPassword("");
            toast.success("Signup Succesfully")

        } catch (error) {
            console.log(error)
            toast.error("Email Already Registered")

            setTimeout(() => {
                window.location.href = '/login'
            }, 2500);
        }
    }

    return (
        <>

            <div className=' flex justify-center items-center h-screen'>

                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                    </div>
                    <div>
                        <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name='name'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Name...'
                        />
                    </div>

                    <div>
                        <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name='email'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Email...'
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Password...'
                        />
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                            onClick={signup}
                            className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                            Signup
                        </button>
                    </div>
                    <div>
                        <h2 className='text-white'>Have an account <Link className=' text-red-500 font-bold' to={'/login'}>Login</Link></h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
