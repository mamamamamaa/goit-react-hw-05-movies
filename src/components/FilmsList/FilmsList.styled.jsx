import styled from '@emotion/styled';

export const List = styled.ol`
  /* list-style: none; */
  display: flex;
  flex-direction: column;
  padding: 20px 0 0 30px;
  gap: 6px;
`;

export const ListItem = styled.li`
  &:hover {
    color: #1e2640;
  }
`;
