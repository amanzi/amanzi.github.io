/** @jsx jsx */
import * as React from "react"
import { jsx, Link as TLink, useColorMode } from "theme-ui"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"

const HeaderExternalLinks = () => {
  const { externalLinks } = useMinimalBlogConfig()
  const [colorMode] = useColorMode()

  const isDark = colorMode === 'dark'

  const githubImage = isDark ? "/github-mark-dark.png" : "/github-mark-light.png"

  return (
    <React.Fragment>
      {externalLinks && externalLinks.length > 0 && (
        <div sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [1, `18px`] }}>
          {externalLinks.map((link) => (
            <TLink key={link.url} href={link.url} sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={githubImage} alt="Github" style={{ width: '15%', height: 'auto', marginLeft: 'auto' }} />
            </TLink>
          ))}
        </div>
      )}
    </React.Fragment>
  )
}

export default HeaderExternalLinks
