import React, { useState, useEffect, useRef } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { srConfig } from '@config';
import sr from '@utils';
import { Icon } from '@icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledskillsSection = styled.section`
 max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .skills-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(4, minmax(min-content, max-content));
    grid-gap: 35px;
    position: relative;
    margin-top: 15px;
    cursor:pointer;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
  }
`;

const Styledskill = styled.li`
  position: relative;
  cursor: pointer;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .skill-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

   .skill-inner::before{
    background-color: #467A5A;
    bg-opacity: 0.6;
   }
  .skill-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: middle;
    position: relative;
    height: 100%;
    padding: 1.5rem 2rem;
    border-radius: var(--border-radius);
   
    transition: var(--transition);
    overflow: auto;
    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:before,
      .img {
        background: transparent;
        filter: none;
      }
    }
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
      transition: var(--transition);
      background-color: #395144;
      mix-blend-mode: screen;
    }
  }

  .skill-top {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 35px;

    .folder {
      color: var(--green);
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .skill-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--light-slate);

      a {
        ${({ theme }) => theme.mixins.flexCenter};
        padding: 5px 7px;

        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .img{
  
    object-fit:contained;
    margin-bottom:15px;
   
    display: block;
    margin-left: auto;
    margin-right: auto;
    width:100%;
   
   
  }
  .skill-title {
    margin: 0 0 10px;
    color: var(--secondary-color);
    font-size: 17px;
    text-align:center;
    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .skill-description {
    color: var(--light-slate);
    font-size: 17px;
     text-align:center;
    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }
  
  .skill-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

const Stack = () => {
  const data = useStaticQuery(graphql`
    query {
      skills: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/skills/" }
          frontmatter: { showInSkills: { ne: false } }
        }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              image {
                childImageSharp {
                  gatsbyImageData(width: 100, height:100 placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
              
            }
            html
          }
        }
      }
    }
  `);

  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealskills = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealskills.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 8;
  const skills = data.skills.edges.filter(({ node }) => node);
  const firstEight = skills.slice(0, GRID_LIMIT);
  const skillsToShow = showMore ? skills : firstEight;

  const skillInner = node => {
    const { frontmatter, html } = node;
    const { image, title } = frontmatter;
    const logo = getImage(image);
    return (
      <div className="skill-inner">
        <header>

          <GatsbyImage image={logo} alt={title} className="img" />
          <h3 className="skill-description">

            {title}

          </h3>


        </header>


      </div>
    );
  };

  return (
   
    <StyledskillsSection id="skills">
      <h2 ref={revealTitle} className="numbered-heading">Few Technologies from my stack</h2>
   
      <ul className="skills-grid">
        {prefersReducedMotion ? (
          <>
            {skillsToShow &&
              skillsToShow.map(({ node }, i) => (
                <Styledskill key={i}>{skillInner(node)}</Styledskill>
              ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {skillsToShow &&
              skillsToShow.map(({ node }, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}>
                  <Styledskill
                    key={i}
                    ref={el => (revealskills.current[i] = el)}
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                    }}>
                    {skillInner(node)}
                  </Styledskill>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </ul>

      <button className="more-button" onClick={() => setShowMore(!showMore)}>
        Show {showMore ? 'Less' : 'More'}
      </button>
    </StyledskillsSection>

  );
};

export default Stack;
