import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { getStudents } from '../helpers/data/studetnData';
import Routes from '../helpers/Routes';

function App() {
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getStudents().then((response) => setStudents(response));
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        // something
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);
  return (
    <>
    <Router>
    <Navbar
    user={user}
    />
    <Routes
    students={students}
    setStudents={setStudents}
    />
    </Router>
    </>
  );
}

export default App;
