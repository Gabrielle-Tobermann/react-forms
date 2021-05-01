import React from 'react';
import PropTypes from 'prop-types';
import '../App/App.scss';
import StudentForm from '../StudentForm';
import StudentCard from '../Components/StudentCard';

function Students({ students, setStudents }) {
  return (
    <>
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
    </>
  );
}

Students.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired
};

export default Students;
