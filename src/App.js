import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatchEvent(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }));
      } else {
        dispatchEvent(logout);
      }
    })
  }, [])
  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
          <div className="app__body">
            <Sidebar />
            <Feed />
            {/*Widgets*/}
          </div>
        )}

    </div>
  );
}

export default App;
