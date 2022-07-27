// 메인 페이지 - 포디

import React from 'react';
import styled from 'styled-components';
import ModelBox from '../components/ModelBox';
import SlideShow from '../components/SlideShow'

export default function Main() {

    const favoriteModelsDummy = [
        {
            img_path: require("../img/img1.png"),
            name: "F/A-18E Super Hornet",
            price: "$2000",
        },
        {
            img_path: require("../img/img2.png"),
            name: "F/A-18E Super Hornet",
            price: "$2000",
        },
        {
            img_path: require("../img/img3.png"),
            name: "F/A-18E Super Hornet",
            price: "$2000",
        },
        {
            img_path: require("../img/img3.png"),
            name: "F/A-18E Super Hornet",
            price: "$2000",
        },
        {
            img_path: require("../img/img1.png"),
            name: "F/A-18E Super Hornet",
            price: "$2000",
        }
    ];

    const newModelsDummy = [
        {
            img_path: require("../img/img1.png"),
            name: "F/A-11E Hornet",
            price: "$200",
        },
        {
            img_path: require("../img/img2.png"),
            name: "F/A-12E Hornet",
            price: "$200",
        },
        {
            img_path: require("../img/img3.png"),
            name: "F/A-13E Hornet",
            price: "$200",
        },
        {
            img_path: require("../img/img3.png"),
            name: "F/A-14E Hornet",
            price: "$200",
        },
        {
            img_path: require("../img/img1.png"),
            name: "F/A-15E Hornet",
            price: "$200",
        },
        {
            img_path: require("../img/img1.png"),
            name: "F/A-16E Hornet",
            price: "$200",
        },
        {
            img_path: require("../img/img2.png"),
            name: "F/A-17E Hornet",
            price: "$200",
        },
        {
            img_path: require("../img/img3.png"),
            name: "F/A-18E Hornet",
            price: "$200",
        }
    ];

    return (
        <div>
            <SlideShow/>
            <TitleText>Favorite Model</TitleText>
            <MoreButton>더보기</MoreButton>
            <ModelBoxDiv>
                {favoriteModelsDummy.map((model, index) => (
                    <ModelBox
                        key={index}
                        img_path={model.img_path}
                        model_name={model.name}    
                        model_price={model.price}
                    />
                ))}
            </ModelBoxDiv>
            <TitleText>New Model</TitleText>
            <MoreButton>더보기</MoreButton>
            <ModelBoxDiv>
                {newModelsDummy.map((model, index) => (
                    <ModelBox
                        key={index}
                        img_path={model.img_path}
                        model_name={model.name}    
                        model_price={model.price}
                    />
                ))}
            </ModelBoxDiv>
        </div>
    );
}

const TitleText = styled.div`
    font-weight: 800;
    font-size: 34px;
    margin-left: 7.8rem;
    margin-top: 2.5rem;
`;

const MoreButton = styled.button`
    border: none;
    margin-left: 78rem;
    background-color: white;
    font-size: 15px;
    cursor: pointer;
`;

const ModelBoxDiv = styled.div`
    width: 85%;
    margin-left: 6.8rem;
`;