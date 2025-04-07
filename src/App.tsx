import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [test, setTest] = useState(0);

  useEffect(() => {
    const setHeight = () => {
      const vh = window.innerHeight * 0.01;
      if (vh > 0) {
        setTest(vh);
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      }
    };

    // Подождать немного перед первым вызовом
    const timeout = setTimeout(() => {
      setHeight();
    }, 100);

    window.addEventListener("resize", setHeight);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", setHeight);
    };
  }, []);
  return (
    <div className="scroll-container">
      <div className="section first">
        <h1>{test}</h1>
      </div>
      <div className="section second">
        <h1>{test}</h1>
      </div>
    </div>
  );
}

export default App;
