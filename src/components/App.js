import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {NavBar,CreatePost,Home,Posts,PageNotFound} from './'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/post/:postId" element={<Posts/>}/>
        <Route path="/create-post" element={<CreatePost/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
