import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {normalize} from "styled-normalize"

// Style Components
import {createGlobalStyle, ThemeProvider} from "styled-components"


// Components
import Header from "./header"
import CustomCursor from "../components/customCursor"
import Navigation from "./navigation"
import Footer from "./footer"

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext
} from "../context/globalContext"


//
const GlobalStyle = createGlobalStyle`
${normalize}

* {
  text-decoration: none;
  cursor: none;
      @media (max-width: 960px){
            opacity: 1!important;
       
    }
}
ul{list-style: none;}
html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
}
body {
  font-size: 16px;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  overscroll-behavior: none;
  overflow-x: hidden;
  transition: background 0.3s ease;
  transition: color 0.3s ease;
}
`
//background: ${props => props.theme.background};



const Layout = ({ children }) => {
  const dispatch = useGlobalDispatchContext()
  const { cursorStyle, currentTheme } = useGlobalStateContext()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [hamburgerPosition, setHamburgerPosition] = useState({
    x:0,
    y:0,

  })

  const darkTheme = {
    background:'#1d1d1d',
    text:'#fff',
    accent:"#F8A306",
    left:`${hamburgerPosition.x}px`,
    top:`${hamburgerPosition.y}px`,
  }
  const lightTheme = {
    background:'#ecebeb',
    text:'#1d1d1d',
    accent:"#F8A306",
    left:`${hamburgerPosition.x}px`,
    top:`${hamburgerPosition.y}px`,
  }

  const onCursor = cursorType => {
    cursorType = (cursorStyle.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }
// MENU STATE CURSOR
const [ toggleMenu, setToggleMenu] = useState(false)




  return (
    <ThemeProvider theme={currentTheme === 'dark'? darkTheme:lightTheme}>
    <GlobalStyle/>
    <CustomCursor toggleMenu={toggleMenu}/>
    <Header
      onCursor={onCursor}
      toggleMenu={toggleMenu}
      setToggleMenu={setToggleMenu}
      hamburgerPosition={hamburgerPosition}
      setHamburgerPosition={setHamburgerPosition}
    />
      <Navigation toggleMenu={toggleMenu}
                  setToggleMenu={setToggleMenu}
                  onCursor={onCursor} />
      <main>{children}</main>

      <Footer
        onCursor={onCursor}
        hamburgerPosition={hamburgerPosition}
        setHamburgerPosition={setHamburgerPosition}
      />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
