import logo from './logo.svg';
import React, { useState, useMemo, useContext, useEffect, useRef } from "react";
import './App.css';



function App() {

  const [isShowSearchButtons, setIsShowSearchButtons] = useState(false);


  useEffect(() => {
  let button = document?.querySelectorAll(".searchbox__btns-wrapper");
		let height = window.visualViewport.height;
		let viewport = window.visualViewport;

    window.visualViewport.addEventListener("resize", resizeHandler);

		function resizeHandler() {
			if (!/iPhone|iPad|iPod/.test(window.navigator.userAgent)) {
				height = viewport.height;
			}
			button.style.bottom = `${height - viewport.height + 10}px`;
		}
	}, [isShowSearchButtons]);

  function blurHandler() {
	// 	button.style.bottom = "0";
	}


 const inputRef = useRef();

  return (
    <div className="App">
      <div className="App-header">
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
