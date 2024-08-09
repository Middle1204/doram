import React from 'react';
import UserHeader from '../Header/index';
import { MainContainer, Banner, SectionTitle, CategorySection, CategoryButton, BookSection, BookCard, BookTitle } from './style';


const UserMain = () => {
  return (
    
    <MainContainer>
    <UserHeader></UserHeader>
      <Banner>여기에 배너가 표시됩니다</Banner>
      <SectionTitle>마음에 드는 책을 골라 읽어요 🎶</SectionTitle>
      <CategorySection>
        <CategoryButton>시</CategoryButton>
        <CategoryButton>소설</CategoryButton>
        <CategoryButton>단편 소설</CategoryButton>
      </CategorySection>
      <SectionTitle>요즘 가장 핫한 이야기만 모아봤어요! 🔥</SectionTitle>
      <BookSection>
        <BookCard>
          <img src="../../assets/book1.png" alt="Book Cover" />
          <BookTitle>책 제목 1</BookTitle>
        </BookCard>
        <BookCard>
          <img src="../../assets/book2.png" alt="Book Cover" />
          <BookTitle>책 제목 2</BookTitle>
        </BookCard>
        <BookCard>
          <img src="../../assets/book3.png" alt="Book Cover" />
          <BookTitle>책 제목 3</BookTitle>
        </BookCard>
      </BookSection>
    </MainContainer>
  );
};

export default UserMain;
