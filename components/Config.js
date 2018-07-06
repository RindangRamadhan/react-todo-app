import React from 'react'
import * as firebase from 'firebase'

const config = {
  databaseURL: "https://todoapp-e676a.firebaseio.com"
};

firebase.initializeApp(config);

export default firebase
