import React from 'react'
import {Link} from 'react-router-dom';
const Carusel = () => {
    return (
        <div className='carus'>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <Link to={`/advetirsment/${"news"}`}>Новинки этого года... </Link>
                </div>
                <div className="carousel-item">
                    <div className='space'>
                        <br/>
                    </div>
                </div>
                <div className="carousel-item ">
                    <Link to={`/advetirsment/${"shopCard"}`}>Получи карту магазина бесплатно...</Link> 
                </div>
                <div className="carousel-item">
                    <div>
                        <br/>
                    </div>
                </div>
                <div className="carousel-item">
                    <Link to={`/advetirsment/${"freeDelivery"}`}>Узнай про бесплатную доставку товара...</Link> 
                </div>
                <div className="carousel-item">
                    <div>
                        <br/>
                    </div>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
            <br/>
        </div>
    )
}

export default Carusel
