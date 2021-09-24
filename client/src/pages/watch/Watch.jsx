import { ArrowBackOutlined } from '@material-ui/icons'
import './watch.scss'

function Watch() {
  return (
    <div className='watch'>
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video 
        className='video' 
        autoPlay 
        progress 
        controls 
        src='https://ak.picdn.net/shutterstock/videos/1044411637/preview/stock-footage-dark-d-animation-with-devilish-characters-and-monsters-in-black-and-white-collection-of-motion.webm'
      />
    </div>
  )
}

export default Watch
