import React, { useEffect, useRef } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { srConfig, email } from '@config'
import sr from '@utils/sr'
import { usePrefersReducedMotion } from '@hooks'

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
              Hi! I'm Ermiyas, a passionate web and mobile app developer with a
              focus on creating engaging user experiences. My programming
              journey started during my Bachelor's degree in Information Systems
              back in 2017. Since then, I've dived deep into various
              technologies and frameworks, mastering Object-Oriented Programming
              (OOP) with JavaScript.
            </p>
          
            <p>
              Moreover, I'm well-versed in web and mobile application development, and I'm proficient
              in Javascript, TypeScript, React, React Native Vue, and Angular.
            </p>
            <p>
              I'm constantly seeking new challenges and opportunities to expand
              my knowledge and push the boundaries of what I can create with
              code. If you're looking for a dedicated developer who can bring
              your ideas to life with elegance and efficiency, I'd love to
              collaborate with you. Together, we can create exceptional web and
              mobile applications that leave a lasting impact.
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
