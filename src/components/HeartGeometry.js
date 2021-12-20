import { heartPathDef, heartPoints, generateRandomColor } from '../utils';

const HeartGeometry = ({numPoints, radius}) => {
    const path = heartPathDef(heartPoints(numPoints, radius));
    console.log(path);
    return ( 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800, 600">
        <g transform='rotate(180) translate(-350,-250) scale(2)'>     
                <path 
                    id="heart"
                    d={path} 
                    fill={generateRandomColor()}
                />        
        </g>
        </svg>

     );
}
 
export default HeartGeometry;