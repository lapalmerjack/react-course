import React, { useState } from 'react'


const Header = (props) => {

  return (
    <div>
      <h1>{props.feedback}</h1>
    </div>


    )
    
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)


const Statistics = (props) => {

  if (props.counter === 0) {
    return (
      <div>
         <h1>{props.statistics}</h1>
        No feedback given
      </div>
    )
  }

  const positive = (props.good/props.counter) * 100
  return (
    <div>
      <h1>{props.statistics}</h1>
    <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{props.good}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{props.bad}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{props.neutral}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{props.counter}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{(props.good + props.bad + props.neutral) / props.counter}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{positive}%</td>
        </tr>
        </tbody>
      </table> 
      </div>
  )
}

const App = () => {
  const feedback = 'give feedback'
  const statistics = 'statistics'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [counter, setCounter] = useState(0)



  const handleGoogClick = () => {
    setGood(good +1)
    setCounter(counter +1)
    
  }

  const handleNeutralClick = () => {
    setNeutral(neutral +0)
    setCounter(counter +1)
  
  }

  const handdleBadClick = () => {
    setBad(bad -1)
    setCounter(counter +1)
 
  }



  return (
    <div>
  <Header feedback={feedback} />
    <Button handleClick={handleGoogClick} text='good'/>
    <Button handleClick = {handleNeutralClick} text='neutral'/>
    <Button handleClick={handdleBadClick} text='bad'/>
    <Statistics statistics={statistics} good={good} neutral={neutral} bad={bad}
     counter={counter}/>
    </div>
  
    
  )
}

export default App; 
