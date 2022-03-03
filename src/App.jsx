import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    // Estilado que ya venia en el template
    <div className=" font-sans h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
