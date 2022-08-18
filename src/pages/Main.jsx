// 메인 페이지 - 포디

import React from 'react';
import styled from 'styled-components';
import ModelBox from '../components/ModelBox';
import SlideShow from '../components/SlideShow';
import { favoriteModelsDummy } from './DummyData';
import { newModelsDummy } from './DummyData';

export default function Main() {

    return (
        <div>
            <SlideShow/>
            <TitleText>Favorite Model</TitleText>
            <MoreButton>더보기</MoreButton>
            <ModelBoxDiv>
                {favoriteModelsDummy.map((model, index) => (
                    <ModelBox
                        key={index}
                        model_id={model.id}
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
                        model_id={model.id}
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