import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'

import PostViewLayout from '../components/Layouts/PostViewLayout/PostViewLayout'
import Heading from '../components/atoms/Heading/Heading'
import Subtitle from '../components/atoms/Subtitle/Subtitle'
import TextLabel from '../components/atoms/TextLabel/TextLabel'

const primaryColor = ({ theme }) => theme.colors.primary[0]

const StyledTextLabel = styled(TextLabel)`
  display: block;
  color: ${primaryColor};
`

export const BlogPostTemplate = ({
  content,
  contentComponent,
  coverPhoto,
  description,
  date,
  author,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <PostViewLayout coverPhoto={coverPhoto ? coverPhoto : null}>
      {helmet || ''}
      {date ? <StyledTextLabel>{date}</StyledTextLabel> : null}
      {author ? <StyledTextLabel>{author}</StyledTextLabel> : null}
      <Heading level={1}>{title}</Heading>
      <Subtitle>{description}</Subtitle>
      <PostContent content={content} />
      {tags && tags.length ? (
        <div style={{ marginTop: `4rem` }}>
          <h4>Tags</h4>
          <ul className="taglist">
            {tags.map(tag => (
              <li key={tag + `tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </PostViewLayout>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      author={post.frontmatter.author ? post.frontmatter.author : null}
      date={post.frontmatter.date ? post.frontmatter.date : null}
      description={post.frontmatter.description}
      coverPhoto={
        post.frontmatter.coverPhoto ? post.frontmatter.coverPhoto : null
      }
      helmet={
        <Helmet titleTemplate="%s | Blog">
          <title>{`${post.frontmatter.title}`}</title>
          <meta
            name="description"
            content={`${post.frontmatter.description}`}
          />
        </Helmet>
      }
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        author
        coverPhoto
        tags
      }
    }
  }
`
