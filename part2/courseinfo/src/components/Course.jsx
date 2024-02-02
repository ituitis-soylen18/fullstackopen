const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {" "}
      {props.name} {props.exercises}{" "}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      {props.parts.map((part) => {
        return (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        );
      })}
    </>
  );
};

const Total = (props) => {
  let total = props.parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p>
      {" "}
      <b>total of {total} exercises</b>
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
