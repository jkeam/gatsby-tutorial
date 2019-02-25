import React from 'react'
import Header from './header'
import { StaticQuery, graphql } from 'gatsby'

export default ({children, data}) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
}
    render={data => (
      <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        <Header />
        {data.site.siteMetadata.title}
        {children}
      </div>
    )}
  />
)

