//what we want here:
//select * from actors
//sort by name, age, salary etc dropdown menu
//

import Link from 'next/link'
import HeaderLayout from '../components/HeaderLayout'
import SortByMovie from '../components/SortByMovie'
import Actor from '../components/Actor'
import Head from 'next/head';

const actors = (props) => (
    <div>
        <Head>
            <title>Actors</title>
            <link href="https://fonts.googleapis.com/css?family=Nunito:900:300" rel="stylesheet"/>
        </Head>
        <HeaderLayout head/>
        <div style={{display:"inline-block",fontSize:"23pt",fontWeight:"bold",paddingLeft:"10px",marginTop:"10px"}}>Actors</div><div style={{marginTop:"10px",float:"right"}}><SortByMovie /></div>
        <Actor />
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
