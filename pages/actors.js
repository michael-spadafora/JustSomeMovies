//what we want here:
//select * from actors
//sort by name, age, salary etc dropdown menu
//

import Link from 'next/link'
import HeaderLayout from '../components/HeaderLayout'
import SortByMovie from '../components/SortByMovie'
import Person from '../components/Person'

const actors = (props) => (
    <div>
        <HeaderLayout head/>
        <div style={{display:"inline-block",fontSize:"23pt",fontWeight:"bold",paddingLeft:"10px"}}>Actors</div><div style={{float:"right"}}><SortByMovie /></div>
        <Person />
        <link href="https://fonts.googleapis.com/css?family=Nunito:900:300" rel="stylesheet"/>
        <style jsx>{`
            body{
                background-color: #f2f2f2;
            }
            div {
                font-family:Nunito; 
            }
        `}</style>
    </div>
  )
  
  export default actors
