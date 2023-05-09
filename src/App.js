import logo from './logo.svg';
import React, { useState, useMemo, useContext, useEffect, useRef, useLayoutEffect } from "react";
import './App.css';
import ReactCodeInput from "react-verification-code-input";
import ReactModal from "react-modal";


function App() {
  
  return (
    <div className="App">
      <div className="App-header">
        <h1>HELLO ITS ME!</h1>
        <ReactModal isOpen={true} className="auth-modal-content"> 
        <form className="auth-modal__form" onSubmit={(e) => e.preventDefault()}>
						<ReactCodeInput
							fields={4}
						/>
        </form>
        </ReactModal>
  
      </div>
    </div>
  );
}

export default App;
