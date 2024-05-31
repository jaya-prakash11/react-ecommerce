import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex  xs:w-[414px] sm:w-screen  h-auto flex-col">
      <HeaderComponent />
      <Home />
      <FooterComponent />
    </div>
  );
}

export default App;
