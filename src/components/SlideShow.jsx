import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SlideShow() {

    const imgs = [
        require('../img/img1.png'),
        require('../img/img2.png'),
        require('../img/img3.png'),
    ]

    return (

        <Container>
            <Slider {...settings}>
                {imgs.map((img) => (
                    <SlideWrap key={img}>
                        <SlideImg src={img} />
                    </SlideWrap>
                    
                ))}
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
    centerPadding: '0px',
    arrows: true,
};

const Container = styled.div`
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
        color: gray;
    }
    .slick-dots li.slick-active button:before {
        color: white;
    }

    .slick-prev {
        z-index: 1;
        left: 2%;
        opacity: 1;
        cursor: pointer;
      }
    .slick-prev:before {
        content: '<';
        font-size: 2.2rem;
        color: white;
    }

    .slick-next {
        right: 2%;
        opacity: 1;
        cursor: pointer;
    }
    .slick-next:before {
        content: '>';
        font-size: 2.2rem;
        color: white;
    }
`;

const SlideWrap = styled.div`
    width: 100%;
    height: 40vh;
`;

const SlideImg = styled.img`
`;