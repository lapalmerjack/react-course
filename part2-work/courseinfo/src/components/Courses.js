import React from 'react'

const Course = (props) => {

  const sum = props.course.parts.reduce((sum, item) => sum + item.exercises,
  0)

  return (
    <div>
      <h1>{props.course.name}</h1>
      <ul>
        {props.course.parts.map(part =>
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        )}
      </ul>

      <p><b>Total Number of Exercises: {sum}</b></p>
    

    </div>
  )

}

const Courses = (props) => {


  return (
    <div>
      <ul>
        {props.courses.map(courses =>
        <li key={courses.id}>
          <Course course ={courses} />
        </li>
        )}
      </ul>
    </div>
  )

}

export default Courses
