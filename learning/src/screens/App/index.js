import './App.css';
import FunctionalComponent from '../../components/FunctionalComponent';
import ClassComponent from '../../components/ClassComponent';
import React from 'react';
// import Header from '../../components/Header';
import Header from '../../components/Header/Header';
import LoginForm from '../../components/LoginForm';

function App() {
  return (
    <React.Fragment>
      {/* <> */}
      <div className='container'>
        <Header />
        
        {/* <FunctionalComponent />
        <ClassComponent /> */}
        <LoginForm />
      </div>
      {/* </> */}
    </React.Fragment>
  );
}

export default App;
