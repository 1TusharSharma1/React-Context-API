import React, { useState, useEffect, useContext } from 'react';

import Login from './Components/Login';
import Home from './Components/Home';
import MainHeader from './Components/MainHeader';
import AuthContext from './Components/Store/auth-context';

function App() {
  const ctx = useContext(AuthContext);
  return (
    <>

      <MainHeader/>
      <main>
        {! ctx.isLoggedIn && <Login/>}
        {ctx.isLoggedIn && <Home />}
      </main>
     </>
  );
}
export default App;