import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence,
  browserLocalPersistence,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const firebaseConfig = {
  apiKey: 'AIzaSyALnurIGO_Kpkhn2rWKpcMLhWdAw7awo3E',
  authDomain: 'mvnu-spiritual-life-mvp.firebaseapp.com',
  projectId: 'mvnu-spiritual-life-mvp',
  storageBucket: 'mvnu-spiritual-life-mvp.appspot.com',
  messagingSenderId: '1002529592969',
  appId: '1:1002529592969:web:2d413e9edffc0cc56b9858',
  measurementId: 'G-Q5S90YQPZ8',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence:
    Platform.OS === 'web'
      ? browserLocalPersistence
      : getReactNativePersistence(AsyncStorage),
});
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
