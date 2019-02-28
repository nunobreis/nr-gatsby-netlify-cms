import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import PostViewLayout from '../components/Layouts/PostViewLayout/PostViewLayout'
import Heading from '../components/atoms/Heading/Heading'
import Paragraph from '../components/atoms/Paragraph/Paragraph'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${totalCount === 1
      ? ''
      : 's'} tagged with “${tag}”`

    return (
      <PostViewLayout>
        <Helmet title={`${tag} | ${title}`} />
        <Heading level={3}>{tagHeader}</Heading>
        <ul>{postLinks}</ul>
        <Paragraph>
          <Link to="/tags/">Browse all tags</Link>
        </Paragraph>
      </PostViewLayout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
