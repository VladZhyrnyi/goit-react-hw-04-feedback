import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOptionClick = event => {
    const { value } = event.currentTarget;

    this.setState(prevState => {
      return { [value]: (prevState[value] += 1) };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good / (this.countTotalFeedback() || 0)) * 100
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onClick={this.handleOptionClick}/>
        {this.countTotalFeedback() !== 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    );
  }
}
