import { useState } from "react";

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}> {props.text} </button>;
};

const Statistics = (props) => {
  if (props.total === 0) {
    return <p>No feedback Given</p>;
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.total} />
        <StatisticLine text="avg" value={props.avg} />
        <StatisticLine text="positive" value={props.positiveRate} />
      </tbody>
    </table>
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
      <Button onClick={goodClick} text="good" />
      <Button onClick={neutralClick} text="neutral" />
      <Button onClick={badClick} text="bad" />
      <h2>Statistics</h2>
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
