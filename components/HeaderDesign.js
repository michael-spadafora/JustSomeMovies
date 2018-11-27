import Link from 'next/link'
import Img from 'react-image'


const linkStyle = {
  marginRight: 15
}

const iconStyle = {
  marginRight:0,
  marginTop:0,
  height: 'auto',
  width: 'auto', 
  display: 'inline',
  'max-width': '100px', 
  'max-height': '120px'
}

const HeaderDesign = (props) => {
  return (
     <nav className="mainHead">
        <ul className="navbar-nav">
            <Link href="/"><a><img src="https://i.ibb.co/LtLp5Ww/logo.png" alt="logo" border="0" style={iconStyle}/> </a></Link>
            {/* <Link href="/"><a className="nav-link">JSM</a></Link> */}
            {/* assuming we dont need the above since our logo is now usable */}
            <Link href="/"><a className="nav-link">Movies</a></Link>
            <Link href="/"><a className="nav-link">Actors</a></Link>
            <input className="search" type="search" placeholder="Search" aria-label="Search"/>
            <form action="http://google.com"> 
            {/* replace the above link with our search page*/}
              <button type="Searchbutton">Search</button>
            </form>
        </ul>

        
        <style jsx>{`


          mainHead {
            margin: 0;
            width: 100%;
            font-family: Arial, Helvetica, sans-serif;
          }

          .mainHead {
            width: 100%;
            overflow: hidden;
            background-color: #333;
          }

          .mainHead a {
            float: left;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
            font-family: Arial
          }

          .mainHead a:hover {
            background-color: #ddd;
            color: black;
          }

          .mainHead a.active {
            background-color: #4CAF50;
            color: white;
          }

          input {
              margin-right: 20px;
              float: right;
              center
              text-align: center;
              padding: 7px 7px;
              text-decoration: none;
              font-size: 17px;
              font-family: Arial
              height: 30px;
              background-color: #f2f2f2;
          }

          button {
              margin-right: 10px;
              float: right;
              text-align: center;
              padding: 7px ;
              text-decoration: none;
              font-size: 17px;
              height: 38px;
              font-family: Arial
          }


      `}</style>
    </nav>
  )};

export default HeaderDesign





