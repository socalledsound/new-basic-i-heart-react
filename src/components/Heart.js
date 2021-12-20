import HeartSVG from "./HeartSVG"
// import HeartGeometry from "./HeartGeometry"
// import HeartLogo from '../assets/red-heart.svg'




const Heart = (props) => {
    
    return (
      <div className='heart'>
        <div className="heart-img">
            <HeartSVG />
            {/* <HeartGeometry numPoints={100} radius={50} /> */}
        </div>
        {/* <img src={HeartLogo} alt='heart' className='heart-img'/> */}
        <p className='heart-message'>{props.text}</p>
      
      </div>
    )
  }
export default Heart