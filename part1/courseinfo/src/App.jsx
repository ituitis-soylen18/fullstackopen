const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  let zip = props.parts.map((part, i) => [part, props.exercises[i]])
  return (
    <>
      {zip.map((content, index) => {
        return (
          <p key={index}>
            {content[0]} {content[1]}
          </p>
        );
      })}
    </>
  );
}

const Total = (props) => {
  let total = props.exercises.reduce((sum, value) => sum + value, 0)
  return(
    <p>Number of exercises {total}</p>
  ) 
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App