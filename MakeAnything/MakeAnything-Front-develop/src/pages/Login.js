import React, { useState } from 'react';
import Header from '../components/Header';
import { commonAxios } from '../api/commonAxios';
import { Button, Input, Typography } from 'antd';
import styled from 'styled-components';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onClickLogin = () => {
    commonAxios({
      url: 'users/login/local',
      method: 'POST',
      body: { email, password },
    })
      .then((res) => {
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('refreshToken', res.data.refreshToken);
        alert('로그인이 완료되었습니다.');
        window.location.replace('/');
      })
      .catch((err) => {
        alert('네트워크 오류');
      });
  };

  return (
    <Root>
      <ContentContainer>
        <TitleTypo>Make anything</TitleTypo>
        <InputContainer>
          <InputWrapper>
            <InputTitleTypo>E-mail</InputTitleTypo>
            <ContentInput
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <InputTitleTypo>Password</InputTitleTypo>
            <ContentInput
              required={true}
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrapper>
          <ContentButton onClick={onClickLogin} style={{ marginTop: '40px' }}>
            <ButtonTypo>로그인</ButtonTypo>
          </ContentButton>
          <SubmenuContainer>
            <SubmenuTypo>이메일 가입</SubmenuTypo>
            <SubmenuDivider />
            <SubmenuTypo>이메일 찾기</SubmenuTypo>
            <SubmenuDivider />
            <SubmenuTypo>비밀번호 찾기</SubmenuTypo>
          </SubmenuContainer>
          <ContentButton style={{ marginTop: '24px' }}>
            <ButtonTypo>네이버로 로그인</ButtonTypo>
          </ContentButton>
          <ContentButton style={{ marginTop: '30px' }}>
            <ButtonTypo>카카오로 로그인</ButtonTypo>
          </ContentButton>
        </InputContainer>
      </ContentContainer>
    </Root>
  );
};

export default Login;



export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: 564px;
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`;

export const TitleTypo = styled(Typography)`
  &&& {
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-style: normal;
    font-size: 24px;
    font-weight: 900;
    color: #2f3eff;
    display: flex;
    justify-content: center;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
`;

export const InputTitleTypo = styled(Typography)`
  &&& {
    font-size: 24px;
    font-weight: 900;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-style: normal;
    color: #000;
  }
`;

export const ContentInput = styled(Input)`
  width: 100%;
  height: 40px;
  font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 20px;
  border: 0;
  border-bottom: 1px #000 solid;
  :focus {
    outline: none;
  }
`;

export const ContentButton = styled(Button)`
  &&& {
    width: 100%;
    height: 69px;
    background-color: #fff;
    cursor: pointer;
    border: 2px solid #aaa;
  }
`;

export const ButtonTypo = styled(Typography)`
  &&& {
    font-size: 24px;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-style: normal;
    color: #000;
    background-color: #fff;
    cursor: pointer;
  }
`;

export const SubmenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-top: 26px;
`;

export const SubmenuTypo = styled(Typography)`
  &&& {
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #aaaaaa;
    cursor: pointer;
  }
`;

export const SubmenuDivider = styled.div`
  width: 1px;
  height: 15px;
  background: #aaa;
`;
