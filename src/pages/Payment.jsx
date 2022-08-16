// 메인 페이지 - 포디

import axios from 'axios';
import React, { useEffect } from 'react';

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
                url: "https://3.39.161.226:8080/",
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
        <div>
            <h2>결제 페이지</h2>
            <button onClick={onClickPayment}>결제</button>
        </div>
    );
}
