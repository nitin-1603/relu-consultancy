import '../../App.css';
import { AiOutlineHome } from 'react-icons/ai'
import { GrNotification } from 'react-icons/gr'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiConversation, BiLogOutCircle } from 'react-icons/bi'
import { BsWalletFill } from 'react-icons/bs'
import subscriptionIcon from '../imagesAndIcons/favorite/favorite.jpg'
import myProfile from '../imagesAndIcons/profile/profile.jpg'
import { AiOutlineSetting } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const LeftAside = () => {
  const navigate = useNavigate();

  const login = ()=>{
    navigate('/login');
  }
  return (
    <>
      <div className="leftAside position-fixed top-25 start-0">

        <div className="d-flex my-2 bg-white">
          {/* here i am using react icons */}
          <AiOutlineHome className='mx-2 bg-white' />
          <button className="button-decoration bg-white">Home</button>
        </div>

        <div className="d-flex my-2 bg-white">
          <GrNotification className='mx-2 bg-white' />
          <button className="button-decoration bg-white">Notifications</button>
        </div>

        <div className="d-flex my-2 bg-white">
          <AiOutlineHeart className='mx-2 bg-white' />
          <button className="button-decoration bg-white">Shops</button>
        </div>

        <div className="d-flex my-2 bg-white">
          <BiConversation className='mx-2 bg-white' />
          <button className="button-decoration bg-white">Conversation</button>
        </div>

        <div className="d-flex my-2 bg-white">
          <BsWalletFill className='mx-2 bg-white' />
          <button className="button-decoration bg-white">Wallet</button>
        </div>

        <div className="d-flex my-2 bg-white">
          {/* here i am using custom subscription icon */}
          <img className='mx-2 bg-white' src={subscriptionIcon} alt="subsciption" />
          <button className="button-decoration bg-white">Subscription</button>
        </div>

        <div className="d-flex my-2 bg-white">
          {/* here i am using custom my profile icon */}
          <img className='ms-2 mx-2 bg-white' src={myProfile} alt="subsciption" />
          <button className="button-decoration bg-white">My Profile</button>
        </div>

        <div className="d-flex my-2 bg-white">
          {/* here i am using custom setting icon */}
          {/* <img className='ms-2 mx-2 bg-white' src={myProfile} alt="subsciption" /> */}
          <AiOutlineSetting  className='mx-2 bg-white'/> {/* this is  react icons */}
          <button className="button-decoration bg-white">Setting</button>
        </div>

        <div className="d-flex bg-white mt-5 mb-4 py-2">
          <BiLogOutCircle className='mx-2 bg-white' />
          <button onClick={login} className="button-decoration bg-white">Login</button>
        </div>

      </div>

    </>
  )
}

export default LeftAside
