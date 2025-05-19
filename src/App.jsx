import "./App.css";
import Main from "./Components/Main";
import Nav from "./Components/Nav";

import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (theme) {
      document.body.classList.add("theme2");
    } else {
      document.body.classList.remove("theme2");
    }
    // theme === true
    //   ? document.body.classList.toggle("theme2")
    //   : document.body.classList.toggle("theme2");
    //  document.body.classList.add(`${theme === true ? "theme1"}` : "" )
  }, [theme]);

  function handleThemeToggle() {
    console.log("hi");
    setTheme(!theme);
  }

  return (
    <>
      <div className="container">
        <Nav handleThemeToggle={handleThemeToggle} />
        <Main />
      </div>
    </>
  );
}

export default App;
