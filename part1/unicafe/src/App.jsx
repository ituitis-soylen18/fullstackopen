import { useState } from 'react'

const Button = ({state, setState, text}) => {
  return(
    <button onClick={() => setState(state+1)}>{text}</button>
  )
}

const StatisticLine = ({state, text}) => 
    <div>{text} {state}</div>

const Statistics = ({good, neutral, bad, all}) => {
  if (all === 0) {
    return(
      <>
        <h1>statistics</h1>
        <div>No feedback given</div>
      </>
    )
  }

  return(
    <>
      <h1>statistics</h1>
      <StatisticLine state={good} text="good"/>
      <StatisticLine state={neutral} text="neutral"/>
      <StatisticLine state={bad} text="bad"/>
      <StatisticLine state={all} text="all"/>
      <StatisticLine state={(good-bad)/all} text="average"/>
      <StatisticLine state={parseFloat(good/all * 100) + " %"} text="positive"/>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad

  return (
    <div>
      <h1>give feedback</h1>
      <Button state={good} setState={setGood} text="good"/>
      <Button state={neutral} setState={setNeutral} text="neutral"/>
      <Button state={bad} setState={setBad} text="bad"/>

      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

export default App