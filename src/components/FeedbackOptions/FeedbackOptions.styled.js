import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const OptionBtn = styled.button`
  height: 34px;
  width: 120px;
  border: 1px solid #2a2a2a;
  border-radius: 10px;

  &:hover {
    background-color: teal;
    color: white;
  }
`;
