// 메인 페이지 - 포디

import React, { useState } from 'react';
import styled from 'styled-components';

export default function Main() {
    const [showImages, setShowImages] = useState([]);

    // 이미지 상대경로 저장
    const handleAddImages = (event) => {
        const imageLists = event.target.files;
        let imageUrlLists = [...showImages];

        for (let i = 0; i < imageLists.length; i++) {
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);
        }

        if (imageUrlLists.length > 8) {
        imageUrlLists = imageUrlLists.slice(0, 8);
        }

        setShowImages(imageUrlLists);
    };

    return (
        <GoodsDiv>
            <GoodsWrap>
                <GoodsMainImgWrap>
                    <img src={require('../img/img1.png')} alt="상품 이미지" />
                </GoodsMainImgWrap>
                    <GoodsDescription>
                    <h2>상품 설명</h2>
                    <textarea
                        placeholder='상품 설명을 입력하세요.'
                    />
                </GoodsDescription>                             
            </GoodsWrap>
            <GoodsInfoWrap>
                    <h1>상품 업로드</h1>
                    <h2>상품명</h2>
                    <input type="text" name="goods-name" />
                    <h2>태그</h2>
                    <input type="text" name="goods-tag" placeholder="#태그 입력 (최대 10개)" />
                    <h2>판매 금액</h2>
                    <input type="text" name="goods-price" placeholder="ex) 2,000원" />
                    <label htmlFor="input-file" onChange={handleAddImages}>                   
                        <h2>파일 업로드</h2>
                        <input type="file" name="goods-image" placeholder="파일을 업로드하세요" />
                    </label>
                    <h2>상품 사진 업로드</h2>
                    {showImages.map((image, id) => ( // 저장해둔 이미지들을 순회하면서 화면에 이미지 출력
                        <div key={id}>
                            <img src={image} alt={`${image}-${id}`} />
                        </div>
                    ))}            
                    <Button>업로드</Button>
                </GoodsInfoWrap>
        </GoodsDiv>
    );
}

const GoodsDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const GoodsWrap = styled.div`
    border: 3px solid green;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const GoodsMainImgWrap = styled.div`
    border: 3px solid black;
    
    img {
        width: 60rem;
        height: 30rem;
    }
`

const GoodsDescription = styled.div`
    width: 60rem;
    border: 3px solid blue;

    h2 {
        font-size: 0.9rem;
    }

    textarea {
        resize: none;
        width: 60rem;
        height: 12rem;
        border: 1px solid #DBDBDB;
    }

`;

const GoodsInfoWrap = styled.div`
    border: 3px solid red;
    margin-left: 1.5rem;

    h1 {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    h2 {
        font-size: 0.9rem;
    }

    span {
        color: #DBDBDB;
        font-size: 0.5rem;
    }

    input {
        width: 20rem;
        height: 2rem;
        border: 1px solid #DBDBDB;
        margin-bottom: 1rem;
    }

    img {
        width: 5rem;
        height: 3rem;
        border: 1px solid #DBDBDB;
    }
`

const Button = styled.button`
    width: 10rem;
    height: 2rem;
    border: none;
    margin: 1rem 0;
    border-radius: 25px;
    background-color: #2F3EFF;
    font-size: 0.9rem;
    font-weight: 600;
    color: white;
    cursor: pointer;
`

