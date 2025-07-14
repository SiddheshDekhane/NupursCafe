import React from "react";
import Layout from "../../Components/Layout/Layout";
import Section1 from "./Section1";
import '../../styles/HomwStyles.css'
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section7 from "./Section7";
import Footer from "../../Components/Layout/Footer";


function Home(){
    return (
      <>
      <Layout>
        <Section1 /> 
        <Section2 /> 
        <Section3 />
        <Section4 />
        <Section7 />
        <Footer/>
      </Layout>
      </>
    )
}

export default Home