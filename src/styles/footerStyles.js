import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const FooterNav = styled(motion.div)`
  height: 300px;
  margin-top: 296px;
      @media (max-width: 960px){
        height: 250px;
  margin-top: 150px;
      }
`

export const FooterContent = styled.div`
  color: ${props => props.theme.accent};
  font-size: 22px;
  font-weight: 600;
  line-height: 8px;
  flex: 1;
   @media (max-width: 960px){
  
   text-align: center;
    }
  ${props =>
  props.wider &&
  css`
      flex: 2;
    `}
`

export const FooterSocial = styled.div`
  display: flex;
  position: relative;
  a {
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    padding: 8px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`
