import React, { useState } from 'react'
import './products.css'
import { productsList } from './productList'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function Products() {
    const navigate = useNavigate()
    const style = {
        backgroundColor: 'white',
        color: '#770015',
        zIndex: 5
    }
    const button = {
        backgroundColor: '#770015',
        color: 'white',
        padding: '0.6rem 4rem',
        marginLeft: '35rem',
        marginTop:'2rem'
    }

    return (
        <div>
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-4">
                        <hr />
                    </div>
                    <div className="col-md-4">
                        <h1>Trending T-Shirts</h1>
                    </div>
                    <div className="col-md-4">
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {productsList.map((val, i) => {
                        return (

                            <div className="col-md-3 col-sm-6 col-12" key={i}>
                                <div className='card' onClick={() => navigate('/ProductDetail', { state: { id: val.id, type: val.type } })} style={{ backgroundImage: `url(${val.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                                    <div className="card-content">
                                        <div className="d-flex justify-content-between">
                                            <IconButton sx={style}> <ShoppingCartIcon /> </IconButton>
                                            <IconButton sx={{ ...style, mx: 3 }}> <FavoriteIcon /> </IconButton>
                                            <IconButton sx={style}> <ShareIcon /> </IconButton>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p>{val.title} <br />{val.subTitle}</p>
                                    <span className='cost'>{val.cost}</span> <span className='costOld'>{val.costOld}</span>
                                    <div className='mainBox'> <span className='box'>S</span> <span className='box'>M</span> <span className='box'> L </span> <span className='box'>XL</span> <span className='xxl'>XXL</span></div>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className="row">
                    {productsList.map((val, i) => {
                        return (

                            <div className="col-md-3 col-sm-6 col-12" key={i}>
                                <div className='card' onClick={() => navigate('/ProductDetail', { state: { id: val.id, type: val.type } })} style={{ backgroundImage: `url(${val.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                                    <div className="card-content">
                                        <div className="d-flex justify-content-between">
                                            <IconButton sx={style}> <ShoppingCartIcon /> </IconButton>
                                            <IconButton sx={{ ...style, mx: 3 }}> <FavoriteIcon /> </IconButton>
                                            <IconButton sx={style}> <ShareIcon /> </IconButton>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p>{val.title} <br />{val.subTitle}</p>
                                    <span className='cost'>{val.cost}</span> <span className='costOld'>{val.costOld}</span>
                                    <div className='mainBox'> <span className='box'>S</span> <span className='box'>M</span> <span className='box'> L </span> <span className='box'>XL</span> <span className='xxl'>XXL</span></div>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <button type='button' className='viewBtn' style={button}>View All</button>
            </div>
        </div>
    )
}
