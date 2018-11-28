
import Link from 'next/link'
import HeaderLayout from '../components/HeaderLayout'
import Slider from '../components/Slider';

const searchResults = (props) => (
    <div>
    	<HeaderLayout head/>
        props.search
    </div>
  )
  
  export default searchResults
