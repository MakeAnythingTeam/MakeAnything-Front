import React from "react";
import styled from "styled-components";

export default function Favorite({ index, img_path, model_name, model_price }) {

    return (
        <FavoriteContainer key={index}>
            <FavoriteButton>
                <FavoriteImage src={img_path} alt="북마크"></FavoriteImage>
            </FavoriteButton>
            <FavoriteName>{model_name}</FavoriteName>
            <FavoritePrice>{model_price}</FavoritePrice>
        </FavoriteContainer>

    )
}

const FavoriteContainer = styled.div`
      /* font-family: 'Pretendard'; */
    display: inline-block; 
`;

const FavoriteButton = styled.button`
    width: 13.5rem;
    height: 13.5rem;
    margin: 0.2rem 1rem;
    border: none;
    padding: 0;
    background-color: white;
    cursor: pointer;
`;

const FavoriteImage = styled.img`
    width: 13.3rem;
    height: 13.3rem;
`;

const FavoriteName = styled.div`
    font-size: 20px;
    margin-left: 1rem;
    margin-bottom: 0.3rem;
`;

const FavoritePrice = styled.div`
    font-size: 20px;
    margin-left: 1rem;
    margin-bottom: 5rem;
`;