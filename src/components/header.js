import React, {useEffect} from "react"
import {Link} from "gatsby"
//Styles
import {HeaderNav,Logo,Menu} from "../styles/headerStyles"
import {Container, Flex} from "../styles/globalStyles"
//Context
import {useGlobalStateContext, useGlobalDispatchContext} from "../context/globalContext"


const Header = () => {

  const dispatch = useGlobalDispatchContext()
  const {currentTheme} = useGlobalStateContext()
  const toggleTheme = () => {
     if (currentTheme === 'dark') {
       dispatch({type: 'TOGGLE_THEME', theme: "light"})
     }else {
       dispatch({type: 'TOGGLE_THEME', theme: "dark"})
     }
  }

useEffect(()=> {
  window.localStorage.setItem('theme', currentTheme)
},[currentTheme])

  return(
    <HeaderNav
    animate={{y:0, opacity:1}}
    initial={{y:-72, opacity:0}}
    transition={{ duration:1, ease: [.6, .05, -.01, 0.9]}}

    >
      <Container>
        {console.log(currentTheme)}
        <Flex spaceBetween noHeight>
            <Logo>
              <Link to='/'>WEB</Link>
              <span onClick={toggleTheme}></span>
              <Link to='/'>PRESS</Link>
            </Logo>
          <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
  }


export default Header

