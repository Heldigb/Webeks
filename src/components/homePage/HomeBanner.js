import React from "react"
import {Banner, Background, BannerTitle, Headline} from '../../styles/homeStyles'


const HomeBanner = () => {



  const parent = {
    initial: {y: 800},
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const child = {
    initial: {y: 800},
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease:[.6, 0.05, -0.01, 0.9],
      },
    },
  }

  return(
    <Banner>
     <Background>
       <video
       height='100%'
       width='100%'
       loop
       autoPlay
       src={require("../../assets/video/video.mp4")}
       />
     </Background>
    {/*<Canvas/>*/}
      <BannerTitle variants={parent} initial='initial' animate='animate'>
        <Headline variants={child}>LET'S</Headline>
        <Headline variants={child}>CODE</Headline>
      </BannerTitle>



    </Banner>
  )
}
export default HomeBanner