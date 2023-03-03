import React, { useEffect, useRef } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { srConfig } from '../../config'
import sr from '../../utils/sr'
import { usePrefersReducedMotion } from '../../hooks'

const StyledAboutSection = styled.section`
  max-width: 900px;
  border-radius: 20px;
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 230px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`

const About = () => {
  const revealContainer = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    sr.reveal(revealContainer.current, srConfig())
  }, [])

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hi! I'm Ermiyas, and I love coding, concentrating on web and
              mobile app development. My interest in programming started back in
              2017 when I enrolled in college to earn my Bachler in Information
              Systems.
            </p>
            <p>
              My programming journey has taken me from learning the fundamentals
              of Object-Oriented Programming (OOP) with Javascript, to
              developing full stack applications using popular frameworks such
              as Angular, React and Vue. Along the way I have also explored a
              wide variety of backend tools such as Django and .NET, further
              expanding my skill set with each technology I learn.
            </p>
            <p>
              Fast-forward to today, and i've had the privilege's of working
              with experienced developers and participating in coding hackathons
              as a developer.
            </p>
          </div>
        </StyledText>

        <div className="wrapper">
          <StaticImage
            className="img"
            src="../../images/me_white.jpg"
            width={500}
            height={450}
            quality={100}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="Headshot"
          />
        </div>
      </div>
    </StyledAboutSection>
  )
}

export default About
