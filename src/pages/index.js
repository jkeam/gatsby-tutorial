import React, { Component } from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import { rhythm } from "../utils/typography"

class Hello extends Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <div>
          {data.site.siteMetadata.title}
          <p>
            Hello There All!
          </p>
        </div>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3 style={{marginBottom: rhythm(1/4)}}>
              <Link to={`${node.fields.slug}`}>
                {node.frontmatter.title}{" "}
                  — {node.frontmatter.date}
              </Link>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Hello
