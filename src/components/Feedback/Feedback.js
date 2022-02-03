import { useState } from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

import { GlobalStyle } from "../../components/constans/GlobalStyle";

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const positivePercentage = Math.round((good * 100) / total);

  return (
    <div>
      <Section title="Please leave feedback">
        {" "}
        <FeedbackOptions
          onGood={() => setGood((prevState) => (prevState += 1))}
          onNeutral={() => setNeutral((prevState) => (prevState += 1))}
          onBad={() => setBad((prevState) => (prevState += 1))}
        />
      </Section>

      <Section title="Statistics">
        {total === 0 && <Notification message="There is no feedback" />}

        {total > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
      <GlobalStyle />
    </div>
  );
}
