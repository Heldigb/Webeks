import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {normalize} from "styled-normalize"

// Style Components
import {createGlobalStyle, ThemeProvider} from "styled-components"


// Components
import Header from "./header"

// Context
import {useGlobalStateContext} from "../context/globalContext"


// cursor: none;
const GlobalStyle = createGlobalStyle`
${normalize}

* {
  text-decoration: none;
}
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
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const darkTheme = {
    background:'#1d1d1d',
    text:'#fff',
    accent:"#e8aa1b"
  }
  const lightTheme = {
    background:'#ecebeb',
    text:'#1d1d1d',
    accent:"#e8aa1b"
  }

  const {currentTheme} = useGlobalStateContext()

  return (
    <ThemeProvider theme={currentTheme === 'dark'? darkTheme:lightTheme}>
    <GlobalStyle/>
    <Header/>
    <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
