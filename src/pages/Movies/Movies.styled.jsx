import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Form = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: rgb(229, 229, 229);
`;

export const Input = styled(TextField)`
  width: 80%;
  margin-right: 10px;
`;

export const Submit = styled(Button)`
  background-color: #4e5d99;
  &:hover {
    background-color: #879dfb;
  }
`;
