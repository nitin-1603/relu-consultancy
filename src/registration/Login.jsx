import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [type, setType] = useState("password");
//     const [hidepassword, setHidepassword] = useState("Show Password");

//     const navigate = useNavigate();

//     const showPwrd = () => {
//         type === "password" ? (setType('text'), setHidepassword('Hide Password')) : (setType("password"), setHidepassword('Show Password'))
//     }

//     const login = async () => {
//         try {
//             const userDetails = await signInWithEmailAndPassword(auth, email, password);
//             localStorage.setItem('user', JSON.stringify(userDetails))
//             console.log(userDetails)
//             toast.success("successfully login")
//             setEmail('')
//             setPassword('')
//             navigate('/') // here navigate is used for when we loged in navigate forward us to home page
//         } catch (error) {
//             console.log(error);
//             toast.error('email and password did not match')
//             setEmail('')
//             setPassword('')
//         }

//     }

//     return (
//         <>
//             <div className="container mt-5">
//                 <div className="row justify-content-center">
//                     <div className="col-md-6">
//                         <div className="card">
//                             <div className="card-header">Login</div>
//                             <div className="card-body">
//                                 <form>

//                                     <div className="mb-3">
//                                         {/* <label htmlFor="email" className="form-label">Email</label> */}
//                                         <input type="email" value={email}
//                                             onChange={(e) => setEmail(e.target.value)}
//                                             name='email' className="form-control" id="email" placeholder="Enter your email" />
//                                     </div>
//                                     <div className="mb-3">
//                                         {/* <label htmlFor="password" className="form-label">Password</label> */}
//                                         <input type={type} value={password}
//                                             onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder="Enter your password" />

//                                     </div>
//                                     {/* checkbox for show and hide password */}
//                                     <div className=" mb-4">
//                                         <input onClick={showPwrd} id="default-checkbox" type="checkbox" value="" className=" " />
//                                         <label htmlFor="default-checkbox" className="ms-3">{hidepassword}</label>
//                                     </div>
//                                     <button onClick={login} type="submit" className="btn btn-primary">Login</button>
//                                     <div>
//                                         <h5 className='text-dark'>Don&apos;t have an account <Link className='text-danger' to={'/signup'}>Signup</Link></h5>
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

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState("password");
    const [hidepassword, setHidepassword] = useState("Show Password");

    // here i am using navigate when login successful then we go to the home page
    const navigate = useNavigate();

    // function for show and hide password
    const showPwrd = () => {
        // if (type === "password") {
        //     setType('text');
        //     setHidepassword('Hide Password');

        // } else {
        //     setType("password");
        //     setHidepassword('Show Password');
        // }
        type === "password" ? (setType('text'), setHidepassword('Hide Password')) : (setType("password"), setHidepassword('Show Password'))
    }

    const login = async () => {
        
        try {
            const userDetails = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem('user', JSON.stringify(userDetails)
            )
            toast.success("successfully login")
            setEmail('')
            setPassword('')
            navigate('/') // here navigate is used for when we loged in navigate forward us to home page
        } catch (error) {
            console.log(error);
            toast.error('email and password did not match')
            setEmail('')
            setPassword('')
        }

    }
    return (
        <div className=' flex justify-center items-center h-screen'>
            
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type={type}
                        value={password}
                        name='default-checkbox'
                        onChange={(e) => setPassword(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                {/* button for show and hide password */}
                {/* <button
                    onClick={showPwrd}
                    className=' bg-yellow-500 w-36 text-black font-bold  px-2 py-2 rounded-lg'>
                    {hidepassword}
                </button> */}

                {/* checkbox for show and hide password */}
                <div className="flex items-center mb-4">
                    <input onClick={showPwrd} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " />
                    <label htmlFor="default-checkbox"  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{hidepassword}</label>
                </div>
                <div className=' flex justify-center mb-3 py-3'>
                    <button
                        onClick={login}
                        className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Don&apos;t have an account <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
    )
}
export default Login
