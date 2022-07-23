// 메인 페이지 - 포디

import React from 'react';
import styled from 'styled-components';
import Favorite from '../components/Favorite';
import SlideShow from '../components/SlideShow'

export default function Main() {

    const modelsDummy = [
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

    return (
        <div>
            <SlideShow/>
            <TitleText>Favorite Model</TitleText>
            <FavoriteButton>더보기</FavoriteButton>
            <FavoriteDiv>
                {modelsDummy.map((model, index) => (
                    <Favorite
                        key={index}
                        img_path={model.img_path}
                        model_name={model.name}    
                        model_price={model.price}
                    />
                ))}
            </FavoriteDiv>
            <TitleText>New Model</TitleText>
        </div>
    );
}

const TitleText = styled.div`
    font-weight: 800;
    font-size: 34px;
    margin-left: 7.2rem;
    margin-top: 2.5rem;
`;

const FavoriteButton = styled.button`
    border: none;
    margin-left: 79.5rem;
    background-color: white;
    font-size: 15px;
    cursor: pointer;
`;

const FavoriteDiv = styled.div`
    display: flex;
    justify-content: center;
    /* border: 1px solid black; */
`;