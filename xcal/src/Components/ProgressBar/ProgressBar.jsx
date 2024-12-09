import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ProgressBar(props) {
    const {kcalSum, kcalMax} = props

    return <CircularProgressbar value={kcalSum/kcalMax*100} circleRatio={0.75} text={`${kcalSum} / ${kcalMax ? kcalMax : 0}`}
    styles={{ 
      // Customize the root svg element
      root: {
          width: "300px"
      },
      // Customize the path, i.e. the "completed progress"
      path: {
        // Path color
        stroke: 'black',
        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: 'round',
        // Customize transition animation
        transition: 'stroke-dashoffset 0.9s ease 0s',
        // Rotate the path
        transform: 'rotate(0.625turn)',
        transformOrigin: 'center center',
      },
      // Customize the circle behind the path, i.e. the "total progress"
      trail: {
        // Trail color
        stroke: '#d6d6d6',
        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: 'round',
        // Rotate the trail
        transform: 'rotate(0.625turn)',
        transformOrigin: 'center center',
      },
      // Customize the text
      text: {
        // Text color
        fill: 'black',
        // Text size
        fontSize: '14px',
      },
    }}
  />
}
export default ProgressBar;