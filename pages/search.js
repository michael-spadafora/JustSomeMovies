
import HeaderLayout from '../components/HeaderLayout'
import Table from '../components/Table'

const data = [{
  name: ['Roy Agasthyan', 'test'],
  age: 26
}, {
  name: 'Sam Thomason',
  age: 22
}]

const query = {}


const searchResults = (props) => (
    <div>
    	<HeaderLayout head/>
      <a> MOVIES </a>
      <Table data = {data} type = {'movie'} />   
      <a> ACTORS </a>
      <Table data = {data} type = {'actor'}  />    
      <a> DIRECTORS </a>
      <Table data = {data} type = {'director'} />    
    </div>
)
  
export default searchResults
