import logo from './logo.svg';
import React, { useState, useMemo, useContext, useEffect, useRef, useLayoutEffect } from "react";
import './App.css';
import ReactCodeInput from "react-verification-code-input";
import ReactModal from "react-modal";


function App() {
  
  return (
    <div className="App">
      <div className="App-header">
        <h1>HELLO ITS ME and i tired very much!!!</h1>
        <form className="auth-modal__form" onSubmit={(e) => e.preventDefault()}>
						<ReactCodeInput
            						fieldWidth={50}
							fields={4}
						/>
        </form>
  
      </div>
    </div>
  );
}

export default App;
