import { LandingPage } from "./pages/LandingPage";
import {BookDetail} from "./pages/BookDetail";
import {BrowserRouter,Routes, Route, Link} from "react-router-dom"
import "./App.css";

function App() {
  return (
   <BrowserRouter>
      <header>
        <Link to="/">
          <h1 className="title"> Libros</h1>
        </Link> 
        </header>

        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/libraries/:bookId" element={<BookDetail/>}/>
        </Routes>
 
      </BrowserRouter>
  );
}

export default App;
