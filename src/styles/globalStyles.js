import styled, {css} from "styled-components"

export const Container = styled.div`

  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;
 
@media (min-width: 960px){
  max-width: 890px;
}
@media (min-width: 1024px){
  max-width: 960px;
}
@media (min-width: 1216px){
  max-width: 1152px;
}
@media (min-width: 1408px){
  max-width: 1244px;
}

${props => props.fluid && css`

  background: blue;
  padding: 0;
  margin: 0;
  max-width: 100%;
`}
`

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;


  ${props=> props.spaceBetween && css`
  justify-content: space-between;
  `}
  
  ${props=> props.flexEnd && css`
  justify-content: flex-end;
  `}
    @media (max-width: 960px){
${props=> props.flexEnd && css`
  justify-content: flex-start;
  `}
      }
  ${props=> props.alignTop && css`
  align-items: top;
  `}
  
  ${props=> props.noHeight && css`
  height: 0;
  `}  
`


export const FlexMobile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
     @media (max-width: 960px){
    flex-direction: column;
    overflow-x: auto;

    }

  ${props=> props.spaceBetween && css`
  justify-content: space-between;
  `}
  
  ${props=> props.flexEnd && css`
  justify-content: flex-end;
  `}
  
  ${props=> props.alignTop && css`
  align-items: top;
  `}
  
  ${props=> props.noHeight && css`
  height: 0;
  `}  
`

export const Cursor = styled.div`
  position: absolute;
  top:0;
  left:0;
  width: 32px;
  height: 32px;
  background: ${props => props.theme.accent};
  border-radius: 100%;
  transform: translate(-50%,-50%);
  transition: all .1s ease-in-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;
  &.pointer {
    border: 4px solid ${props => props.theme.text}!important;
  }
  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${props => props.theme.accent};
    }
    &.nav-open {
    background: ${props => props.theme.text};
    }
    
    &.locked {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${props => props.theme.accent};
    top: ${props => props.theme.top} !important;
    left: ${props => props.theme.left} !important;
    }
    
    @media (max-width: 768px){
     display: none;
    }
`
