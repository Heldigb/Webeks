import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostsContent from "../components/subPage/PostsContent"
import { useGlobalDispatchContext, useGlobalStateContext } from "../context/globalContext"

// const PostsPage = () => (



const PostsPage = props => {
  const dispatch = useGlobalDispatchContext()
  const { cursorStyle } = useGlobalStateContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyle.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }
  return (
  <Layout>
    <PostsContent onCursor={onCursor} />
    <SEO title="Page two" />
    {/*<h1>Hi from the second page</h1>*/}
    {/*<p>Welcome to page 2</p>*/}
    {/*<Link to="/">Go back to the homepage</Link>*/}
  </Layout>
  )

}

export default PostsPage
