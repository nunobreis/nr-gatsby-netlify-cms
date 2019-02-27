import React from 'react'

import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'

import {
  Wrapper,
  Quote,
  QuoteAuthor,
  Date,
  Card,
  Category,
} from './AboutSection.styles'

const AboutSection = () => (
  <Wrapper>
    <Quote>
      "We believe the next generation of innovators and leaders need to be great
      design thinkers."
      <QuoteAuthor>- David Kelley, Founder of IDEO</QuoteAuthor>
    </Quote>
    <Category>Experience:</Category>
    <Card>
      <div>
        <Date>2018 - to present</Date>
        <Paragraph>Qadre - London, UK</Paragraph>
      </div>
      <Heading>Frontend Developer & UX Developer</Heading>
      <Paragraph>
        Qadre Limited is a fast-scaling blockchain company, using in-house
        technology to enable trust online. The technology was developed from
        scratch to avoid the architectural mistakes of cryptocurrency and allow
        for the engineering of new products for the public and private sectors.
      </Paragraph>
      <Paragraph>
        The team has worked on some of the earliest and most innovative
        blockchain projects to date, and is using this expertise to build
        enterprise-grade solutions that establish identity, security, and
        autonomy online.
      </Paragraph>
    </Card>
    <Card>
      <div>
        <Date>2016 - 2018</Date>
        <Paragraph>Catalpa - Dili, Timor-Leste</Paragraph>
      </div>
      <Heading>Frontend Developer & UI/UX Designer</Heading>
      <Paragraph>
        The experience of working in Timor for Catalpa was very enriching. I
        learned about the social impact of technology by helping them to
        develope progressive web apps that contributed to betterment of timorese
        lives. We worked with the Government of East Timor under an Agile
        environment to reach our goals.
      </Paragraph>
    </Card>
    <Card>
      <div>
        <Date>2015 - 2016</Date>
        <Paragraph>Lunática - Madrid, Spain</Paragraph>
      </div>
      <Heading>Web and Graphic Designer</Heading>
      <Paragraph>
        After studying Graphic & Web Design at the Lisbon School of Design I
        have worked as a freelance in my hometown. This was a very important
        period for starting in the industry since I had the opportunity of
        working with small/medium projects from scratch.
      </Paragraph>
    </Card>
    <Card>
      <div>
        <Date>2012 - 2013</Date>
        <Paragraph>Nestlé - Lisbon, Portugal</Paragraph>
      </div>
      <Heading>Junior Market Intelligence Speciallist</Heading>
      <Paragraph>
        The experience of working in Timor for Catalpa was very enriching. I
        learned about the social impact of technology by helping them to
        develope progressive web apps that contributed to betterment of timorese
        lives. We worked with the Government of East Timor under an Agile
        environment to reach our goals.
      </Paragraph>
    </Card>

    <Category>Other Experiences:</Category>
    <Card>
      <div>
        <Date>2018</Date>
        <Paragraph>Microsoft - Lisbon, Portugal</Paragraph>
      </div>
      <Heading>Pitching A Business Idea</Heading>
      <Paragraph>
        In 2018 I ventured myself in an entrepreneurial contest called “Acredita
        Portugal” and out of 1200 people I could get to the semi-finals and
        pitch my idea and showcase my UI at the Microsoft HQ’s in Portugal.
      </Paragraph>
    </Card>
    <Card>
      <div>
        <Date>2010</Date>
        <Paragraph>Harvard BS - Boston, USA</Paragraph>
      </div>
      <Heading>International Marketing Summer School</Heading>
      <Paragraph>
        The Harvard’s Summer Business School was a unique experience to interact
        with people from all around the world, learn about key components of
        international marketing and pitch for an international crowd for the
        first time.
      </Paragraph>
    </Card>
    <Card>
      <div>
        <Date>2009</Date>
        <Paragraph>ESADE - Barcelona, Spain</Paragraph>
      </div>
      <Heading>Marketing: From Strategy To Action Summer School</Heading>
      <Paragraph>
        The ESADE’s Summer Business School was probably my first abroad
        experience where I had the opportunity to interact like minded people
        from all around the world, learn about key components of a good
        marketing plan and brand strategy.
      </Paragraph>
    </Card>

    <Category>Education:</Category>
    <Card>
      <div>
        <Date>2018</Date>
        <Paragraph>La Salle - Barcelona, Spain</Paragraph>
      </div>
      <Heading>Mobile Apps Design & Development</Heading>
      <Paragraph>
        When I left South East Asia and came back to Europe I decided I wanted
        to learn more about mobile design and development. So I moved to
        Barcelona where I had the opportunity to attend classes in La Salle
        University. While there I developed a small project that later I would
        pitch about in Portugal at the Microsoft HQ's. I was also approached by
        several startups from in and outside of Barcelona. I ended up moving to
        London mid 2018 when I got an amazing opportunity to work for an young
        startup - Qadre - that is working hard to assure trust in the digital
        world with the use of blockchain.
      </Paragraph>
    </Card>
    <Card>
      <div>
        <Date>2013 - 2014</Date>
        <Paragraph>Lisbon School Of Design - Lisbon, Portugal</Paragraph>
      </div>
      <Heading>Graphic and Web Design</Heading>
      <Paragraph>
        At the Lisbon School of Design I had the opportunity to explore my
        creativity through the learning of design fundamentals. I also had the
        chance to express my work through several mediums and art forms from
        brand identity design, editorial design, packaging design and web
        design.
      </Paragraph>
    </Card>
    <Card>
      <div>
        <Date>2009 - 2011</Date>
        <Paragraph>UCP - Lisbon, Portugal</Paragraph>
      </div>
      <Heading>Masters of Science in Organisational Communications</Heading>
      <Paragraph>
        In an effort to consolidate my bachelor conceptual knowledge on
        communication sciences with emphasis on the organisations I graduated
        with a Masters Degree at the Universidade Católica Portuguesa in Lisbon
        with a thesis that explored the idea of driving innovation through
        communication strategies within the company.
      </Paragraph>
    </Card>
    <Card>
      <div>
        <Date>2004 - 2008</Date>
        <Paragraph>UCP - Lisbon, Portugal</Paragraph>
      </div>
      <Heading>Communication Sciences Bachelor</Heading>
      <Paragraph>
        Having a genuine interest for human communication and for the
        communication's revolution that I felt my generation lived first-hand I
        set myself up to the study of communication sciences and it's social
        impact. I had that chance to explore just that at the Universidade
        Católica Portuguesa in Lisbon, Portugal.
      </Paragraph>
    </Card>
  </Wrapper>
)

export default AboutSection
