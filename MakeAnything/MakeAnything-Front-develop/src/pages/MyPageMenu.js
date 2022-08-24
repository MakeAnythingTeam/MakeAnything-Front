import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from 'antd';
import styled from 'styled-components';

const MyPageMenu = ({ select }) => {
  const navigate = useNavigate();

  const onClick = (id) => () => {
    if (id === 0) {
      navigate('/mypage/buylist');
      return;
    }
    if (id === 1) {
      navigate('/mypage/selllist');
      return;
    }
  };

  return (
    <MenuContainer>
      <MenuTitleTypo>목록</MenuTitleTypo>
      <MenuDivider />
      <MenuTypo isPoint={select === 0} onClick={onClick(0)}>
        구매내역
      </MenuTypo>
      <MenuTypo isPoint={select === 1} onClick={onClick(1)}>
        판매내역
      </MenuTypo>
      <MenuTypo isPoint={select === 2}>관심상품</MenuTypo>
      <MenuTypo isPoint={select === 3}>판매정산계좌</MenuTypo>
    </MenuContainer>
  );
};

export default MyPageMenu;




export const MenuContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const MenuTitleTypo = styled(Typography)`
  &&& {
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-style: normal;
    font-size: 20px;
    font-weight: 900;
    color: #000;
  }
`;

export const MenuDivider = styled.div`
  width: 250px;
  height: 1px;
  background: #aaa;
`;

export const MenuTypo = styled(Typography)`
  &&& {
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-style: normal;
    font-weight: 700;
    color: ${(props) => (props.isPoint ? `#2F3EFF` : `#AAAAAA`)};
    cursor: pointer;
  }
`;
