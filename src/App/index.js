import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import firebaseConfig from '../helpers/apiKeys';
import './App.scss';
import StudentForm from '../StudentForm';
import { getStudents } from '../helpers/data/studetnData';

firebase.initializeApp(firebaseConfig);

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((response) => setStudents(response));
  }, []);

  console.warn(students);

  return (
    <div className='App'>
      <StudentForm formTitle= 'Form Name'/>
      <hr/>
      {students.map((studentInfo) => {
       <StudentCard key={studentInfo.firebaseKey}
       name={studentInfo.name}
       teacher={studentInfo.teacher}
       grade={Number(studentInfo.grade)}
       />;
      })}
    </div>
  );
}

export default App;
