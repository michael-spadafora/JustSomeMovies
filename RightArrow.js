import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa';

const styles = {
  position: "absolute",
}
const LeftArrow = (props) => {
  styles.top = props.top - props.size
  styles.left = props.right - props.size
  return (
    <div className="forwardArrow" onClick = {props.goToNextSlide}>
      <FaArrowAltCircleRight size = {props.size} style={styles}></FaArrowAltCircleRight>
    </div>
  );
}

export default LeftArrow;