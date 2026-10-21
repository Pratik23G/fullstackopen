import { useState } from "react";

const Statistics = (props) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p> all {props.total} </p>
      <p> avg {props.avg} </p>
      <p>positive: {props.positiveRate} %</p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + bad + neutral;
  const avg = (good * 1 + neutral * 0 + bad * -1) / total;
  const positiveRate = (good / total) * 100;

  function goodClick() {
    setGood(good + 1);
  }

  function badClick() {
    setBad(bad + 1);
  }

  function neutralClick() {
    setNeutral(neutral + 1);
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <button onClick={goodClick}>good</button>
      <button onClick={neutralClick}>neutral</button>
      <button onClick={badClick}>bad</button>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        avg={avg}
        positiveRate={positiveRate}
      />
    </div>
  );
};

export default App;
