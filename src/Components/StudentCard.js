import React, { useState } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteStudent } from '../helpers/data/studetnData';
import StudentForm from '../StudentForm';

const StudentCard = ({
  name,
  firebaseKey,
  grade,
  teacher,
  setStudents
}) => {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteStudent(firebaseKey).then((studentArray) => setStudents(studentArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Card body>
    <CardTitle tag="h5">{name}</CardTitle>
    <CardText>Grade: {grade}</CardText>
    <CardText>Teacher: {teacher}</CardText>
    <Button onClick={() => handleClick('delete')}>Delete Student</Button>
    <Button onClick={() => handleClick('edit')}>{editing ? 'Close Form' : 'Edit Student'}</Button>
    {
      editing && <StudentForm
      formTitle='Edit Student'
      setStudents={setStudents}
      name={name}
      firebaseKey={firebaseKey}
      grade={grade}
      teacher={teacher}
    />
  }
  </Card>
  );
};

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  firebaseKey: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  setStudents: PropTypes.func
};

export default StudentCard;
