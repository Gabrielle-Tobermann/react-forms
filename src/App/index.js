import React from 'react';
import firebase from 'firebase';
import firebaseConfig from '../helpers/apiKeys';
import './App.scss';
import StudentForm from '../StudentForm';

function App() {
  firebase.initializeApp(firebaseConfig);

  return (
    <div className='App'>
      <StudentForm formTitle='New Student'/>
      <StudentForm formTitle='New Teacher'/>
      <StudentForm formTitle='New Grade'/>
      <StudentForm formTitle='New Something'/>
    </div>
  );
}

export default App;
