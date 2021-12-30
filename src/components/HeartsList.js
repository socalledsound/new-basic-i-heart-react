// import Heart from './Heart'
import CandyColoredHeart from './CandyColoredHeart'
// import { messages } from '../assets/MESSAGES.js'



const messages = [
    'cool cud', 'me my <3', 'you are bear', 
    'team bear', 'time hug', 'fang', 'bog love', 'me have love',
    'all hover', 'sweat poo', 'u hack', 'stank love', 'heart me', 
    'wink bear', 'bear bear', 'be my bear', 'yank o way', 'mage love', 
    'oy', 'in a fan'   
].sort((a,b) => 0.5 - Math.random())


const HeartsList = () => {
    return (
      <div className='hearts-container'>
        {/* {messages.map((msg, idx) =>  <Heart key={idx} text={msg} />)} */}
        {messages.map((msg, idx) =>  <CandyColoredHeart key={idx} text={msg} />)}
      </div>
      
    )
  }

export default HeartsList