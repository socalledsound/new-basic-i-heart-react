// import HeartSVG from "./HeartSVG"
// import HeartGeometry from "./HeartGeometry"
import HeartLogo from '../assets/red-heart.svg'
import logo from '../assets/logo.svg'




const Heart = (props) => {
    
    return (
      <div className='heart'>
        <img src={HeartLogo} alt='heart' className='heart-img'/>
        <p 
            className='heart-message' 
            style={{backgroundColor: 'red', marginTop: '20vh'}}
        >
                {props.text}
        </p>   
      </div>
    )
  }
export default Heart