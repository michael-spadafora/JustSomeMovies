
import Link from 'next/link';
import HeaderLayout from '../components/HeaderLayout';
import Slider from '../components/Slider';
import Head from 'next/head';

const Index = (props) => (
    <div>
      <Head>
        <title>Just Some Movies</title>
        <link href="https://fonts.googleapis.com/css?family=Nunito:900:300" rel="stylesheet"/>
      </Head>
    	<HeaderLayout head/>
      <div className = 'centeredContainer'>
        <div className = 'sliderDiv'>
          <Slider top = {80} left = {250} height = {500} width = {780} /> 
        </div>
      </div>
      {/* //values are all adjustable */}
      {/* we need to replace these with other images for better sizing */}

      {/* <Slider top = {80} left = {940} height = {600} width =  {400}/> */}

      {/* we need to replace these with other images for better sizing */}
      {/* //values are all adjustable */}
      <style jsx global> {`
        body {
         background-color: #f2f2f2;
        }
        .sliderDiv {
          margin: 0 auto
        }
        .centeredContainer {
          text-align: center;
        }
      `}</style>
    </div>
  )
  
  export default Index
