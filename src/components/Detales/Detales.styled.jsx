import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const DetalesConrainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  gap: 20px;
`;

export const GoBack = styled(NavLink)`
  text-decoration: none;
  color: gray;
  display: block;
`;
