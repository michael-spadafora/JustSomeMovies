import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa';

const styles = {
  position: "absolute",
  top: 200,
  left: 575
}
const LeftArrow = (props) => {
  return (
    <div className="forwardArrow" onClick = {props.goToNextSlide}>
      <FaArrowAltCircleRight size = '50px' style={styles}></FaArrowAltCircleRight>
    </div>
  );
}

export default LeftArrow;