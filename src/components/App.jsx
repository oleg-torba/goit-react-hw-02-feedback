import React, { Component } from 'react';
import { FeedbackOptions } from './feedback/FeedbackOptions';
import { Statistic } from './statistic/Statistic';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  }

  countPositiveFeedbackPercentage() {
    const good = this.state.good;
    const total = this.countTotalFeedback();
    return Math.round((good * 100) / total);
  }
  render() {
    const total = this.countTotalFeedback();
    const { good, bad, neutral } = this.state;
    const positive = this.countPositiveFeedbackPercentage();

    return (
      <div className="feedback">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section>
          {total !== 0 ? (
            <Statistic
              good={good}
              bad={bad}
              neutral={neutral}
              total={total}
              positive={positive}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
