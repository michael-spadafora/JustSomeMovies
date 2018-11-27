<<<<<<< HEAD
import Link from 'next/link'
import HeaderLayout from '../components/HeaderLayout'
import Slider from '../components/Slider';

const Index = (props) => (
    <div>
    	<HeaderLayout head/>
      <Slider top = {80} left = {20} height = {400} width = {900} /> 
      {/* //values are all adjustable */}
      {/* we need to replace these with other images for better sizing */}

      <Slider top = {80} left = {940} height = {600} width =  {400}/>

      {/* we need to replace these with other images for better sizing */}
      {/* //values are all adjustable */}

    </div>
  )
  
  export default Index
=======
import Person from '../components/Person.js'
import Movie from '../components/Movie.js'

export default () => (
    <div>
        <Movie />
    </div>
)
>>>>>>> ba674d9c975cc6f1a31b055abf6dcc1aab7e20bb
