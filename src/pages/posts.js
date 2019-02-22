import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import PostsListLayout from '../components/Layouts/PostListLayout/PostListLayout'

import PostCard from '../components/molecules/PostCard/PostCard'

export default class Posts extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section>
        <PostsListLayout>
          {posts.map(({ node: post }) => (
            <PostCard
              key={post.id}
              to={post.fields.slug}
              date={post.frontmatter.date}
              title={post.frontmatter.title}
              author={post.frontmatter.author}
              sinopse={post.excerpt}
            />
          ))}
        </PostsListLayout>
      </section>
    )
  }
}

Posts.propTypes = {
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
            author
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
