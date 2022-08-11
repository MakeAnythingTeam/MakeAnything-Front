// 메인 페이지 - 포디

import React from 'react';
import styled from 'styled-components';

export default function Main() {

    return (
        <div>
            <GoodsWrap>
                <GoodsMainImgWrap>
                    <img src={require('../img/img1.png')} alt="상품 이미지" />
                </GoodsMainImgWrap>
                <GoodsInfoWrap>
                    <h1>상품 업로드</h1>
                    <h2>상품명</h2>
                    <input type="text" name="goods-name" />
                    <h2>태그</h2>
                    <input type="text" name="goods-tag" placeholder="#태그 입력 (최대 10개)" />
                    <h2>판매 금액</h2>
                    <input type="text" name="goods-price" placeholder="ex) 2,000원" />
                    <h2>파일 업로드</h2>
                    <h2>상품 사진 업로드</h2>
                    <Button>업로드</Button>
                </GoodsInfoWrap>
            </GoodsWrap>
            <GoodsDescription>
                <h2>상품 설명</h2>
                <textarea
                    placeholder='상품 설명을 입력하세요.'
                />
            </GoodsDescription>
        </div>
    );
}


const GoodsWrap = styled.div`
    border: 3px solid green;
    display: flex;
    justify-content: center;
`

const GoodsMainImgWrap = styled.div`
    border: 3px solid black;
    
    img {
        width: 60rem;
        height: 30rem;
    }
`

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

    input {
        width: 18rem;
        height: 2rem;
        border: 1px solid #DBDBDB;
        margin-bottom: 1rem;
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

const GoodsDescription = styled.div`
    width: 60rem;
    border: 3px solid blue;
    margin-left: 4.5rem;

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