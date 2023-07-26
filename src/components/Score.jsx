import React from 'react'
// import Student from './Student'

function Score(props) {
  return (
    <div className='studentScore' >
      <div className='topPage'>
        <div className='stuScore'> Student Score:</div>
         <div className='scoreNumber'>{props.scoresInfo.score}</div>  
      </div>
       
       <div className='bottomPage'>
          <div className='dateGradedHeader'> Date Score Graded: </div>
          <div className='dateGraded'> {props.scoresInfo.date} </div>
       </div>

        

    </div>
  )
    
}

export default Score