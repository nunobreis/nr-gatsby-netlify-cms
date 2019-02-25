import React from 'react'
import styled from 'styled-components'

import Heading from '../../atoms/Heading/Heading'
import Subtitle from '../../atoms/Subtitle/Subtitle'
import Paragraph from '../../atoms/Paragraph/Paragraph'

const Wrapper = styled.section`padding: 4% 12%;`

const Quote = styled(Subtitle)`
  font-style: italic;
  font-size: 1.8rem;
  line-height: 1.4;
`

const Card = styled.div`margin: 4rem 0;`

const AdditionalInfo = styled.div``

const AboutSection = () => (
  <Wrapper>
    <Quote>
      Leverage agile frameworks to provide a robust synopsis for high level
      overviews. Iterative approaches to corporate strategy foster collaborative
      thinking to further the overall value proposition.
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
