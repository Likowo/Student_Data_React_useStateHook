import React from 'react'
import Score from './Score'

function Student(props) {
  return (
    <div className='studentInfo'>
        <h1> Student Name: {props.studentInfo.name} </h1>
        <p> <b>Bio</b>: {props.studentInfo.bio} </p>
        {/* To display student scores, open an unordered list tag (<ul></ul>), then iterate throu the array of scores using the map call back function*/}
        <ul>
            <span> <b>Score and Date Garded:</b>  </span>
            {props.studentInfo.scores.map((scores) => {return(<li>[scores][date]</li>)})}
        </ul>
       
    </div>
  )
}

export default Student