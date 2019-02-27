import React from 'react'
import styled from 'styled-components'

import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import Link from '../../atoms/Link/Link'

import Instagram from './Instagram'
import LinkedIn from './LinkedIn'
import Facebook from './Facebook'
import Twitter from './Twitter'
import Pinterest from './Pinterest'
import GitHub from './GitHub'

const colorPrimary = ({ theme }) => theme.colors.ascendant[0]

const Wrapper = styled.section`
  text-align: center;
  padding: 4%;
`

const StyledLink = styled(Link)`
  margin: 4rem 0!important;
  & > p {color: ${colorPrimary};}
`

const ContactSection = () => (
  <Wrapper>
    <Heading>Want to reach me?</Heading>
    <Paragraph>
      Choose one of my personal social networks and drop me a message. Don't be
      shy I will reply :)
    </Paragraph>

    <StyledLink href="https://www.instagram.com/nunobreis/" target="blank">
      <Instagram />
      <Paragraph>@nunobreis</Paragraph>
    </StyledLink>

    <StyledLink href="https://www.linkedin.com/in/nunobreis/" target="blank">
      <LinkedIn />
      <Paragraph>/in/nunobreis/</Paragraph>
    </StyledLink>

    <StyledLink href="https://www.facebook.com/nunobelemreis" target="blank">
      <Facebook />
      <Paragraph>/nunobelemreis</Paragraph>
    </StyledLink>

    <StyledLink href="https://twitter.com/nunobreis" target="blank">
      <Twitter href="" />
      <Paragraph>/nunobelemreis</Paragraph>
    </StyledLink>

    <StyledLink href="https://www.pinterest.pt/nunobreis/" target="blank">
      <Pinterest />
      <Paragraph>/nunobreis</Paragraph>
    </StyledLink>

    <StyledLink href="https://github.com/nunobreis" target="blank">
      <GitHub />
      <Paragraph>/nunobreis</Paragraph>
    </StyledLink>
  </Wrapper>
)

export default ContactSection
