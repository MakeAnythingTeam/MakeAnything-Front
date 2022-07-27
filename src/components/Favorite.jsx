import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as CheckedIcon} from "../assets/bookmarkChecked.svg";
import { ReactComponent as UncheckedIcon} from "../assets/bookmarkUnchecked.svg";

export default function Favorite({ index, img_path, model_name, model_price }) {

    const [bookmarkIcon, setbookmarkIcon] = useState(true);

    return (
        <FavoriteContainer key={index}>
            <FavoriteButton>
                <BookmarkWrap>
                <button
                        onClick={() => setbookmarkIcon(!bookmarkIcon)}
                />
                {bookmarkIcon === true ?  <CheckedIcon/> : <UncheckedIcon/>}
                </BookmarkWrap>
                <FavoriteImage src={img_path} alt="북마크" />
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

const BookmarkWrap = styled.label`
    margin-left: 11rem;
    cursor: pointer;
    position: absolute;
    
    button {
        display: none;
    }
`;


const FavoriteButton = styled.button`
    width: 13rem;
    height: 13rem;
    position: relative;
    margin: 0.2rem 1rem;
    border: none;
    padding: 0;
    background-color: white;
    cursor: pointer;
`;

const FavoriteImage = styled.img`
    width: 13rem;
    height: 13rem;
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