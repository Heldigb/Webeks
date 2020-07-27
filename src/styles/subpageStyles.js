import styled from "styled-components"
import { motion } from "framer-motion"



//Content Section
export const SubPageContentSection = styled(motion.div)`
height: auto;
padding-top: 15%;
`

//Works Section
export const Works = styled.div`
height: auto;
width: 100%;
padding-top: 15%;
li {
margin-top: 150px;
}
`
//Works Content
export const WorksDescription = styled.div`
color: ${props => props.theme.text};
width: 35%;

 @media (max-width: 960px){
    width: 100%;
    
    }
h3 {
  width: 100%;
  font-size: 2.3rem;
  font-weight: 400;
  color: ${props => props.theme.accent};
}

p{
  width: 100%;
  font-size: 1rem;
  line-height: 1.3rem;
  padding-right: 50px;
}
`
export const Posts = styled(motion.div)`
  width: 100%;
  height: auto;
  display: block;
    li {
    padding: 48px;
    border-top:1px solid #bebebe;
      &:hover {
      opacity: 0.8;
      }
    }
  `

export const PostsContent = styled.div`
  width: 100%;
  height: auto;
  display: block;
  color: ${props => props.theme.text};
  display: inline-flex;
  @media (max-width: 960px){
   
    
    flex-direction: column;
    }
h3 {
  width: 20%;
  font-size: 2.3rem;
  font-weight: 400;
  color: ${props => props.theme.accent};
  padding-right: 48px;
    @media (max-width: 960px){
  width: 100%;
    }
}
p{
  float: left;
  width: 70%;
  font-size: 1rem;
  line-height: 1.3rem;
     @media (max-width: 960px){
  width: 100%;
    }
}
`

export const ImgWrap = styled.div`
  position: relative;
  z-index: -1;
  width: 60%;
  height: 350px;
  display: block;
  overflow: hidden;
  float: right;
    @media (max-width: 960px){
    width: 100%;
      float: none;
    }
`

export const Content = styled(motion.h2)`
  width: 53%;
  font-size: 2.3rem;
  font-weight: 400;
  margin-left: 124px;
  color: ${props => props.theme.text};
   @media (max-width: 960px){
      margin-top: 100px;
      width: 80%;
      margin-left: 30px;
    }
    @media (max-width: 500px){
      width: 100%;
      margin-left: 0;
    }
`
export const Description = styled(motion.h2)`
  padding-top: 5%;
  width: 53%;
  font-size: 1rem;
  font-weight: 400;
  margin-left: 124px;
  line-height: 1.5rem;
  color: ${props => props.theme.text};
   @media (max-width: 960px){
      width: 80%;
      margin-left: 60px;
    }
    @media (max-width: 500px){
      width: 100%;
      margin-left: 0;
    }
`

//Featured Section
export const HomeFeaturedSection = styled(motion.div)`
  margin-bottom: 200px;
  position: relative;
  a {
    margin-bottom: 200px;
    position: relative;
    display: block;
  }
`

export const FeaturedContent = styled(motion.div)`
  height: 480px;
  width: 100%;
  padding: 56px 124px;
  box-sizing: border-box;
  color: ${props => props.theme.text};
  h3 {
    font-size: 1.4rem;
  }
  .meta {
    display: flex;
    h4 {
      &:last-child {
        margin-left: 1rem;
      }
    }
  }
  .featured-title {
    position: absolute;
    bottom: -128px;
    font-size: 7rem;
    font-weight: 900;
    line-height: 90px;
    margin: 0;
    .arrow {
      width: 120px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;
      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;
        path {
          fill: ${props => props.theme.text};
        }
      }
    }
  }
`

export const FeaturedVideo = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 480px;
  top: 0;
  display: block;
  overflow: hidden;
`



export const FeaturedProjects = styled.div`
  margin-top: 200px;
  button {
    background:  ${props => props.theme.accent};
    color:  #fff;
    position: relative;
    padding: 20px;
    display: block;
    text-align: left;
    font-size: 1.4rem;
    line-height: 1;
    font-weight: 600;
    border: none;
    span {
      margin-right: 108px;
      display: block;
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 20px;
      width: 35px;
      height: 7px;
      display: block;
      background: #fff;
      transform: translateY(-50%);
    }
    &:before {
      margin-top: -8px;
    }
    &:after {
      margin-top: 8px;
    }
  }
`

//ABOUT SECTION

export const HomeAboutSection = styled(motion.div)`
  /* margin-bottom: 200px; */
`
export const About = styled.div`
  width: 100%;
  h2 {
    width: 60%;
    font-size: 2.3rem;
    font-weight: 400;
    margin-left: 124px;
    color: ${props => props.theme.text};
  }
  p {
    max-width: 440px;
    font-size: 1rem;
    line-height: 1.6rem;
    margin-left: 124px;
    color: ${props => props.theme.text};
  }
`
export const Services = styled.div`
  color: ${props => props.theme.text};
`

//Accordion

export const AccordionHeader = styled(motion.div)`
  width: 100%;
  color: ${props => props.theme.accent};
  height: 32px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.15rem;
  margin: 8px 0;
  }
`
export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 4px;
    background:  ${props => props.theme.accent};
    transition: all 0.1s ease-in-out;
  }
`

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;
  span {
    width: 100%;
    margin: 8px 0;
    font-size: 0.875rem;
    color:  ${props => props.theme.accent};
    display: block;
    font-weight: 300;
  }
`
