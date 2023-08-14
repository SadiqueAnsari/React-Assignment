import React from 'react'
import ellipse1 from '../images/Ellipse7.png'
import ellipse2 from '../images/Ellipse8.png'
import ellipse3 from '../images/Ellipse9.png'
import ellipse4 from '../images/Ellipse10.png'
import ellipse5 from '../images/Ellipse11.png'
import ellipse6 from '../images/Ellipse12.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import image5 from '../images/image5.png'
import image6 from '../images/image6.png'
import './pages.css'
export default function Page2() {
    let images = [
        { title: 'Men’s T-Shirts', img: ellipse1, backClr: '#F1DBE9' },
        { title: 'Women’s Wear', img: ellipse2, backClr: '#DDD3EB' },
        { title: 'Winter Collections', img: ellipse3, backClr: '#D3EAEB' },
        { title: 'Hooded T-Shirts', img: ellipse4, backClr: '#EFF1D9' },
        { title: 'Polo Neck T-Shirts', img: ellipse5, backClr: '#F1DADB' },
        { title: 'Full Sleeves T-Shirts', img: ellipse6, backClr: '#D9F1DE' },
    ]
    const style = {
        width: '100%',
        height: '90%'
    }
    return (
        <div className="">
            <div className='d-flex justify-content-center'>
                {images.map((image, index) => {
                    return (
                        <div className='avatar' key={index}>
                            <img src={image.img} style={{ borderRadius: '50%', height: '70%', width: '80%', margin: '1rem 0rem', backgroundColor: image.backClr }} alt="" />
                            <h6 className='txt text-center'>{image.title}</h6>
                        </div>
                    )
                })}
            </div>
            <div className="container pic">
                <div className="row">
                    <div className="col-md-6">
                        <img src={image2} style={style} alt="" />
                    </div>
                    <div className="col-md-6">
                        <img src={image3} style={style} alt="" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={image4} style={style} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img src={image5} style={style} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img src={image6} style={style} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
