import Navbar from "../components/navbar/Navbar"
import "../App.css"
import LeftAside from "../components/leftAside/LeftAside"
import MainSection from "../components/section/MainSection"
import RightAside from "../components/rightAside/RightAside"

const Layout = () => {
    return (
        <>


            <div className="layoutComponent">
                <Navbar />
                <div className="d-flex  justify-content-around ">
                    <LeftAside />
                    <MainSection />
                    <RightAside />
                </div>
            </div>

        </>
    )
}

export default Layout
