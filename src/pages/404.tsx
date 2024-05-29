/** @jsx jsx */
import * as React from "react"
import type { PageProps } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import "/src/components/billboard/styles.css"
import { Grid, Box, Container, jsx, get , Button} from "theme-ui"

const NotFound = (_props: PageProps) => (
  <Layout>
    <Box sx={{
      background: t => `linear-gradient(to bottom, ${t.colors.primary}, ${t.colors.divide})`, 
      marginLeft: '-50vw',
      marginRight: '-50vw',
      mb: -25,
      pb: 200,
      pt: 150,
      mt: -130,
    }}>
      <div sx={{ fontSize: [8], fontWeight: `bold`, color: `heading` }}>
        <center>Page not found</center>
      </div>

      <div sx={{ fontSize: [4], color: `subheading` }}>
        <center>The requested page could not be found.</center>
      </div>
    </Box>
  </Layout>
)

export default NotFound
