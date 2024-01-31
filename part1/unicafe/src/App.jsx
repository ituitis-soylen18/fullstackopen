import { useState } from 'react'

const Button = ({state, setState, text}) => {
  return(
    <button onClick={() => setState(state+1)}>{text}</button>
  )
}

const Statistic = ({state, text}) => 
    <div>{text} {state}</div>

const Statistics = ({good, neutral, bad, all}) => {
  return(
    <>
      <h1>statistics</h1>
      <Statistic state={good} text="good"/>
      <Statistic state={neutral} text="neutral"/>
      <Statistic state={bad} text="bad"/>
      <Statistic state={all} text="all"/>
      <Statistic state={(good-bad)/all} text="average"/>
      <Statistic state={parseFloat(good/all * 100) + " %"} text="positive"/>
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