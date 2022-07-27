// 메인 페이지 - 포디

import React from 'react';
import styled from 'styled-components';
import Favorite from '../components/Favorite';
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

    return (
        <div>
            <SlideShow/>
            <TitleText>Favorite Model</TitleText>
            <MoreButton>더보기</MoreButton>
            <FavoriteDiv>
                {favoriteModelsDummy.map((model, index) => (
                    <Favorite
                        key={index}
                        img_path={model.img_path}
                        model_name={model.name}    
                        model_price={model.price}
                    />
                ))}
            </FavoriteDiv>
            <TitleText>New Model</TitleText>
            <MoreButton>더보기</MoreButton>
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

const FavoriteDiv = styled.div`
    width: 85%;
    margin-left: 6.8rem;
`;