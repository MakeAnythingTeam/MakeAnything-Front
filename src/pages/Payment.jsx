// 메인 페이지 - 포디

import axios from 'axios';
import React, { useEffect } from 'react';
import styled from 'styled-components';

export default function Payment() {
    useEffect(() => {
        const jquery = document.createElement("script");
        jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";

        const iamport = document.createElement("script");
        iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"

        document.head.appendChild(jquery);
        document.head.appendChild(iamport);

        return () => {
            document.head.removeChild(jquery);
            document.head.removeChild(iamport);
        }
    }, []);

    const onClickPayment = () => {
        const { IMP } = window;
        IMP.init('imp82151276'); // 가맹점 식별코드

        const data = {
            pg: "html5_inicis",
            pay_method: "card",
            merchant_uid: `ORD${new Date().getTime()}`, // 주문 번호*
            name: "결제 api 테스트", // 주문명*
            amount: 1, // 금액*
            buyer_email: "tjgus9966@gmail.com", // 구매자 이메일
            buyer_name: "정서현", // 구매자 이름
            buyer_tel: "01012345678", // 구매자 전화번호
        }
        IMP.request_pay(data, callback);
    }

    console.log(`ORD${new Date().getTime()}`);

    const callback = (response) => {
        const {success, error_msg, imp_uid, merchant_uid} = response;
    
        if(success) {
            axios({
                url: "",
                method: "post",
                data: {
                    imp_uid: imp_uid,
                    merchant_uid: merchant_uid
                }
            }).then((data) => {
                alert('결제 성공!');
            })
        } else {
            alert(`결제 실패! ${error_msg}`);
        }
    }

    return (
        <PaymentContainer>
            <PaidGoodsDiv>
                <img src={require("../img/img1.png")} alt="goods"></img>
                <GoodsInfo>
                    <h1>상품 이름</h1>
                    <h2>판매자 이름</h2>
                </GoodsInfo>
            </PaidGoodsDiv>
            <PaymentWrap>
                <AgreementDiv>
                    <h1>저작권법 동의</h1>
                    <span>이 란은 저작권 법 관련 내용이 들어가는 자리입니다. 아직 저작권법에 대한 자세한 내용이 없어서 공란으로 둡니다.<br/></span>
                    <span>이 란은 저작권 법 관련 내용이 들어가는 자리입니다. 아직 저작권법에 대한 자세한 내용이 없어서 공란으로 둡니다.<br/></span>
                    <span>이 란은 저작권 법 관련 내용이 들어가는 자리입니다. 아직 저작권법에 대한 자세한 내용이 없어서 공란으로 둡니다.<br/></span>
                    <span>이 란은 저작권 법 관련 내용이 들어가는 자리입니다. 아직 저작권법에 대한 자세한 내용이 없어서 공란으로 둡니다.<br/></span>
                    <AgreementCheck>
                        <span>동의합니다</span>
                        <input type="checkbox"></input>
                    </AgreementCheck>
                </AgreementDiv>
                <PaymentDiv>
                    <Price>
                        <h1>총 구매금액</h1>
                        <span>2000원</span>
                    </Price>
                    <h1>결제 방식</h1>
                    <PayMethodButton>신용카드</PayMethodButton>
                    <PayMethodButton>계좌이체(무통장)</PayMethodButton>
                    <PayMethodButton>네이버페이</PayMethodButton>
                    <PayMethodButton>카카오페이</PayMethodButton>
                    <PayMethodButton>휴대전화</PayMethodButton>
                    <PayButton onClick={onClickPayment}>결제하기</PayButton>
                </PaymentDiv>
            </PaymentWrap>
        </PaymentContainer>
    );
}

const PaymentContainer = styled.div`
    border: 3px solid yellow;   
    width: 80rem; 
    margin: 0 auto;

`

const PaidGoodsDiv = styled.div`
    border: 3px solid black;
    display: flex;
    margin-bottom: 1rem;

    img {
        width: 10rem;
        height: 10rem;
    }
`

const GoodsInfo = styled.div`
    display: block;
    
    h1 {
        font-size: 1.5rem;
    }

    h2 {
        font-size: 1rem;
    }
`

const PaymentWrap = styled.div`
    border: 3px solid red;
    display: flex;
    justify-content: space-between;
`

const AgreementDiv = styled.div`
    border: 3px solid green;
    width: 60rem;

    h1 {
        font-size: 1.5rem;
    }

    h2 {
        font-size: 1rem;
    }
`

const AgreementCheck = styled.div`
    float: right;
    margin-top: 1rem;
    font-weight: 550;
`

const PaymentDiv = styled.div`
    border: 3px solid blue;
    width: 40rem;
    margin-left: 1.5rem;

    h1 {
        font-size: 1.5rem;
    }
`

const Price = styled.div`
    display: flex;
    justify-content: space-between;

    span {
        font-size: 1.2rem;
        margin-top: 1rem;
        margin-right: 5rem;
    }
`

const PayMethodButton = styled.button`
    border: 1px solid #707070;
    width: 7.5rem;
    height: 2rem;
    margin: 0.5rem 0.2rem;
`

const PayButton = styled.button`
    display: block;
    width: 15rem;
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