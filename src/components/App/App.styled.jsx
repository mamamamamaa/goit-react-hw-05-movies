import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.nav`
  height: 30px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const LogoCont = styled.div`
  margin-right: auto;
`;

export const AppCont = styled.div`
  width: 500px;
  height: 70vh;
  overflow: scroll;
  margin-left: auto;
  margin-right: auto;
  background-color: #879dfb;
  padding: 20px;
  border-radius: 10px;

  -webkit-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.57);
  box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.57);

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const NavCont = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  background-color: #4e5d99;
  border-radius: 10px;
  padding: 10px 20px;
`;

export const StyledLink = styled(NavLink)`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;

  &.active {
    padding: 5px 10px;
    background-color: #1e2640;
    border-radius: 10px;
  }
`;
