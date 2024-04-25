
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey:'AIzaSyApwH-F2fl3N-JMrY7ITa_4hXNEGWLhPVc',
  authDomain:'tea-authentication-98965.firebaseapp.com',
  projectId:'tea-authentication-98965',
  storageBucket:'tea-authentication-98965.appspot.com',
  messagingSenderId:'217101997532',
  appId:'1:217101997532:web:8c79a73efc4a2ba438ab19',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth

