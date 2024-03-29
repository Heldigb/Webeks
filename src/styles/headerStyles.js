import styled from "styled-components"
import {motion} from "framer-motion"




export const HeaderNav = styled(motion.div)`
  height: 0;
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
`
export const Logo = styled.div`
a{
  font-size: 1.8rem;
  font-weight: 800;
  color: ${props => props.theme.text}
}

span{
  height: 1rem;
  width: 1rem;
  background: ${props => props.theme.accent};
  margin: 0 4px;
  border-radius: 100%;
  display: inline-block;
  position: relative;
  bottom: 2px;
}
`
export const Menu = styled.div`
 button{
   transform-origin: center;
   border: none;
   padding: 20px;
   background: none;
   outline: none;
     span{
       width: 36px;
       background: ${props => props.theme.accent};
       display: block;
       height: 8px;
       margin: 8px;
     }
 }
`
