import logo from './logo.svg';
import React, { useState, useMemo, useContext, useEffect, useRef, useLayoutEffect } from "react";
import './App.css';
import ReactCodeInput from "react-verification-code-input";
import ReactModal from "react-modal";


function App() {
  const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, document.documentElement.offsetHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  };
  const isMobile = useWindowSize()[0] < 767;

  return (
    <div className="App">
      <div className="App-header">
        <h1>HELLO ITS ME,and i am good</h1>
        <ReactModal isOpen={true} className="auth-modal-content"
         onFocus={true} 
         autoFocus={true} 
         fieldWidth={isMobile ? 44 : 56}
					fieldHeight={isMobile ? 44 : 56}> 


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
