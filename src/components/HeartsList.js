import Heart from './Heart'
// import { messages } from '../assets/MESSAGES.js'

const messages = [
    'cool cud', 'me my <3', 'you are bear', 
    'team bear', 'time hug', 'fang', 'bog love', 'me have love',
    'all hover', 'sweat poo', 'u hack', 'stank love', 'heart me', 
    'wink bear', 'bear bear', 'be my bear', 'yank o way', 'mage love', 
    'oy', 'in a fan'   
]


const HeartsList = (props) => {
    return (
      <div className='hearts-container'>
        {messages.map((msg, idx) =>  <Heart key={idx} text={msg} idx={idx} />)}
      </div>
      
    )
  }
export default HeartsList