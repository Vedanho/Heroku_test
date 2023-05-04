import logo from './logo.svg';
import React, { useState, useMemo, useContext, useEffect, useRef } from "react";
import './App.css';



function App() {

  const [isShowSearchButtons, setIsShowSearchButtons] = useState(false);

  let button
		let height 
		let viewport 

    useEffect(() => {
      window.visualViewport.addEventListener("resize", resizeHandler);
      button = document?.querySelector(".searchbox__btns-wrapper");
      height = window.visualViewport.height;
      viewport = window.visualViewport;
      function resizeHandler() {
        if (!/iPhone|iPad|iPod/.test(window.navigator.userAgent)) {
          height = viewport.height;
        }
        button.style.bottom = `${height - viewport.height + 10}px`;
      }
  
      return () => window.visualViewport.removeEventListener("resize", resizeHandler);
    }, [isShowSearchButtons]);

  function blurHandler() {
	// 	button.style.bottom = "0";
	}


 const inputRef = useRef();

  return (
    <div className="App">
      <div className="App-header">
        <h1>HELLO ITS ME,and i am good</h1>
         <input onFocus={() => setIsShowSearchButtons(true)}
									onBlur={() => {
										setTimeout(() => setIsShowSearchButtons(false), 0);
										blurHandler();
									}} />
     {isShowSearchButtons && (
									<div className="searchbox__btns-wrapper">
										<button className="btn font-bold text-md"
											onClick={() => inputRef.current.onBlur()}
										>
											Отмена
										</button>
										<button className="btn btn--primary font-bold text-md" type="submit">
											Найти
										</button>
									</div>
								)}
      </div>
    </div>
  );
}

export default App;
