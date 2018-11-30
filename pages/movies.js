//what we want here:
//select * from movies
//sort by title, rating, genre etc dropdown menu
//browsing: only show movies with stars from x to y, only show movies of genre z

import Link from 'next/link'
import HeaderLayout from '../components/HeaderLayout'
import Movie from '../components/Movie'
import SortByMovie from '../components/SortByMovie'


const movies = (props) => (
    <div>
        <Head>
            <title>Movies</title>
            <link href="https://fonts.googleapis.com/css?family=Nunito:900:300" rel="stylesheet"/>
        </Head>
        <HeaderLayout head/>
        <div style={{display:"inline-block",fontSize:"23pt",fontWeight:"bold",paddingLeft:"10px",marginTop:"10px"}}>Movies</div><div style={{marginTop:"10px",position:"relative",float:"right"}}><SortByMovie /></div>
        <Movie />
        <link href="https://fonts.googleapis.com/css?family=Nunito:900:300" rel="stylesheet"/>
        <style jsx global>{`
            body{
                background-color: #f2f2f2;
            }
            div {
                font-family:Nunito;
            }
        `}</style>
    </div>
  )
  
  export default movies
