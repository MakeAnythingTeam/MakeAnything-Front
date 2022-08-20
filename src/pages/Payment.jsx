// 결제 페이지 - 포디

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Payment() {    
    const [payMethod, setPayMethod] = useState('');
    const [checked, setChecked] = useState([false, false, false, false, false]);

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
    
    const onClickPayMethod = (e) => {
        const method = e.target.innerText;
        const temp = checked;

        if (method === "신용카드") {
            setPayMethod('card');
            temp[0] = !temp[0];
        } else if (method === "계좌이체(무통장)") {
            setPayMethod('account');
            temp[1] = !temp[1];
        } else if (method === "네이버페이") {
            setPayMethod('naver');
            temp[2] = !temp[2];
        } else if (method === "카카오페이") {
            setPayMethod('kakao');
            temp[3] = !temp[3];
        } else if (method === "휴대전화") {
            setPayMethod('phone');
            temp[4] = !temp[4];
        }
        console.log(checked);
        setChecked(temp);
    }

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

        // 결제 방법 -> 나중에 추가
        console.log(payMethod);
    }

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
        <BackgroundDiv>
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
                    <span>이 란은 저작권 법 관련 내용이 들어가는 자리입니다. 아직 저작권법에 대한 자세한 내용이 없어서 공란으로 둡니다.<br/><br/></span>
                    <span>이 란은 저작권 법 관련 내용이 들어가는 자리입니다. 아직 저작권법에 대한 자세한 내용이 없어서 공란으로 둡니다.<br/><br/></span>
                    <span>이 란은 저작권 법 관련 내용이 들어가는 자리입니다. 아직 저작권법에 대한 자세한 내용이 없어서 공란으로 둡니다.<br/><br/></span>
                    <span>이 란은 저작권 법 관련 내용이 들어가는 자리입니다. 아직 저작권법에 대한 자세한 내용이 없어서 공란으로 둡니다.<br/><br/></span>
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
                    <MethodButton checked={checked[0]} onClick={onClickPayMethod}>신용카드</MethodButton>
                    <MethodButton checked={checked[1]} onClick={onClickPayMethod}>계좌이체(무통장)</MethodButton>
                    <MethodButton checked={checked[2]} onClick={onClickPayMethod}>네이버페이</MethodButton>
                    <MethodButton checked={checked[3]} onClick={onClickPayMethod}>카카오페이</MethodButton>
                    <MethodButton checked={checked[4]} onClick={onClickPayMethod}>휴대전화</MethodButton>                 
                    <PayButton onClick={onClickPayment}>결제하기</PayButton>
                </PaymentDiv>
            </PaymentWrap>
        </PaymentContainer>
        </BackgroundDiv>
    );
}

const BackgroundDiv = styled.div`
    border: 1px solid #F8F8FA;
    width: 100vw;
    height: 100vh;
    background-color: #F8F8FA;
`

const PaymentContainer = styled.div`
    /* border: 3px solid yellow;    */
    width: 78rem; 
    margin: 0 auto;
    margin-top: 3rem;
`

const PaidGoodsDiv = styled.div`
    /* border: 3px solid black; */
    display: flex;
    margin-bottom: 1rem;
    background-color: #FFFFFF;

    img {
        width: 12rem;
        height: 12rem;
        margin: 3.5rem;
    }
`

const GoodsInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: 1.5rem;
        margin: 0;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 400;
        color: #AAAAAA;
        margin: 0;
    }
`

const PaymentWrap = styled.div`
    /* border: 3px solid red; */
    display: flex;
    justify-content: space-between;
`

const AgreementDiv = styled.div`
    /* border: 3px solid green; */
    width: 60rem;
    background-color: #FFFFFF;

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
    /* border: 3px solid blue; */
    width: 40rem;
    margin-left: 1.5rem;
    background-color: #FFFFFF;
    
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

const MethodButton = styled.button`
    width: 8rem;
    height: 2rem;
    margin: 0.5rem 0.2rem;
    border: solid ${props => (props.checked ? '1.6px #2F3EFF' : '1px #707070')};
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