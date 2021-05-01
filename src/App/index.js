import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { getStudents } from '../helpers/data/studetnData';
import Routes from '../helpers/Routes';

function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getStudents().then((response) => setStudents(response));
  }, []);
  return (
    <>
    <Router>
    <Navbar/>
    <h1>Hello World!</h1>
    <Routes
    students={students}
    setStudents={setStudents}
    />
    </Router>
    </>
  );
}

export default App;
