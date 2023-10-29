import '../../App.css'
import pexelsAnastasia from '../imagesAndIcons/pexels-anastasia-shuraeva-4406721/pexels-anastasia-shuraeva-4406721.jpg'
import pexelsandrea from '../imagesAndIcons/pexels-andrea-piacquadio-3771118/pexels-andrea-piacquadio-3771118.jpg'
import pexelsantoni from '../imagesAndIcons/pexels-antoni-shkraba-4442102/pexels-antoni-shkraba-4442102.jpg'
const RightAside = () => {
  return (
    <>
      <div className='rounded bg-white rightSide-customClass position-fixed top-25 end-0 overflow-scroll' >
        <div className='d-flex bg-white rounded'>
          <p className="ms-2 bg-white rounded fw-bold"> Artist</p>
          <p className='ms-3 bg-white rounded'> Photographer</p>
        </div>
        
        <div className="my-2 rightSideBarClass position-relative">
          <div className="position-absolute top-50 start-0 translate-middle-y">
            <img src={pexelsAnastasia} className="pexelsAnastasiaCustomClass" alt="..." style={{ width: "3rem" }} />
          </div>
        </div>

        <div className="my-2 pexelsgenaroCustomClass position-relative">
          <div className="position-absolute top-50 start-0 translate-middle-y">
            <img src={pexelsandrea} className="pexelsAnastasiaCustomClass" alt="..." style={{ width: "3rem" }} />
          </div>
        </div>

        <div className="my-2 pexelsantoniBarClass position-relative">
          <div className="position-absolute top-50 start-0 translate-middle-y">
            <img src={pexelsantoni} className="pexelsAnastasiaCustomClass" alt="..." style={{ width: "3rem" }} />
          </div>
        </div>

        <div className="my-2 rightSideBarClass position-relative">
          <div className="position-absolute top-50 start-0 translate-middle-y">
            <img src={pexelsAnastasia} className="pexelsAnastasiaCustomClass" alt="..." style={{ width: "3rem" }} />
          </div>
        </div>

        <div className="my-2 rightSideBarClass position-relative">
          <div className="position-absolute top-50 start-0 translate-middle-y">
            <img src={pexelsAnastasia} className="pexelsAnastasiaCustomClass" alt="..." style={{ width: "3rem" }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default RightAside
