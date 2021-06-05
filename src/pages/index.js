import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import AboutSection from "../components/sections/AboutSection"
import ResumeSection from "../components/sections/ResumeSection"
import ProjectsSection from "../components/sections/ProjectsSection"
import ContactSection from "../components/sections/ContactSection"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <AboutSection />
      <ResumeSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  )
}

export default IndexPage
