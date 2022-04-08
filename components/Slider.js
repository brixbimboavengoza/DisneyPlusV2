import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';

export default class CenterMode extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true
    };
    
    return (
      <Carousel {...settings}>
        <Wrap>
          <a>
            <img src='/banner1.jpg' alt='' />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src='/banner2.jpg' alt='' />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src='/banner3.jpg' alt='' />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src='/banner4.jpg' alt='' />
          </a>
        </Wrap>
      </Carousel>
    );
  }
}

const Carousel = styled(Slider)`
  padding-top: 20px;
  padding-bottom: 30px;
  max-width: 1400px;
  margin: auto;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);

    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
    max-width: 1400px;
  }

  .slick-prev {
    left: -90px;
  }

  .slick-next {
    right: -90px;
  }

  .slick-dots {
    bottom: 70px;
    width: 25%;
    right: 0;
  }

  /* the slides */
  .slick-slider {
      overflow: hidden;
      margin: 0 30px
  }
  /* the parent */
  .slick-list {
      margin: 0 -30px;
  }
  `;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  padding: 0 30px;

  a {
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    

    img {
      max-width: 1380px;
      min-width: 500px;
      margin: auto;
      height: 100%;
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
      border: 4px solid transparent;

      &:hover {
        border: 4px solid rgba(249, 249, 249, 0.8);
        transition-duration: 300ms;
      }
    }
  }
`;





