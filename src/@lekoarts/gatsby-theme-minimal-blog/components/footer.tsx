/** @jsx jsx */
import { jsx, Link, Container, Box, Flex , Grid} from "theme-ui"
import { theme} from "/src/@lekoarts/gatsby-theme-minimal-blog/gatsby-plugin-theme-ui/index.ts"


const Footer = () => {
  return (
    <footer
    sx={{
      background: t => `linear-gradient(to bottom, ${t.colors.primary}, ${t.colors.muted})`,

      marginLeft: '-50vw',
      marginRight: '-50vw',
      color: 'secondary',
      a: {
        variant: 'links.secondary',
      },
      mb: -5,
      pb: 5,
    }}>
    >
    <Flex sx={{ marginLeft: '50vw', marginRight: '50vw',  }}>
      <Box sx={{ flex: 3 }}>
        <div><img src="/images/amanzi-logo.png" alt="Amanzi logo" style={{ width: '50%', height: 'auto' }}/></div>
        <div style={{ fontSize: '12px' }}>&copy; {new Date().getFullYear()} Amanzi-ATS Contributing National Labs (LANL, LBNL, ORNL, PNNL)</div>
      </Box>

      <Box  sx={{ flex: 1 }}>
        <h3> Overview </h3>
        <div><Link aria-label="Home" href="/"> Home </Link></div>
        <div><Link aria-label="About" href="/about"> About </Link></div>
        <div><Link aria-label="Gallery" href="/gallery"> Gallery </Link></div>
        <div><Link aria-label="References" href="/references"> References </Link></div>
        <div><Link aria-label="Downloads" href="/downloads"> Downloads </Link></div>
      </Box>
  
      <Box  sx={{ flex: 1 }} >
        <h3> AMANZI </h3>
        <div><Link aria-label="GitHub" href="https://github.com/amanzi/amanzi"> GitHub </Link></div>
        <div><Link aria-label="Documentation" href="https://amanzi.github.io/amanzi"> Documentation </Link></div>
      </Box>

      <Box sx={{ flex: 1 }}>
      <h3> ATS </h3>
      <div><Link aria-label="GitHub" href="https://github.com/amanzi/ats"> GitHub </Link></div>
      <div><Link aria-label="Documentation" href="https://amanzi.github.io/ats"> Documentation </Link></div>
      </Box>

    </Flex>
    </footer>
  )
}

export default Footer
