import React from 'react'
// import Student from './Student'

function Score(props) {
  return (
    <div className='studentScore' >
        <h3> Student Score:{props.scoresInfo.score} </h3>
        <h3> Date Score Graded:{props.scoresInfo.date} </h3>
    </div>
  )
    
}

export default Score