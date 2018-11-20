import Link from 'next/link'
import Header from '../components/Header'
import Slider from '../components/Slider';

const Index = (props) => (
    <div>
      <Slider top = {10} left = {20} height = {0} width = {0} /> //values are all adjustable

      <Slider top = {100} left = {800} width = {200} height =  {300}/>
      <p>Hello Next.js</p>
    </div>
  )
  
  export default Index
