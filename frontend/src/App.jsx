// ---rafce

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBooks";
import DeleteBook from "./pages/DeleteBooks";
import ShowBooks from "./pages/ShowBooks";

const App = () => {
  return (
    <Routes>
      <Route path='/Allhamdulillah-/' element={<Home />}></Route>
      <Route path='/Allhamdulillah-/books/create' element={<CreateBook/>}></Route> 
      <Route path='/Allhamdulillah-/books/edit/:id' element={<EditBook/>}></Route>
       <Route path='/Allhamdulillah-/books/details/:id' element={<ShowBooks/>}></Route>
      <Route path='/Allhamdulillah-/books/delete/:id' element={<DeleteBook/>}></Route> 
    </Routes>
  );
};

export default App;
