import React from 'react';
import { HeaderContainer, Logo, SearchBar, WriteButton, UserProfile } from './style';
import logo from '../../assets/logo.png';
import userImage from '../../assets/userImage.svg';

const UserHeader = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <SearchBar placeholder="검색어를 입력하세요" />
      <WriteButton>글 작성</WriteButton>
      <UserProfile>
        <img src={userImage} alt="User Profile" />
        <span>UserName</span>
      </UserProfile>
    </HeaderContainer>
  );
};

export default UserHeader;
