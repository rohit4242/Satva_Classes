import "./App.css";
import MainPage from "./Layouts/main";
import FAQSection from "./Components/FAQSection/FAQSection";
import Post from "./Components/Post/Post";

import NotFoundPage from "./Layouts/NotFoundPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="faq" element={<FAQSection/>}/>
      <Route path="blog/:postId" element={<Post/>}/>

      <Route path="/*" element={<NotFoundPage/>}/>

    </Routes>
    </BrowserRouter>
     
  );
}

export default App;
