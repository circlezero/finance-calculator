import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* 페이지들 편하게 추가 하시죠 */}
      </Routes>
    </div>
  );
}

export default App;
