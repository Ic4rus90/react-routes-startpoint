import { appsData, productsData } from "./data.js";
import "./App.css";
import { useState } from "react";
import { Link, Route, Routes } from 'react-router-dom'

import ProductsPage from "./pages/Products/index.jsx";
import Home from "./pages/Home/index.jsx";
import AppsPage from "./pages/Apps/index.jsx";
import ViewProductPage from "./pages/ViewProduct/index.jsx";

function App() {
  const [products] = useState(productsData)
  const [apps] = useState(appsData)

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
            <li><Link to="/"/> Home </li>
            <li><Link to="/products"/> Products </li>
            <li><Link to="/apps" /> Apps </li>
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
          element={<AppsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
