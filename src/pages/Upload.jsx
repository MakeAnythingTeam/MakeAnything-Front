import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

export default function Main() {
    const [showImages, setShowImages] = useState([]);
    const [goodsName, setGoodsName] = useState('');
    const [goodsPrice, setGoodsPrice] = useState();
    const [goodsDescription, setGoodsDescription] = useState('');
    const [tagItem, setTagItem] = useState('');
    const [tagList, setTagList] = useState([]);
    const [fileList, setFileList] = useState('');

    const onGoodsNameHandler = (e) => {
        setGoodsName(e.currentTarget.value);
    }

    const onGoodsPriceHandler = (e) => {
        setGoodsPrice(e.currentTarget.value);
    }

    const onGoodsDescriptionHandler = (e) => {
        setGoodsDescription(e.currentTarget.value);
    }

    const onKeyPress = (e) => {
        if (e.target.value.length !== 0 && e.key === 'Enter') {
            submitTagItem();
        }
    }

    const submitTagItem = () => {
        let updatedTagList = [...tagList];
        updatedTagList.push(tagItem);
        setTagList(updatedTagList);
        setTagItem('');
    }

    const deleteTagItem = (e) => {
        const deleteTagItem = e.target.parentElement.firstChild.innerText;
        const filteredTagList = tagList.filter(tagItem => tagItem !== deleteTagItem);
        setTagList(filteredTagList);
    }

    // 이미지 상대경로 저장
    const handleAddImages = (e) => {
        const imageLists = e.target.files;
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

    const onClickUpload = () => {
        console.log(goodsName, goodsPrice, goodsDescription);
        
        // 상품 업로드 정보 서버로 보낸 후
        /*
        axios.post('/model', {
            model_name: goodsName,
            price: goodsPrice,
            content: goodsDescription
        })
        */

        // 업로드 후 페이지로 이동
        alert('상품 등록이 완료되었습니다!');
    }

    // 업로드 파일명 
    const handleFiles = () => {
        const fileInput = document.getElementById("goods-file");
        let tempfileList = fileList;

        for(let i = 0; i < fileInput.files.length; i++){
            tempfileList += fileInput.files[i].name + '<br>';
        }
        setFileList(tempfileList);

        // span 추가
        const filename = document.getElementById("file-names");
        filename.innerHTML = fileList;
    };
  

    return (
        <GoodsDiv>
            <GoodsWrap>
                <GoodsMainImgWrap>
                    <img src={require('../img/img1.png')} alt="goods-main" />
                </GoodsMainImgWrap>
                    <GoodsDescription>
                    <h2>상품 설명</h2>
                    <textarea
                        id="goods-description"
                        placeholder='상품 설명을 입력하세요.'
                        value={goodsDescription}
                        onChange={onGoodsDescriptionHandler}
                    />
                </GoodsDescription>                             
            </GoodsWrap>
            <GoodsInfoWrap>
                    <h1>상품 업로드</h1>
                    <h2>상품명</h2>
                    <GoodsInfoInput 
                        id="goods-name"
                        type="text" 
                        value={goodsName}
                        onChange={onGoodsNameHandler}
                    />
                    <h2>태그</h2>
                    <TagBox>
                        {tagList.map((tagItem, index) => {
                            return (
                                <TagItem key={index}>
                                    <TagText>{tagItem}</TagText>
                                    <button onClick={deleteTagItem}>x</button>
                                </TagItem>
                            )
                        })}
                        <TagInput 
                            type="text" 
                            tabIndex={2}
                            value={tagItem}
                            onChange={e => setTagItem(e.target.value)}
                            onKeyPress={onKeyPress}
                            placeholder="#태그 입력 (최대 10개)"
                        />
                    </TagBox>
                    <h2>판매 금액</h2>
                    <GoodsInfoInput 
                        id="goods-price"
                        type="number" 
                        placeholder="숫자만 입력하세요" 
                        value={goodsPrice}
                        onChange={onGoodsPriceHandler}
                    />
                    <label htmlFor="input-file" onChange={handleAddImages}>                   
                        <h2>파일 업로드</h2>
                        <input 
                            type="file" 
                            id="goods-file" 
                            placeholder="파일을 업로드하세요" 
                            onChange={handleFiles}
                        />
                    </label>
                    <span id="file-names"></span>
                    <h2>상품 사진 업로드</h2>
                    {showImages.map((image, id) => ( // 저장해둔 이미지들을 순회하면서 화면에 이미지 출력
                        <div key={id}>
                            <img src={image} alt={`${image}-${id}`} />
                        </div>
                    ))}            
                    <UploadButton onClick={onClickUpload}>업로드</UploadButton>
                </GoodsInfoWrap>
        </GoodsDiv>
    );
}

const GoodsDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const GoodsWrap = styled.div`
    /* border: 3px solid green; */
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const GoodsMainImgWrap = styled.div`
    /* border: 3px solid black; */
    
    img {
        width: 60rem;
        height: 30rem;
    }
`

const GoodsDescription = styled.div`
    width: 60rem;
    /* border: 3px solid blue; */

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
    /* border: 3px solid red; */
    margin-left: 1.5rem;
    max-width: 20rem;

    h1 {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    h2 {
        font-size: 0.9rem;
        margin-top: 1.5rem;
    }

    img {
        width: 5rem;
        height: 3rem;
        border: 1px solid #DBDBDB;
    }

    label > #goods-file {
        margin-bottom: 0.3rem;
    }

    #file-names {
        color: #AAAAAA;
        font-size: 0.9rem;
        font-weight: 500;
        border-bottom: 1px solid #DBDBDB;
    }
`

const GoodsInfoInput = styled.input`
    width: 19.5rem;
    height: 2rem;
    border: 1px solid #DBDBDB;

    &:focus-within {
        border-color: #2F3EFF;
    }

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`

const TagBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border: 1px solid #DBDBDB;
    min-height: 2rem;
    padding: 2px;
    margin-bottom: 1rem;

    &:focus-within {
        border-color: #2F3EFF;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1rem;
        height: 1rem;
        font-weight: 600;
        border: 1px solid #AAAAAA;
        background-color: white;
        color: #AAAAAA;
        margin-left: 5px;
        margin-right: 1px;
        border-radius: 50%;
        cursor: pointer;
    }
`

const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #AAAAAA;
  border: 1px solid #AAAAAA;
  margin: 2px 3px;
  padding: 2px;
  font-weight: 600;
  font-size: 0.9rem;
`

const TagInput = styled.input`
    display: inline-flex;
    outline: none;
    border: none;
    background: transparent;
    cursor: text;
`

const TagText = styled.span`

`

const UploadButton = styled.button`
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