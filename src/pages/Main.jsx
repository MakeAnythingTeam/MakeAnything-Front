// 메인 페이지 - 포디
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ModelBox from '../components/ModelBox';
import SlideShow from '../components/SlideShow';
import { favoriteModelsDummy } from './DummyData';

export default function Main() {
    const [newModels, setNewModels] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // 처름 랜더링 됐을 때 전체 model 조회
        axios.get('/api/models')
            .then((Response) => {
                setNewModels(Response.data.data);
                console.log(Response.data); 
            })
            .catch((Error) => {
                console.log(Error);
            });
    }, []);

    const onClickMore = () => {
        navigate('/category');
    };

    console.log(newModels);

    return (
        <div>
            <SlideShow/>
            <TitleText>Favorite Model</TitleText>
            <MoreButton onClick={onClickMore}>+ More</MoreButton>
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
            <MoreButton onClick={onClickMore}>+ More</MoreButton>
            <ModelBoxDiv>
                {newModels.map((model, index) => (
                    <ModelBox
                        key={index}
                        model_id={model.id}
                        img_path={model.modelImageUrl}
                        model_name={model.modelName}    
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
    margin-left: 8.5rem;
    margin-top: 2.5rem;
`;

const MoreButton = styled.button`
    width: 5rem;
    border: none;
    margin-left: 76.5rem;
    background-color: white;
    font-size: 15px;
    font-weight: 600;
    color: #2F3EFF;
    cursor: pointer;
`;

const ModelBoxDiv = styled.div`
    width: 85%;
    margin-left: 6.8rem;
`;