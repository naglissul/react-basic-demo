import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import { useState } from "react";

const routes = [
  {
    path: "/mainpage/:num",
    component: <MainPage />,
  },
  {
    path: "/",
    component: <div>Home</div>,
  },
];

function App() {
  const [isGreen, setIsGreen] = useState(false);

  return (
    <BrowserRouter>
      {isGreen ? (
        <div style={{ backgroundColor: "green" }}>Green</div>
      ) : (
        <div style={{ backgroundColor: "red" }}>Red</div>
      )}
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
        {/* <Route path="/" element={<div>h</div>} />
        <Route path="/mainpage/:num" element={<MainPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
