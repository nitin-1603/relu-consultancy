import pexels from '../imagesAndIcons/pexels-ali-pazani-2613260/pexels-1.jpg'
import { BsThreeDotsVertical } from 'react-icons/bs'
import pixelHumphery from '../imagesAndIcons/pexels-humphrey-muleba-2045248/pexels-humphrey-muleba-2.jpg'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineComment } from 'react-icons/ai'
import { BiShare } from 'react-icons/bi'
import pexelsTobias from '../imagesAndIcons/pexels-tobias-bjørkli-2236382/pexels-tobias-bjørkli-2236382@2x.jpg'
import pexelsImad from '../imagesAndIcons/pexels-imad-clicks-9810659/pexels-imad-clicks-9810659.jpg'
import image40 from '../imagesAndIcons/Image 40/Image 40.jpg'
import star from '../imagesAndIcons/star/star.jpg'
import image39 from '../imagesAndIcons/Image 39/Image 39.jpg'

const MainSection = () => {
    return (
        <div className="container main-container">                  { /* position-absolute top-25 start-258*/}
            <div className="card card-customClass " style={{ width: "12rem" }} >

                <div className="card-body d-flex bg-white rounded">
                    <div className='d-flex bg-white'>
                        <img src={pexels} alt="" />
                        <div className='bg-white'>
                            <p className='bg-white ms-2 my-0'>Lara Leones</p>
                            <p className='bg-white ms-2 my-0'>@thewallart</p>
                        </div>
                    </div>
                    <div className='ms-auto bg-white'>
                        <BsThreeDotsVertical className='bg-white' />
                    </div>
                </div>

                <div className='ms-2 bg-white'>
                    <p className='ms-2 bg-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi fugiat quibusdam quidem culpa unde aliquid iste,<button className='text-danger bg-white border-0'>readmore</button></p>
                </div>

                <img src={pixelHumphery} className="card-img-top" alt="..." />

                <div className="card-body rounded border-top mt-2 d-flex bg-white">
                    <p className="m-2 bg-white"><AiOutlineHeart className='bg-white' /> 9.8k</p>
                    <p className=" m-2 bg-white"><AiOutlineComment className='bg-white' /> 8.6k</p>
                    <p className="m-2 bg-white"><BiShare className='bg-white' /> 7.2k</p>
                </div>
            </div>

            <div className="card card-customClass " style={{ width: "12rem" }} >

                <div className="card-body d-flex bg-white rounded">
                    <div className='d-flex bg-white'>
                        <img src={pexelsImad} alt="" />
                        <div className='bg-white'>
                            <p className='bg-white ms-2 my-0'>Thomas J.</p>
                            <p className='bg-white ms-2 my-0'>@thecustomcreater</p>
                        </div>
                    </div>
                    <div className='ms-auto bg-white'>
                        <BsThreeDotsVertical className='bg-white' />
                    </div>
                </div>

                <div className='ms-2 bg-white'>
                    <p className='ms-2 bg-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi fugiat quibusdam quidem culpa unde aliquid iste,<button className='text-danger bg-white border-0'>readmore</button></p>
                </div>

                <img src={pexelsTobias} className="card-img-top" alt="..." />

                <div className="card-body rounded  border-top mt-2 d-flex bg-white">
                    <p className="m-2 bg-white"><AiOutlineHeart className='bg-white' /> 9.8k</p>
                    <p className=" m-2 bg-white"><AiOutlineComment className='bg-white' /> 8.6k</p>
                    <p className="m-2 bg-white"><BiShare className='bg-white' /> 7.2k</p>
                </div>
            </div>

            {/*  */}

            <div className="card card-customClass" style={{ width: "12rem" }} >
                <div className='d-flex bg-white mt-3 mb-3 rounded '>
                    <div className="card bg-white border-0 m-2" style={{ width: "13rem" }}>
                        <img src={image40} className="card-img-top bg-white h-50" alt="..." />
                        <div className=" bg-white">
                            <p className="bg-white">Modern wall decor painting</p>
                            <div className="d-flex bg-white">
                                <span className=" bg-white">$199  </span>
                                <span className="ms-auto bg-white"><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /></span>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-white border-0 m-2" style={{ width: "13rem" }}>
                        <img src={image39} className="card-img-top bg-white h-50" alt="..." />
                        <div className=" bg-white">
                            <p className="bg-white">Modern wall decor painting</p>
                            <div className="d-flex bg-white">
                                <span className=" bg-white">$199  </span>
                                <span className="ms-auto bg-white"><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-white border-0 m-2" style={{ width: "13rem" }}>
                        <img src={image39} className="card-img-top bg-white h-50" alt="..." />
                        <div className=" bg-white">
                            <p className="bg-white">Modern wall decor painting</p>
                            <div className="d-flex bg-white">
                                <span className=" bg-white">$199  </span>
                                <span className="ms-auto bg-white"><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainSection
