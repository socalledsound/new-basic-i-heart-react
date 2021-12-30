
// import HeartGeometry from "./HeartGeometry"
import HeartLogo from '../assets/heart.svg'
// import logo from '../assets/logo.svg'




const Heart = (props) => {
    
    return (
      <div className='heart'>
        <img src={HeartLogo} alt='heart' className='heart-img'/>
        <p className='heart-message'>{props.text}</p>  
      </div>
    )
  }
export default Heart