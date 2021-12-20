import HeartShape from "./HeartShape"
// import HeartSVG from '../assets/red-heart.svg'




const Heart = (props) => {
    
    return (
      <div className='heart'>
        <div className="heart-img">
            <HeartShape />
        </div>
        {/* <img src={HeartSVG} alt='heart' className='heart-img'/> */}
        <p className='heart-message'>{props.text}</p>
      
      </div>
    )
  }
export default Heart