import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
`;

export const Logo = styled.img`
  width: 120px;
  height: auto;
`;

export const SearchBar = styled.input`
  flex-grow: 1;
  max-width: 600px;
  padding: 10px;
  margin: 0 20px;
  border-radius: 8px;
  border: 4px solid #0EB400;
  background: #FFF;
  color: #CCC;
  font-size: 18px;
  font-weight: 700;
  padding-left: 30px;
  margin-left: 200px;
`;

export const WriteButton = styled.button`
  display: flex;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 45px;
  margin-right: 30px;
  border-radius: 8px;
  background: var(--Primary, #8EE559);
  color: #FFF;
  font-size: 20px;
  font-weight: 400;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  span {
    font-weight: bold;
  }
`;
