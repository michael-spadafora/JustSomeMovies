
import Link from 'next/link'
import HeaderLayout from '../components/HeaderLayout'
import Slider from '../components/Slider';
import Table from '../components/Table'

const data = [{
  name: ['Roy Agasthyan', 'test'],
  age: 26
}, {
  name: 'Sam Thomason',
  age: 22
}]


const searchResults = (props) => (
    <div>
    	<HeaderLayout head/>
      <Table data = {data} type = {'movie'}/>    
    </div>
)
  
  export default searchResults
