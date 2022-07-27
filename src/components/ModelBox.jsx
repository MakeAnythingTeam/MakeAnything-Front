import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as CheckedIcon} from "../assets/bookmarkChecked.svg";
import { ReactComponent as UncheckedIcon} from "../assets/bookmarkUnchecked.svg";

export default function Favorite({ index, img_path, model_name, model_price }) {

    const [bookmarkIcon, setbookmarkIcon] = useState(true);

    return (
        <ModelBoxContainer key={index}>
            <BookmarkWrap>
            <button
                onClick={() => setbookmarkIcon(!bookmarkIcon)}
            />
            {bookmarkIcon === true ?  <CheckedIcon/> : <UncheckedIcon/>}
            </BookmarkWrap>
            <ModelWrap>
                <button onClick={() => console.log({model_name})}></button>
                <ModelImage src={img_path} alt="북마크" />
                <ModelName>{model_name}</ModelName>
                <ModelPrice>{model_price}</ModelPrice>
            </ModelWrap>
        </ModelBoxContainer>

    )
}

const ModelBoxContainer = styled.div`
      /* font-family: 'Pretendard'; */
    display: inline-block;
`;

const BookmarkWrap = styled.label`
    margin-left: 12.5rem;
    cursor: pointer;
    position: absolute;
    
    button {
        display: none;
    }
`;

const ModelWrap = styled.label`
    margin: 0.2rem 1.6rem;
    cursor: pointer;
    
    button {
        display: none;
    }
`;

const ModelImage = styled.img`
    width: 13.2rem;
    height: 13.2rem;
`;

const ModelName = styled.div`
    font-size: 20px;
    margin-left: 1.6rem;
    margin-bottom: 0.3rem;
`;

const ModelPrice = styled.div`
    font-size: 20px;
    margin-left: 1.6rem;
    margin-bottom: 5rem;
`;