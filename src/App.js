import "./App.css";
import { useState } from "react"; //Used to update and track data when needed
import Student from "./components/Student";
import Score from "./components/Score";
import students from "./models/studentdata";

function App() {
  //initializing  the useState /( Declaring a variable and the function that updates it)
  const [studentData, setStudentData] = useState({ students: students });

  return (
    <div className="App">
      <h1> Students Data </h1>
      <div className="studentDataWrapper">
      {studentData.students.map((studentInfo,i) => {
        return (
          <Student key={i} studentInfo={studentInfo}/>
          // <h3>
          //   {" "}
          //   Student Name:
          //   {studentInfo.name}: BIO: {studentInfo.bio}:
          // </h3>
        );
        
        
      })}
      </div>
      
    </div>
  );
}

export default App;
