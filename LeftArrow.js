import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const styles = {
  position: "absolute",
}

const LeftArrow = (props) => {
  styles.top = props.top - props.size
  styles.left = props.left
  return (
    <div className="backArrow" onClick = {props.goToPrevSlide}>
      <FaArrowAltCircleLeft size = {props.size} style={styles}></FaArrowAltCircleLeft>
    </div>
  );
}

export default LeftArrow;