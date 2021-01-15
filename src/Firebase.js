import firebase from 'firebase';

const config = {
  projectId:'reactchat-72c3f',
  apiKey:'',
  databaseURL:'https://reactchat-72c3f-default-rtdb.firebaseio.com',

  };
firebase.initializeApp(config);

export default firebase;

