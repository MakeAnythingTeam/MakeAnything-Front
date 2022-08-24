import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const MyPageBuyCard = ({
  content,
  data,
  file,
  model_name,
  user_name,
  price,
}) => {
  return (
    <Root>
      <MenuContainer>
        <ProfileImg />
      </MenuContainer>
      <MenuContainer>
        <NameTypo>Seojune Lee</NameTypo>
        {/* {user_name} */}
        <MenuTypo>Super Hornet</MenuTypo>
        {/* {model_name} */}
      </MenuContainer>
      <MenuContainer>
        <MenuTypo>1.5만 회</MenuTypo>
      </MenuContainer>
      <MenuContainer>
        <MenuTypo>$2000</MenuTypo>
        {/* ${price} */}
      </MenuContainer>
      <MenuContainer>
        <MenuTypo>2022.07.12</MenuTypo>
      </MenuContainer>
    </Root>
  );
};

export default MyPageBuyCard;



export const Root = styled.div`
  width: 100%;
  height: 168px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px #eee solid;
  border-bottom: 1px #eee solid;
`;

export const ProfileImg = styled.img`
  width: 168px;
  height: 168px;
  background: #aaaaaa;
`;

export const MenuContainer = styled.div`
  &&& {
    width: calc(880px / 5);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
  }
`;

export const NameTypo = styled(Typography)`
  &&& {
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 18px;
    color: #aaaaaa;
  }
`;

export const MenuTypo = styled(Typography)`
  &&& {
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 18px;
    color: #000000;
  }
`;
