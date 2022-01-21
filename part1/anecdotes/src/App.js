import React, { useState } from 'react'


const Button = ({button, text}) => (
  <button onClick={button}>{text}</button>
)

const MostVotes = (props) => {
const copy = [...props.vote]
const HighestScore =  copy.indexOf(Math.max(...copy))


return (
  <div>
    {props.anecdote[HighestScore]}
    <br></br>
    has  {props.vote[HighestScore]} votes
  </div>
)
  
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [index, setIndex] = useState(0)
  const [vote, setVote]= useState([0,0,0,0,0,0,0])
  const [highestVote, setHighestVote] = useState(0)



const getRando = function(number) {
  return Math.floor(Math.random() * number)
}

  const random = () => {
  setIndex(getRando(anecdotes.length))
 

  }

  const highestVotes = () => {
    let copy = [...vote]

    setHighestVote(copy.indexOf(Math.max(...copy))) 
    

  }

  const voting = () => {
    let copy = [...vote]

    copy[index]++
    
    setVote(copy)
  }



  return (
    <div>
      <h2>Anecdote of the Day</h2>
      {anecdotes[index]}
      <br></br>
      has {vote[index]} votes
      <Button button={voting}text='vote' />
      <Button button={random}text='next anecdote'/> 
      <br></br>
      <h2>Anecdote with the most votes</h2>

      <MostVotes vote={vote} anecdote={anecdotes} />
    </div>
  )
}

export default App