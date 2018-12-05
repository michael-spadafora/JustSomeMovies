import React from 'react'
import Img from 'react-image'
import Link from 'next/link'

const Slide = ({ image, title, movie_id }) => {

    
    const styles = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%'
    }
    return (
        <div className="slide">
            <Link as={`/m/${movie_id}`} href={`/movie?id=${movie_id}`}><Img src={image} /></Link>
            <div className="slideText"> <div className="slideTitle">{title}</div> </div>
            <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet"/>
            <style jsx global> {`
                .slideText {
                    position: relative;
                    bottom:21%;
                    z-index:3;
                    font-size:30px;
                    color:white;
                    width:100%;
                    height:20%;
                    background-color:black;
                    opacity:0.8;
                }
                .slideTitle {
                    margin: 0;
                    position: absolute;
                    text-align:center;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-family:Nunito;
                    font-weight:bold;
                }
                .slide {
                    cursor:pointer;
                }
            `}</style>
        </div>
    )
  }
export default Slide