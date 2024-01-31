import { useState } from 'react'

const Button = ({state, setState, text}) => {
  return(
    <button onClick={() => setState(state+1)}>{text}</button>
  )
}

const Statistic = ({state, text}) => 
    <p>{text} {state}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button state={good} setState={setGood} text="good"/>
      <Button state={neutral} setState={setNeutral} text="neutral"/>
      <Button state={bad} setState={setBad} text="bad"/>

      <h1>statistics</h1>
      <Statistic state={good} text="good"/>
      <Statistic state={neutral} text="neutral"/>
      <Statistic state={bad} text="bad"/>
    </div>
  )
}

export default App