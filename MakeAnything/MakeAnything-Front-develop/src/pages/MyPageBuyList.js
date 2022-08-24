import React from 'react';
import Header from '../components/Header';
import { useEffect } from 'react';
import { commonAxios } from '../api/commonAxios';
import { useState } from 'react';
import MyPageMenu from './MyPageMenu';
import MyPageBuyCard from './MyPageBuyCard';
import { Typography } from 'antd';
import styled from 'styled-components';

const MyPageBuyList = () => {
  const [buyList, setBuyList] = useState([]);

  useEffect(() => {
    commonAxios({ url: 'users/1/buy', method: 'GET' })
      .then((res) => {
        setBuyList(res.data);
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
          <MyPageMenu select={0} />
          <ContentBuyListContainer>
            <ContentBuyListHeaderContainer>
              <ContentBuyListHeaderTitleTypo>
                구매내역
              </ContentBuyListHeaderTitleTypo>
              <ContentBuyListHeaderMenuContainer>
                <ContentBuyListHeaderMenuTypo />
                <ContentBuyListHeaderMenuTypo>
                  상품정보
                </ContentBuyListHeaderMenuTypo>
                <ContentBuyListHeaderMenuTypo>
                  다운로드 수
                </ContentBuyListHeaderMenuTypo>
                <ContentBuyListHeaderMenuTypo>
                  상품금액
                </ContentBuyListHeaderMenuTypo>
                <ContentBuyListHeaderMenuTypo>
                  결제일
                </ContentBuyListHeaderMenuTypo>
              </ContentBuyListHeaderMenuContainer>
            </ContentBuyListHeaderContainer>
            <ContentBuyListCardContainer>
              {buyList.map((buyItem, index) => (
                <MyPageBuyCard {...buyItem} key={`my_page_buy_card_${index}`} />
              ))}
            </ContentBuyListCardContainer>
          </ContentBuyListContainer>
        </ContentContainer>
      </ContentRoot>
    </Root>
  );
};

export default MyPageBuyList;




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
    font-size: 28px;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-style: normal;
    font-weight: 900;
    color: #000000;
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

export const ContentBuyListContainer = styled.div`
  width: 880px;
  display: flex;
  flex-direction: column;
  gap: 58px;
`;

export const ContentBuyListHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ContentBuyListHeaderTitleTypo = styled(Typography)`
  &&& {
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-style: normal;
    font-size: 24px;
    font-weight: 700;
    color: #000;
  }
`;

export const ContentBuyListHeaderMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-top: 1px #aaa solid;
  border-bottom: 1px #aaa solid;
`;

export const ContentBuyListHeaderMenuTypo = styled(Typography)`
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

export const ContentBuyListCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
