import React, { useEffect, useState } from 'react';
import {
  useParams
} from 'react-router-dom';
import { getSingleStudent } from '../helpers/data/studetnData';

export default function SingleStudent() {
  const [student, setStudent] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleStudent(firebaseKey).then(setStudent);
  }, []);
  // This has to match routes path after ':'
  return (
    <div>
      <h1>Single Student</h1>
      {student.name}
    </div>
  );
}
