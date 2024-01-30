const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return(
    <p> {props.name} {props.exercises} </p>
  )
}

const Content = (props) => {
  return (
    <>
      {props.parts.map((part) => {
        return (
          <Part name={part.name} exercises={part.exercises}/>
        );
      })}
    </>
  );
}

const Total = (props) => {
  let total = props.parts.reduce((sum, part) => sum + part.exercises, 0)
  return(
    <p>Number of exercises {total}</p>
  ) 
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  
  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} />
      <Total parts={[part1, part2, part3]} />
    </div>
  )
}

export default App