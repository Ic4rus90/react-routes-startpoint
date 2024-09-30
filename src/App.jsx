import { appsData, productsData } from "./data.js";
import "./App.css";
import { useState } from "react";
import { Link, Route, Routes, useNavigate } from 'react-router-dom'

import ProductsPage from "./pages/Products/index.jsx";
import Home from "./pages/Home/index.jsx";
import AppsPage from "./pages/Apps/index.jsx";
import ViewProductPage from "./pages/ViewProduct/index.jsx";

function App() {
  const [products] = useState(productsData)
  const [apps] = useState(appsData)
  const navigate = useNavigate()

  console.log({ products, apps})

  /*
  Everything enclosed in the header will be rendered for each page.  
  */

  /*
  :id 
  */

  return (
    <div className="App">
      <header>
        <h1>Apple Shop</h1>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
              </li>
            <li>
              <Link to="/products"> Products </Link> 
              </li>
            <li>
              <Link to="/apps" > Apps </Link>
              </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route 
          path="/"
          element={<Home/>}
          />
        <Route
          path="/products"
          element={<ProductsPage products={products} />}
          /> 
        <Route path="/products/:id"
          element={<ViewProductPage products={products}/>}
          />
        <Route
          path="/apps"
          element={<AppsPage apps={apps}/>}
        />
      </Routes>
      <button onClick={() => navigate("/")}> Home </button>
      <button onClick={() => navigate("/products")}> Products </button>
      <button onClick={() => navigate("/apps")}> Apps </button>
    </div>
  );
}

export default App;
