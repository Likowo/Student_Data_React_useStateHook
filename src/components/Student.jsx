import React from 'react'
import Score from './Score'

function Student(props) {
  return (
    <div className='studentInfo'>
        <h1> {props.student.name} </h1>
        <p> {props.student.bio} </p>
    </div>
  )
}

export default Student