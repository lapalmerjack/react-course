import React from 'react'

const Header = (props) => {
  return (
    <>
    <h1>{props.course.name}</h1>
    </>

  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} </p>
    </div>
  )
}

const Content = (props) => {
   const list =props.parts.map(function(item) {

    return (

      <>
      <p> {item.name}: {item.exercises}</p>
      </>

    )
    
   })

   return list


};

const Total = (props) => {

  const sum = props.parts.reduce(function(prev, current) {
    return prev + current.exercises
  }, 0);

return (
 <div>
   <p>Number of exercises: {sum}</p>
 </div>
)
  
}

const App = () => {
  const course = {
  name: 'Half Stack application development',
  parts: [

    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  }
  

  
  return (
    <div>
     <Header course={course}/>
     <Content parts={course.parts}/>
     <Total  parts={course.parts}/>
    </div>
  );
}

export default App;
