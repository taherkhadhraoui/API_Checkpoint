import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import NavbarC from "./Components/Navbar/NavbarC";
import User from "./Components/User";
import Details from "./Components/UserList/Details";

function App() {
  return (
    <div className="App">
      <NavbarC />
      <h1>------------ API Checkpoint ------------</h1>
      <h2>------------ List of USer ------------</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
