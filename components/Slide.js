import React from 'react'
import Img from 'react-image'

const Slide = ({ image }) => {

    
    const styles = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%'
    }
    return (
        <div className="slide">
            <Img src={image} />
        </div>
    )
  }
export default Slide