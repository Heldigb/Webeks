import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ResumeContent from "../components/subPage/ResumeContent"
const ResumePage = () => (
  <Layout>



    <ResumeContent/>


    <SEO title="Page two" />
    {/*<h1>Hi from the second page</h1>*/}
    {/*<p>Welcome to page 2</p>*/}
    {/*<Link to="/">Go back to the homepage</Link>*/}





  </Layout>
)

export default ResumePage
