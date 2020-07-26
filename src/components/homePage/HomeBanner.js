import React from "react"
import {Banner, Background, BannerTitle, Canvas, Headline} from '../../styles/homeStyles'


const HomeBanner = () => {

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
    <Canvas>
      <BannerTitle>
        <Headline>Let's</Headline>
        <Headline>Design</Headline>
      </BannerTitle>
    </Canvas>


    </Banner>
  )
}
export default HomeBanner