import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const DetalesConrainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
`;

export const GoBack = styled(NavLink)`
  position: relative;
  left: -20px;
  display: inline-block;
  color: gray;
  background-color: white;
  align-items: center;
  gap: 10px;

  margin: 15px 0;
  padding: 7px;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  text-decoration: none;
`;

export const Decription = styled.div``;

export const FilmTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 15px;
`;

export const UserScore = styled.span`
  font-size: 20px;
`;

export const SubTitle = styled.h2`
  margin: 15px 0 5px 0;
`;

export const ExtraDataList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 20px;

  margin-left: auto;
  margin-right: auto;
`;

export const ExtraDataItem = styled.li`
  background-color: white;
  padding: 15px 20px;
  & a {
    color: grey;
  }
  &:nth-of-type(1) {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-right: 1px solid grey;
    padding-right: 30px;
    padding-left: 30px;
  }
  &:nth-of-type(2) {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const ExtraDataLink = styled(NavLink)`
  &.active {
    font-weight: 700;
    color: #4e5d99;
  }
  &:hover {
    color: #4e5d99;
  }
`;
