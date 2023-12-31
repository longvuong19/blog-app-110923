import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ArticleDetailPage from "./pages/articlesDetail/ArticleDetailPage";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/blog/:id" element={<ArticleDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
