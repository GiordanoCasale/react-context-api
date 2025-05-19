import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import PostsPage from "./components/pages/PostsPage";
import { PostsProvider } from "./contexts/PostsContext";

function App() {
  return (
    <PostsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </BrowserRouter>
    </PostsProvider>
  );
}

export default App;
