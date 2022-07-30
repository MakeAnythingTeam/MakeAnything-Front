import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { ReactComponent as CheckedIcon} from "../assets/bookmarkChecked.svg";
import { ReactComponent as UncheckedIcon} from "../assets/bookmarkUnchecked.svg";
import { favoriteModelsDummy } from "../pages/DummyData"; 

export default function Favorite({ index, model_id, img_path, model_name, model_price }) {

    const [bookmarkIcon, setbookmarkIcon] = useState(false);
    const [favoriteModelArr, setFavoriteModelArr] = useState([...favoriteModelsDummy]);

    const onClickBookmark = () => {
        /* DATA UPDATE : dummy data -> REST API */
        axios.get('http://localhost:3000/users/{userId}/wish')
            .then((Response) => {
                setFavoriteModelArr(Response.data)
            })
            .catch((Error) => {console.log(Error)})

        /* dummy data */
        if(!bookmarkIcon) { // 북마크 x -> 클릭 -> 북마크 등록
            // favorite 배열에 추가
            console.log("북마크 등록");
            const newFavoriteModel = {   
                id: {model_id},
                img_path: {img_path},
                name: {model_name},
                price: {model_price},
            };
            favoriteModelArr.push(newFavoriteModel);
            setFavoriteModelArr(favoriteModelArr)
        } else { // 북마크 o -> 클릭 -> 북마크 해제
            // favorite 배열에서 제거
            console.log("북마크 해제");
            favoriteModelArr.splice({model_id}, 1);
            setFavoriteModelArr(favoriteModelArr);
        }
        console.log(favoriteModelArr);
        
        setbookmarkIcon(!bookmarkIcon);
    }

    return (
        <ModelBoxContainer key={index} model_id={model_id}>
            <BookmarkWrap>
            <button onClick={onClickBookmark}/>
            {bookmarkIcon === true ?  <CheckedIcon/> : <UncheckedIcon/>}
            </BookmarkWrap>
            <ModelWrap>
                <button onClick={() => console.log(`${model_name} 상세페이지`)}></button>
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