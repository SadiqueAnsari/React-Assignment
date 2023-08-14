import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { IconButton } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
export default function Footer() {
    const color = {
        color: '#770015'
    }
    return (
        <div className="container">
            <div className="row">
                <hr />
                <div className="col-md-3">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quia culpa quas laudantium molestiae impedit neque iste vitae minus excepturi! Eaque facilis, assumenda quidem molestiae libero voluptatum dignissimos itaque in, porro quasi ex et.
                    </p>
                    <IconButton sx={{ color: 'blue' }}> <FacebookOutlinedIcon sx={{ fontSize: '40px', }} /></IconButton>
                    <IconButton sx={{ color: 'skyblue' }}> <TwitterIcon sx={{ fontSize: '40px' }} /></IconButton>
                    <IconButton sx={{ color: 'pink' }}> <InstagramIcon sx={{ fontSize: '40px' }} /></IconButton>
                    <IconButton sx={{ color: 'blue' }}> <LinkedInIcon sx={{ fontSize: '40px' }} /></IconButton>
                    <IconButton sx={{ color: 'red' }}> <PinterestIcon sx={{ fontSize: '40px' }} /></IconButton>

                    {/* <PhoneOutlinedIcon/><PhoneOutlinedIcon/> */}
                </div>
                <div className="col-md-3">
                    <h5 style={color}>ONLINE SHOPPING</h5>
                    <p>Men’s T-Shirts <br /> Women’s Wear <br /> Winter Collections <br />Hooded T-Shirts <br /> Streetwear Collections</p>
                </div>
                <div className="col-md-3">
                    <h5 style={color}>CUSTOMER POLICIES</h5>
                    <p>About Us <br /> Terms & Conditions <br /> Shipping & Returns Policy <br /> Cancellation & Refund Policy <br /> Contact Us</p>
                </div>
                <div className="col-md-3">
                    <h5 style={color}>STORE INFORMATION</h5>
                    <p> <LocationOnOutlinedIcon /> Lorem ipsum dolor sit amet consectetur adipisicing elit </p>
                    <p>  <PhoneOutlinedIcon /> Call Us:1234567890 </p>
                    <p>  <EmailOutlinedIcon /> Email Us: info@yourmail.com </p>
                </div>
            </div>
        </div>
    )
}
