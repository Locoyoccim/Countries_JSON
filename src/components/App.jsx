import { Outlet } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/all";
import "/src/styles/App.css";
import { useEffect, useRef } from "react";

function App() {

  useGSAP(() => {
    gsap.registerPlugin(TextPlugin);

    gsap.to("#scramble", {
      duration: 2,
      text: "Where in the World?",
      ease: "none",
      yoyo: true,
    });
  });

  function onclick(){
    document.querySelector('body').classList.toggle('darkmode');
  }

  return (
    <>
      <nav>
        <div id="scramble"></div>
        <div>
          <button className="dark_mode_button" onClick={onclick}>
            <i className="bi bi-moon-fill"></i>
            Dark Mode
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
