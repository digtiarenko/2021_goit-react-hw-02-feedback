import { Component } from 'react';

import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleLikes = event => {
    const feature = [event.target.innerHTML];

    this.setState(prevState => {
      return {
        [feature]: prevState[feature] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0,
    );

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0,
    );
    const PositivePercentage = (this.state.good / total) * 100;

    return PositivePercentage;
  };

  render() {
    console.log(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLikes={this.handleLikes} />
        </Section>
        <Section title="Statistics">
          <Statistics
            options={this.state}
            total={this.countTotalFeedback}
            percentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}

export default App;