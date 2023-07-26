import React from 'react'
import Score from './Score'

function Student(props) {
  return (
    <div className='studentInfo'>
        <h2> Student Name: {props.studentInfo.name} </h2>
        <p> <b>Student Bio</b>: {props.studentInfo.bio} </p>
        { /* To display student scores, open an unordered list tag (<ul></ul>), then iterate throu the array of scores using the map call back function */}
    
            <span> <b>Score and Date Garded:</b>  </span>
            {/* // Mapping through the scores array. I named a varaible  called eachScoreObject ( but you can give it any name) to help remember what I am looping through*/}
            {props.studentInfo.scores.map((eachScoreObject,i) =>{
              return (
                <Score key={i} scoresInfo={eachScoreObject}/>
                // <ul>
                //   <li key={i}>{score.score}{score.date}

                //   </li>
                // </ul>
                )
})}
            
           
    </div>
  )
}

export default Student