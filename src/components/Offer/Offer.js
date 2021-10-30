import React from 'react';
import traval from '../../images/Travel/travel-icon.png'
import trava2 from '../../images/Travel/travel-icon2.png'
import trava3 from '../../images/Travel/travel-icon3.png'
import trava4 from '../../images/Travel/travel-icon4.png'

const Offer = () => {
    return (
        <div>
            <div className="conatiner">
                <div className="row mt-5">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <h1 className="text-info">SELECT OFFERS FOR TRAVELING</h1>
                        <p className="w-75 mx-auto">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center">
                            <div className="img-1 col-lg-3 col-md-6 col-sm-12 col-12">
                            <img src={traval} alt="" />
                            <h3>Different Countrys</h3>
                            <button className="btn btn-success mt-4 px-5">More</button>
                            </div>
                            <div className="img-2 col-lg-3 col-md-6 col-sm-12 col-12">
                            <img src={trava2} alt="" />
                            <h3>Mountains Tours</h3>
                            <button className="btn btn-success mt-4 px-5">More</button>
                            </div>
                            <div className="img-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <img src={trava3} alt="" />
                            <h3>Bus Tours</h3>
                            <button className="btn btn-success mt-4 px-5">More</button>
                            </div>
                            <div className="img-4 col-lg-3 col-md-6 col-sm-12 col-12">
                            <img src={trava4} alt="" />
                            <h3>Summer Rest</h3>
                            <button className="btn btn-success mt-4 px-5">More</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;