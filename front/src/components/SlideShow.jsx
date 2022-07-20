import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SlideShow({ img }) {

    return (

        <Container>
            <Slider {...settings}>
                <div>slide1</div>
                <div>slide2</div>
                <div>slide3</div>
                <div>slide4</div>
                <div>slide5</div>
            </Slider>
        </Container>

    )

}

const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    arrows: true,
};

const Container = styled.div`
    margin-top: 72px;
    text-align: center;

    .slick-slider{
        position: relative;
        display: inline-block;
        align-items: center;
        width: 100%;
        height: 40vh;
        background: #AAAAAA;
    }

    .slick-dots {
        bottom: 0px;
    }

    .slick-dots li button:before {
        color: white;
    }

    .slick-prev {
        left: 2%;
        cursor: pointer;
      }
    .slick-prev:before {
        content: '<';
        opaicty: 1; 
        font-size: 2rem;
        color: white;
    }

    .slick-next {
        right: 2%;
        opacity: 1;
        cursor: pointer;
    }
    .slick-next:before {
        content: '>';
        font-size: 2rem;
        color: white;
    }
`;
