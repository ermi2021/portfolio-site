import React, { useState, useEffect, useRef } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { srConfig } from '@config';
import sr from '@utils/sr';
import icon from '../../images/icon.png';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { usePrefersReducedMotion } from '@hooks';


// import required modules
import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';

const StyledskillsSection = styled.section`

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
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
const StyledSkillImg = styled.img`
  height: 200px;
  width: 200px;

`;

const Stack = () => {
  return (
    <StyledskillsSection>
      <h2>Skills</h2>
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
     
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
    
    >
      <SwiperSlide>
        <StyledSkillImg src={icon} alt="Image 1" />
      </SwiperSlide>
      <SwiperSlide>
        <StyledSkillImg src={icon} alt="Image 2" />
      </SwiperSlide>
      <SwiperSlide>
        <StyledSkillImg src={icon} alt="Image 3" />
      </SwiperSlide>
      <SwiperSlide>
        <StyledSkillImg src={icon} alt="Image 1" />
      </SwiperSlide>
      <SwiperSlide>
        <StyledSkillImg src={icon} alt="Image 2" />
      </SwiperSlide>
      <SwiperSlide>
        <StyledSkillImg src={icon} alt="Image 3" />
      </SwiperSlide>
      {/* Add more SwiperSlides with images */}
    </Swiper>
    </StyledskillsSection>
  );
};

export default Stack;