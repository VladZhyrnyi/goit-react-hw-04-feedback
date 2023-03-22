import React from 'react';
import { Wrapper, OptionBtn } from './FeedbackOptions.styled'; 

export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <OptionBtn key={option} type="button" value={option} onClick={onClick}>
          {option}
        </OptionBtn>
      ))}
    </Wrapper>
  );
};
