import React from "react";
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Home from "./components/Home"
import ErrorPage from "./components/ErrorPage";
import UploadProduct from "./components/UploadProduct";
import UploadBanner from "./components/UploadBanner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "./components/Product"
import UploadCategory from "./components/UploadCategory";
import Header from "./components/Header";


function App() {
  return (
    <div>
    <BrowserRouter>
    <Header/>
    <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/uploadProduct" element={<UploadProduct />} />
      <Route path="/uploadCategory" element={<UploadCategory />} />
      <Route path="/uploadBanner" element={<UploadBanner />} />
      <Route path="/viewProduct" element={<Product />} />
    </Routes>
  </main>
</BrowserRouter>
<ToastContainer autoClose={4000} />
</div>
  );
}

export default App;
