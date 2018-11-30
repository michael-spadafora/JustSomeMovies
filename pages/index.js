
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
      <style jsx global> {`
        body {
         background-color: #f2f2f2;
        }
      `}</style>
    </div>
  )
  
  export default Index
