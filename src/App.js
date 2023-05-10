import logo from './logo.svg';
import React, { useState, useMemo, useContext, useEffect, useRef, useLayoutEffect } from "react";
import './App.css';
import ReactCodeInput from "react-verification-code-input";
import ReactModal from "react-modal";


function App() {

  function CustomCodeInput() {
    const [code, setCode] = useState(new Array(4).fill(""))

    return (
        <div>
            {code.map((_, index) => (
                <>
                <input type="number" className='code-input'/> {
                    
                }
                </>
            ))}
        </div>
    );
}
  
  return (
    <div className="App">
      <div className="App-header">
        <h1>HELLO ITS ME!</h1>
        <ReactModal isOpen={true} className="auth-modal-content"> 
        <form className="auth-modal__form" onSubmit={(e) => e.preventDefault()}>
						<CustomCodeInput
						/>
        </form>
        </ReactModal>
  
      </div>
    </div>
  );
}

export default App;
