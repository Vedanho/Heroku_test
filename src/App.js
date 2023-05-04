import logo from './logo.svg';
import React, { useState, useMemo, useContext, useEffect, useRef } from "react";
import './App.css';



function App() {

  const [isShowSearchButtons, setIsShowSearchButtons] = useState(false);

  let button = document?.querySelectorAll(".searchbox__btns-wrapper");
		let height = window.visualViewport.height;
		let viewport = window.visualViewport;


  function blurHandler() {
	// 	button.style.bottom = "0";
	}


 const inputRef = useRef();

  return (
    <div className="App">
      <div className="App-header">
        <h1>HELLO ITS ME, new commit. And i am here</h1>
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
