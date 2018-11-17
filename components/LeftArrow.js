import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const styles = {
  position: "absolute",
  top: 200,
  left: 25
}
const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick = {props.goToPrevSlide}>
      <FaArrowAltCircleLeft size = '50px' style={styles}></FaArrowAltCircleLeft>
    </div>
  );
}

export default LeftArrow;