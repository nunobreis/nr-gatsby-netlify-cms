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
  margin: 4rem 0 !important;
  & > p {
    color: ${colorPrimary};
  }
`

const StyledLabel = styled.label`
  font-size: 1.2rem;
  margin: 1rem;
  cursor: pointer;
`

const Block = styled.div`margin: 2rem 0;`

const ContactSection = () => (
  <Wrapper>
    <Heading level={3}>Want to reach me?</Heading>
    <Paragraph>
      Choose one of my personal social networks and drop me a message. Don't be
      shy I will reply :)
    </Paragraph>

    <Block>
      <StyledLink href="https://www.instagram.com/nunobreis/" target="blank">
        <Instagram />
        <StyledLabel>@nunobreis</StyledLabel>
      </StyledLink>
    </Block>

    <Block>
      <StyledLink href="https://www.linkedin.com/in/nunobreis/" target="blank">
        <LinkedIn />
        <StyledLabel>/in/nunobreis/</StyledLabel>
      </StyledLink>
    </Block>

    <Block>
      <StyledLink href="https://www.facebook.com/nunobelemreis" target="blank">
        <Facebook />
        <StyledLabel>/nunobelemreis</StyledLabel>
      </StyledLink>
    </Block>

    <Block>
      <StyledLink href="https://twitter.com/nunobreis" target="blank">
        <Twitter href="" />
        <StyledLabel>/nunobelemreis</StyledLabel>
      </StyledLink>
    </Block>

    <Block>
      <StyledLink href="https://www.pinterest.pt/nunobreis/" target="blank">
        <Pinterest />
        <StyledLabel>/nunobreis</StyledLabel>
      </StyledLink>
    </Block>

    <Block>
      <StyledLink href="https://github.com/nunobreis" target="blank">
        <GitHub />
        <StyledLabel>/nunobreis</StyledLabel>
      </StyledLink>
    </Block>
  </Wrapper>
)

export default ContactSection
