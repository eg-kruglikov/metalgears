import "./App.css";
import logo_metalgears from "./assets/logo_metalgears.png";

import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    const setHeight = () => {
      const vh = window.innerHeight * 0.01;
      if (vh > 0) {
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
    <div className="main-container">
      <div className="child-container">
        <div className="header-container">
          {/* <p className="header-text">MEATAL GEARS</p> */}
        </div>
        <div className="body-container">
          {/* <p className="header-text">MEATAL GEARS</p> */}

          {/* <div className="body-info">
            <div className="body-info-text-heading">КОНТРАКТНЫЕ ЗАПЧАСТИ</div>
            <div className="body-info-text-content">
              {" "}
              Мы занимаеся продажей дигателей, кпп и кузовных элементов для
              автопобилей. В наличии и под заказ на такие мароки: volkwaagen,
              ВАЗ, lexus, audi
            </div>
          </div>
          <div className="body-photo"></div> */}
        </div>
        <div className="footer-container">
          {/* <img className="logo" src={logo_metalgears}></img> */}
        </div>
      </div>
    </div>
  );
}

export default App;
