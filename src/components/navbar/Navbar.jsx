import { BsFilterRight } from "react-icons/bs";
import '../../App.css'

const Navbar = () => {
    return (
        <>
            <div className='navbar-customClass'>
                <ul className="nav justify-content-around mt-3 ">
                    <li className="nav-item logo-customClass">
                        <a className="nav-link border px-5 py-2 rounded text-dark bg-white " aria-current="page" href="#">LOGO</a>
                    </li>
                    <li className="nav-item searchbar-customClass">
                        <div className="d-flex  border rounded bg-white">
                            <input type="search" className="nav-link border-0 py-2 mx-1 text-dark bg-white" placeholder="search..." name="" id="" />
                            <button className="ms-auto border-0 mx-1 bg-white "><BsFilterRight className='bg-white' /> Filter</button>
                        </div>
                    </li>
                    <li className="nav-item becomeSeller-customClass">
                        <a className="nav-link border rounded text-white bg-success" href="#">Become a Seller</a>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default Navbar
