import About from "./components/About";
import Book from "./components/Book";
import BookList from "./components/BookList";
import NewBook from "./components/NewBook";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import NotFound from "./components/NotFound"
import TestBox from "./components/TestBox";
import BookLayout from "./BookLayout";
function App() {
  return (
    <>
  <nav>
    <ul>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/NewBook">NewBook</Link>
      </li>
      <li>
        <Link to="/Book/:id">Book</Link>
      </li>
      <li>
        <Link to="/booklist">BookList</Link>
      </li>
      <li>
        <Link to="/testBox">TestBox</Link>
      </li>
      <li>
        <NavLink style={({isActive})=>{
          return isActive?{color:"red"}:{}
        }}
        to="/"/>
      </li>
    </ul>
  </nav>
  <Routes>
     <Route path="/testBox" element={<TestBox/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/NewBook" element={<NewBook/>}/> 
    

    <Route path="/Book" element={<BookLayout/>}>
      <Route path=":id" element={<Book/>}/>
      <Route path="new" element={<Book/>}/>
      <Route index element={<Book/>}/>    
    </Route>
    {/* <Route path="/Book" element={<Book/>}/>
    <Route path="/Book/:id" element={<Book/>}/>
    <Route path="/Book/new" element={<Book/>}/> */}
    <Route path="/booklist" element={<BookList/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
    </>
  );
}

export default App;
