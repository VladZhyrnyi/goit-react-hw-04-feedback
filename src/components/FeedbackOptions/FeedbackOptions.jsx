import React from 'react';
import { Wrapper, OptionBtn } from './FeedbackOptions.styled'; 

export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <OptionBtn key={option} type="button" name={option} onClick={(event) =>onClick(event.currentTarget.name)}>
          {option}
        </OptionBtn>
      ))}
    </Wrapper>
  );
};
