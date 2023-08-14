import React, { lazy, Suspense } from 'react';
import './App.css';
import Appbar from './Component/Appbar';
import Page1 from './Component/Pages/Page1';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './Component/Pages/Footer';
const ProductDetail = lazy(() => import('./Component/Pages/Product/ProductDetail'));



function App() {

  return (
    <div className="">
      <Appbar />
      <Routes>
        <Route exact path='/' element={<Page1 />} />
        <Route
          path="ProductDetail"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <ProductDetail />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
