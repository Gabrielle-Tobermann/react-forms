import React, { useEffect, useState } from 'react';
import './App.scss';
import StudentForm from '../StudentForm';
import { getStudents } from '../helpers/data/studetnData';
import StudentCard from '../Components/StudentCard';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((response) => setStudents(response));
  }, []);

  return (
    <div className='App'>
      <StudentForm
      formTitle= 'Form Name'
      setStudents={setStudents}
      />
      <hr/>
      {students.map((studentInfo) => (
       <StudentCard
        key={studentInfo.firebaseKey}
        firebaseKey={studentInfo.firebaseKey}
        name={studentInfo.name}
        teacher={studentInfo.teacher}
        grade={Number(studentInfo.grade)}
        setStudents={setStudents}
       />
      ))}
    </div>
  );
}

export default App;
