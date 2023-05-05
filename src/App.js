import logo from './logo.svg';
import React, { useState, useMemo, useContext, useEffect, useRef } from "react";
import './App.css';
import ReactCodeInput from "react-verification-code-input";
import ReactModal from "react-modal";


function App() {



  return (
    <div className="App">
      <div className="App-header">
        <h1>HELLO ITS ME,and i am good</h1>
        <ReactModal isOpen={true} className="auth-modal-content"> 


        <form className="auth-modal__form" onSubmit={(e) => e.preventDefault()}>
				<div className="auth-modal__code-wrapper">
					<div className="auth-modal__code">
						<ReactCodeInput
						
							fields={4}
							autoFocus={true}
						/>
					</div>
          </div>
        </form>
        </ReactModal>
  
      </div>
    </div>
  );
}

export default App;
