
import Link from 'next/link'
import HeaderLayout from '../components/HeaderLayout'
import Slider from '../components/Slider';
import Table from '../components/Table'

const data = [{
  name: 'Roy Agasthyan',
  age: 26
}, {
  name: 'Sam Thomason',
  age: 22
}, {
  name: 'Michael Jackson',
  age: 36
}, {
  name: 'Samuel Roy',
  age: 56
}, {
  name: 'Rima Soy',
  age: 28
}, {
  name: 'Suzi Eliamma',
  age: 28
}]

const columns = [{
  Header: 'Name',
  accessor: 'name'
}, {
  Header: 'Age',
  accessor: 'age'
}]


const searchResults = (props) => (
    <div>
    	<HeaderLayout head/>
      <Table data = {data} type = {'movie'}/>    
    </div>
)
  
  export default searchResults
