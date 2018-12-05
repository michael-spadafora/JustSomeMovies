
import React, { Component } from 'react'
import Slide from '../components/Slide'
import LeftArrow from '../components/LeftArrow'
import RightArrow from '../components/RightArrow'

export default class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
      currentIndex: 0,
      translateValue: 0,
      top: props.top,
      left: props.left,
      width: props.width,
      height: props.height
    }
  }

  getMovies = _ => {
    // Gets the data from the server and converts the json to state value.
    // Check server.js for documentation on data routing
    fetch('http://localhost:4000/movies')
        .then(response => response.json())
        .then(response => this.setState({images: response.movies}))
        .catch(err => console.error(err))
  }

  goToPrevSlide = () => {
    if(this.state.currentIndex <= 0) {
        return this.setState({
          currentIndex: 0, //should end up being prevState.currentIndex - 1
          translateValue: 0 //should end up being total number of slides * slide size
        })
      }

    this.setState(prevState => ({
    currentIndex: prevState.currentIndex - 1 ,
    translateValue: prevState.translateValue + (this.slideWidth())
    }));

  }

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    
    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }
  slideHeight = () => {
    return document.querySelector('.slide').clientHeight
 }

 //if we dont set the size of the items, the default size of slider is size of the slide
 componentDidMount = () => {
   if (this.state.height === 0) {
    this.setState(prevState => ({
      height: this.slideHeight()
    }))
  }

  if (this.state.width === 0) {
    this.setState(prevState => ({
      width: this.slideWidth()
    }))
   }
   this.getMovies();
 }

  render() {
    return (
      <div className="slider" style={{
          position: 'absolute',
          top: this.state.top,
          left: this.state.left,
          width: this.state.width,
          height: this.state.height,
          overflow: 'hidden'
      }}>

        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s',
            display: 'flex',
          }}>
            {
              this.state.images.map(({backdrop_url, title, movie_id}, i) => (
                <Slide key={i} image={"https://image.tmdb.org/t/p/w780" + backdrop_url} title={title} movie_id={movie_id} />
              ))
            }
        </div>

            <div className = "arrow-wrapper" style={{
                display:'flex'
            }}>
             
        <LeftArrow
         goToPrevSlide={this.goToPrevSlide}
         top = {this.state.height/2}
         left = {this.state.width/25}
         size = {this.state.height / 10}

        />

        <RightArrow
         goToNextSlide={this.goToNextSlide}
         top = {this.state.height/2}
         right = {this.state.width - this.state.width/25}
         size = {this.state.height / 10}

        />
        </div>
      </div>
    );
  }
}
