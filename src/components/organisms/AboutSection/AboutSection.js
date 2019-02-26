import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import { tablet } from '../../mediaQueries/default'

import Heading from '../../atoms/Heading/Heading'
import Subtitle from '../../atoms/Subtitle/Subtitle'
import Paragraph from '../../atoms/Paragraph/Paragraph'

const Wrapper = styled.section`padding: 4% 12%;`

const quoteColor = ({ theme }) => theme.colors.primary[0]

const Quote = styled(Subtitle)`
  font-style: italic;
  font-size: 1.2rem;
  line-height: 1.4;
  color: ${quoteColor};

  ${media.greaterThan(tablet)`
    font-size: 1.6rem;
  `}
`

const Card = styled.div`margin: 4rem 0;`

const AdditionalInfo = styled.div``

const AboutSection = () => (
  <Wrapper>
    <Quote>
      "We believe the next generation of innovators and leaders need to be great
      design thinkers." - David Kelley, Founder of IDEO
    </Quote>
    <Card>
      <AdditionalInfo>
        <Subtitle>2004 - 2008</Subtitle>
        <Paragraph>Universidade Católica Portuguesa</Paragraph>
      </AdditionalInfo>
      <Heading>Media Studies</Heading>
      <Paragraph>
        Capitalize on low hanging fruit to identify a ballpark value added
        activity to beta test. Override the digital divide with additional
        clickthroughs from DevOps. Nanotechnology immersion along the
        information highway will close the loop on focusing on the bottom line.
      </Paragraph>
    </Card>
    <Card>
      <AdditionalInfo>
        <Subtitle>2004 - 2008</Subtitle>
        <Paragraph>Universidade Católica Portuguesa</Paragraph>
      </AdditionalInfo>
      <Heading>Media Studies</Heading>
      <Paragraph>
        Capitalize on low hanging fruit to identify a ballpark value added
        activity to beta test. Override the digital divide with additional
        clickthroughs from DevOps. Nanotechnology immersion along the
        information highway will close the loop on focusing on the bottom line.
      </Paragraph>
    </Card>
    <Card>
      <AdditionalInfo>
        <Subtitle>2004 - 2008</Subtitle>
        <Paragraph>Universidade Católica Portuguesa</Paragraph>
      </AdditionalInfo>
      <Heading>Media Studies</Heading>
      <Paragraph>
        Capitalize on low hanging fruit to identify a ballpark value added
        activity to beta test. Override the digital divide with additional
        clickthroughs from DevOps. Nanotechnology immersion along the
        information highway will close the loop on focusing on the bottom line.
      </Paragraph>
    </Card>
    <Card>
      <AdditionalInfo>
        <Subtitle>2004 - 2008</Subtitle>
        <Paragraph>Universidade Católica Portuguesa</Paragraph>
      </AdditionalInfo>
      <Heading>Media Studies</Heading>
      <Paragraph>
        Capitalize on low hanging fruit to identify a ballpark value added
        activity to beta test. Override the digital divide with additional
        clickthroughs from DevOps. Nanotechnology immersion along the
        information highway will close the loop on focusing on the bottom line.
      </Paragraph>
    </Card>
  </Wrapper>
)

export default AboutSection
