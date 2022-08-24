import React from 'react';
import Header from '../components/Header';
import { useEffect } from 'react';
import { commonAxios } from '../api/commonAxios';
import { useState } from 'react';
import MyPageMenu from './MyPageMenu';
import MyPageSellCard from './MyPageSellCard';
import { Typography } from 'antd';
import styled from 'styled-components';

const MyPageSellList = () => {
  const [sellList, setSellList] = useState([]);

  useEffect(() => {
    commonAxios({ url: 'users/1/sell', method: 'GET' })
      .then((res) => {
        setSellList(res.data);
      })
      .catch((err) => {
        alert('네트워크 오류');
      });
  }, []);

  return (
    <Root>
      <ProfileRoot>
        <ProfileContainer>
          <ProfileUserInfoContainer>
            <ProfileUserInfoImg />
            <ProfileUserInfoTypoContainer>
              <ProfileUserInfoNameTypo>Test</ProfileUserInfoNameTypo>
              <ProfileUserInfoEmailTypo>
                user@gmail.com
              </ProfileUserInfoEmailTypo>
              <ProfileUserInfoEditTypo>프로필 수정</ProfileUserInfoEditTypo>
            </ProfileUserInfoTypoContainer>
          </ProfileUserInfoContainer>
          <ProfileLevelContainer>
            <ProfileLevelDivider />
            <ProfileLevelTypoContainer>
              <ProfileLevelTitleTypo>등급</ProfileLevelTitleTypo>
              <ProfileLevelTypo>Gold</ProfileLevelTypo>
            </ProfileLevelTypoContainer>
          </ProfileLevelContainer>
        </ProfileContainer>
      </ProfileRoot>
      <ContentRoot>
        <ContentContainer>
          <MyPageMenu select={1} />
          <ContentSellListContainer>
            <ContentSellListHeaderContainer>
              <ContentSellListHeaderTitleTypo>
                판매내역
              </ContentSellListHeaderTitleTypo>
              <ContentSellListHeaderMenuContainer>
                <ContentSellListHeaderMenuTypo />
                <ContentSellListHeaderMenuTypo>
                  상품정보
                </ContentSellListHeaderMenuTypo>
                <ContentSellListHeaderMenuTypo>
                  다운로드 수
                </ContentSellListHeaderMenuTypo>
                <ContentSellListHeaderMenuTypo>
                  상품금액
                </ContentSellListHeaderMenuTypo>
                <ContentSellListHeaderMenuTypo>
                  결제일
                </ContentSellListHeaderMenuTypo>
              </ContentSellListHeaderMenuContainer>
            </ContentSellListHeaderContainer>
            <ContentSellListCardContainer>
              {sellList.map((sellItem, index) => (
                <MyPageSellCard
                  {...sellItem}
                  key={`my_page_sell_card_${index}`}
                />
              ))}
            </ContentSellListCardContainer>
          </ContentSellListContainer>
        </ContentContainer>
      </ContentRoot>
    </Root>
  );
};

export default MyPageSellList;



export const Root = styled.div`
  padding-bottom: 500px;
`;

export const ProfileRoot = styled.div`
  width: 100%;
  height: 358px;
  background: #dbdbdb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  width: 1200px;
  height: 220px;
  display: flex;
  justify-content: space-between;
`;

export const ProfileUserInfoContainer = styled.div`
  display: flex;
  gap: 54px;
`;

export const ProfileUserInfoImg = styled.img`
  width: 220px;
  height: 220px;
  background: white;
  border: 1px #707070 solid;
  border-radius: 110px;
`;

export const ProfileUserInfoTypoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ProfileUserInfoNameTypo = styled(Typography)`
  &&& {
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-style: normal;
    font-size: 28px;
    font-weight: 900;
    color: #000;
    margin-top: 40px;
  }
`;

export const ProfileUserInfoEmailTypo = styled(Typography)`
  &&& {
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-style: normal;
    font-size: 23px;
    font-weight: 600;
    color: #aaaaaa;
    margin-top: 5px;
  }
`;

export const ProfileUserInfoEditTypo = styled(Typography)`
  &&& {
    width: fit-content;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 17px;
    color: #000;
    padding: 5px 10px;
    border: 1.3px #aaa solid;
    border-radius: 15px;
    margin-top: 40px;
    cursor: pointer;
  }
`;

export const ProfileLevelContainer = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileLevelDivider = styled.div`
  width: 1px;
  height: 100px;
  background: #000;
`;

export const ProfileLevelTypoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ProfileLevelTitleTypo = styled(Typography)`
  &&& {
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-style: normal;
    font-size: 18px;
    font-weight: 600;
    color: #aaaaaa;
  }
`;

export const ProfileLevelTypo = styled(Typography)`
  &&& {
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-style: normal;
    font-size: 28px;
    font-weight: 900;
    color: #000;
  }
`;

export const ContentRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

export const ContentContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;

export const ContentSellListContainer = styled.div`
  width: 880px;
  display: flex;
  flex-direction: column;
  gap: 58px;
`;

export const ContentSellListHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ContentSellListHeaderTitleTypo = styled(Typography)`
  &&& {
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-style: normal;
    font-size: 24px;
    font-weight: 700;
    color: #000;
  }
`;

export const ContentSellListHeaderMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-top: 1px #aaa solid;
  border-bottom: 1px #aaa solid;
`;

export const ContentSellListHeaderMenuTypo = styled(Typography)`
  &&& {
    width: calc(880px / 5);
    display: flex;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-style: normal;
    font-size: 19px;
    font-weight: 600;
    color: #000;
  }
`;

export const ContentSellListCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
