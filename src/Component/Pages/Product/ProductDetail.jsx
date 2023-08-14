import React, { useState } from 'react'
import './productDetail.css'
import { useLocation } from 'react-router-dom'
import { productsList,featuredProducts, newProducts, bestProducts } from '../ProductList/productList'
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

import { styled } from '@mui/material/styles';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
export default function ProductDetail() {
    const location = useLocation()
    console.log(location)
    const [cart, setCart] = useState('')
    const [count, setCount] = useState(0)
    const handleChange = () => {
        setCart('addCart')
        setCount(count + 1)
    }
    const style = {
        // backgroundColor: 'black',
        color: '#770015',
    }
    if (location.state.type === 'Trending T-Shirts') {
        var data = productsList.filter((val) => {
            if (val.id === location.state.id) {
                return val
            }
        })
    } else if(location.state.type === 'Featured Products'){
        var data = featuredProducts.filter((val) => {
            if (val.id === location.state.id) {
                return val
            }
        })
    } else if(location.state.type === 'New Products'){
        var data = newProducts.filter((val) => {
            if (val.id === location.state.id) {
                return val
            }
        })
    }
    else if(location.state.type === 'Best Selling Products'){
        var data = bestProducts.filter((val) => {
            if (val.id === location.state.id) {
                return val
            }
        })
    }

    return (

        <div class="card-wrapper">
            <div class="cards">

                <div class="product-imgs">
                    <div class="img-display">
                        <div class="img-showcase">
                            <img src={data[0].image} alt="cloth" />
                        </div>
                    </div>
                 
                </div>

                <div class="product-content">
                    <h2 class="product-title">{data[0].title}</h2>
                    <a href="" class="product-link">visit cloth store</a>
                    <div class="product-price">
                        <p class="last-price">Old Price: <span>{data[0].costOld}</span></p>
                        <p class="new-price">New Price: <span>{data[0].cost}</span></p>
                    </div>

                    <div class="product-detail">
                        <h2>about this item: </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
                        <ul>
                            <li>Color: <span>Black</span></li>
                            <li>Available: <span>in stock</span></li>
                            <li>Category: <span>{data[0].type}</span></li>
                            <li>Shipping Area: <span>All over the world</span></li>
                            <li>Size: <span>{data[0].size}</span></li>
                        </ul>
                    </div>
                    <div class="purchase-info">
                        <input type="number" min="0" value={count} />
                        <button type="button" class="btn" onClick={handleChange}>
                            Add to Cart
                        </button>
                        <IconButton className={cart} sx={style}>  <StyledBadge badgeContent={count} showZero color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge> </IconButton>
                    </div>

                   
                </div>
            </div>
        </div>

    )
}
