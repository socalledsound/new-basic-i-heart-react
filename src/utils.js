const range = count => Array.from(Array(count).keys());
const degreesToRadians = angle => (Math.PI * angle) / 180;

export const generateRandomColor = () => `#${Math.floor(Math.random() * 2 ** 24).toString(16)}`

export const heartPathDef = vertices => {
    console.log(vertices)
    return   `M${vertices.map(({ theta, r}) => [
        (16 * Math.pow(Math.sin(theta + Math.PI/2.0),3))*10,
        (13 * Math.cos(theta + Math.PI/2.0) - 5 * Math.cos(2 * (theta+ Math.PI/2.0)) - 2 * Math.cos(3 * (theta + + Math.PI/2.0)) - Math.cos( 4 * (theta + Math.PI/2.0))) * 10
      ]).join('L')}Z`;
}

export const heartPoints = (numPoints, radius) => {
    const theta = 360/numPoints;
    
    const vertexIndices = range(numPoints);
    return vertexIndices.map(idx => ({
        theta: degreesToRadians((theta * idx)),
        r: radius,
    }))
}