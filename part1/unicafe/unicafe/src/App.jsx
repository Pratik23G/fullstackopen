import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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
      <button onClick={goodClick}>good</button>
      <button onClick={neutralClick}>neutral</button>
      <button onClick={badClick}>bad</button>
    </div>
  );
};

export default App;
