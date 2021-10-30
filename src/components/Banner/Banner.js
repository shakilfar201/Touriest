import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/Banner/banner.jpg';
import banner2 from '../../images/Banner/banner-1.jpg';
import banner3 from '../../images/Banner/banner-2.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="slider">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={banner1}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h1 className="text-dark">World Most Fabulos Places</h1>
                                        <p className="text-dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={banner2}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h1 className="text-primary">World Most Fabulos Places</h1>
                                        <p className="text-primary">Place order to go to services</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={banner3}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h1 className="text-dark">World Most Fabulos Places</h1>
                                        <p className="text-dark">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default Banner;