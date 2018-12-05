
import Link from 'next/link'
import HeaderLayout from '../components/HeaderLayout'
import Slider from '../components/Slider';
import Table from '../components/Table'

const searchResults = (props) => (
    <div>
    	<HeaderLayout head/>
      <Table  type = {'movie'} query = {'rami'}/>   
      <Table  type = {'actor'} query = {'rami'} />    
      <Table  type = {'director'} query = {'rami'}/>    
    </div>
)
  
  export default searchResults
