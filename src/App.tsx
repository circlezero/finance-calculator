import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ConvertFeet from "./pages/ConvertFeet";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/feet" element={<ConvertFeet />} />
        {/* 페이지들 편하게 추가 하시죠 */}
      </Routes>
    </div>
  );
}

export default App;
