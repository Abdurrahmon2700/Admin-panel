import React from "react";

import Sitebar from "./Components/Sitebar/Sitebar";
import Restaurant from "./Components/Restaurant/Restaurant";
import Branch from "./Components/Branch/Branch";
import Users from "./Components/Users/Users";
import Orders from "./Components/Orders/Orders";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appcss from "./Pagination/App.css";
function App(props) {
  return (
    <>
      <BrowserRouter>
        <div className="container d-flex justify-content-between admin p-4">
          <div className="col-2">
            <Sitebar />
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Restaurant" element={<Restaurant />} />
              <Route path="/Branch" element={<Branch />} />
              <Route path="/Users" element={<Users />} />
              <Route path="/Orders" element={<Orders />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
