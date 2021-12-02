import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HomePage from "../components/HomePage/HomePage"
import { useEffect } from "react"

const IndexPage = () => {
  useEffect(() => {
    if (typeof window == `undefined`) {
      window = window
    }
  })
  return (
    <>
      <HomePage />
    </>
  )
}

export default IndexPage
