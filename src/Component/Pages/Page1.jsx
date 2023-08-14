import React, { useState } from 'react'
import image1 from '../images/image1.png'
import ProductsType from './ProductList/ProductsType';
import Footer from './Footer';
const Page2 = React.lazy(() => import('./Page2'));
const Products = React.lazy(() => import('./ProductList/Products'));
const Products1 = React.lazy(() => import('./ProductList/Products1'));
const Products2 = React.lazy(() => import('./ProductList/Products2'));
const Products3 = React.lazy(() => import('./ProductList/Products3'));
export default function Page1() {
    const [type, setType] = useState(0)

    return (
        <div className=''>
            <div className='image1'>
                <img className='' src={image1} style={{ width: '98.9vw', marginTop: '5rem' }} alt="" loading='lazy' />
            </div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Page2 />
            </React.Suspense>
            <div className='container text-center'>
                <h3><b>Filter by Category</b></h3>

                <div className='row text-center d-flex  my-3'>
                    <div className="col-md-1"></div>
                    <div className='col-md-2 my-2'> <button type='button' className='btn btn-outline-secondary' onClick={() => setType(1)}>Trending T-Shirts</button></div>
                    <div className='col-md-2 my-2'>   <button type='button' className='btn btn-outline-secondary' onClick={() => setType(2)}>Featured Products</button></div>
                    <div className='col-md-2 my-2'>   <button type='button' className='btn btn-outline-secondary' onClick={() => setType(3)}>New Products</button></div>
                    <div className='col-md-2 my-2'>  <button type='button' className='btn btn-outline-secondary' onClick={() => setType(4)}>Best Selling Products</button></div>
                    <div className='col-md-2 my-2'>  <button type='button' className='btn btn-outline-secondary' onClick={() => setType(0)}>All Products</button></div>
                    <div className="col-md-1"></div>
                </div>
            </div>
            {type == 1 ? <Products /> : type == 2 ? <Products1 /> : type == 3 ? <Products2 /> : type == 4 ? <Products3 /> :
                <>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Products />
                    </React.Suspense>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Products1 />
                    </React.Suspense>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Products2 />
                    </React.Suspense>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Products3 />
                    </React.Suspense>
                </>
            }
            <ProductsType />
            <Footer />
        </div>
    )
}
