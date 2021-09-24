import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import { useState } from 'react'
import './listItem.scss'

function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = 'https://ak.picdn.net/shutterstock/videos/1044411637/preview/stock-footage-dark-d-animation-with-devilish-characters-and-monsters-in-black-and-white-collection-of-motion.webm'

  return (
    <div 
      className='listItem' 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      style={{left: isHovered && index * 225 -50 + index * 2.5}}
    >
      <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/The_Mummy_%282017%29.jpg" alt="" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className='icon'/>
              <Add className='icon'/>
              <ThumbUpAltOutlined className='icon'/>
              <ThumbDownAltOutlined className='icon'/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className='limit'>16</span>
              <span>1994</span>
            </div>
            <div className="desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem possimus nobis error consequuntur qui natus id consequatur atque tempore odio. 
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}

    </div>
  )
}

export default ListItem
