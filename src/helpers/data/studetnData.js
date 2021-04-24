import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const addStudent = (student) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/students.json`, student)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/students/${response.data.name}.json`, body)
        .then(() => resolve(console.warn('Student Added', student)));
    }).catch((error) => reject(error));
});

export default addStudent;
