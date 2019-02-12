import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PostListLayout from '../components/Layouts/MainLayout/MainLayout'

import Heading from '../components/atoms/Heading/Heading'
import Link from '../components/atoms/Link/Link'
import BackgroundSection from '../components/molecules/BackgroundSection/BackgroundSection'

export default class PostsList extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <PostListLayout>
        <section>
          <BackgroundSection />
          <div>
            <Heading>Latest Stories</Heading>
          </div>
          {posts.map(({ node: post }) => (
            <div
              style={{ border: '1px solid #333', padding: '2em 4em' }}
              key={post.id}
            >
              <p>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                <span> &bull; </span>
                <small>{post.frontmatter.date}</small>
              </p>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link to={post.fields.slug}>Keep Reading →</Link>
              </p>
            </div>
          ))}
        </section>
      </PostListLayout>
    )
  }
}

PostsList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query PostListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
