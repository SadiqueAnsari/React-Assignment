import React from 'react'
import { allProducts } from './productList'
import banner13 from '../../images/banner13.png'
import './products.css'

export default function ProductsType() {
    return (
        <>
            <div className='container'>
                <div className="row">
                    {allProducts.map((val, i) => {
                        return (
                            <div className="col-md-4 col-sm-6 col-12" key={i}>
                                <div className='productCard' style={{ backgroundImage: `url(${val.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundColor: val.bgColor }}>
                                    <div className="card-content">
                                        <p>{val.title}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
            <div className="my-5 text-center">
                <img src={banner13} alt="" style={{width:'100%'}} />
            </div>
        </>
    )
}
