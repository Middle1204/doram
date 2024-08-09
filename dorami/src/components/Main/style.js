import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 1152px;
  padding: 20px;
  margin: 0 auto;
`;

export const Banner = styled.div`
  display: flex;
  width: 100%;
  height: 180px;
  padding: 51.5px 380.5px;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h2`
  text-align: left;
  margin-bottom: 10px;
`;

export const CategorySection = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  margin: auto;
`;

export const CategoryButton = styled.button`
  padding: 8px 24px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid #0EB400;
  color: #000;
  font-size: 16px;
  width: auto;
  height: 10%;
  font-weight: 400;

  &:hover {
    background-color: #ddd;
  }
`;

export const BookSection = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  
  img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
`;

export const BookTitle = styled.span`
  font-size: 14px;
  text-align: center;
`;
