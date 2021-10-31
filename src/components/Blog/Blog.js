import React from 'react';
import blog from '../../images/Travel/blog-image.jpg'
import blog1 from '../../images/Travel/blog-image0.jpg'

const Blog = () => {
    return (
        <div>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <h1 className="text-info">OUR BLOG</h1>
                        <p>Here is Our Blog.You can see our blog information</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <img src={blog1} alt="" />
                            <h4 className="text-danger">London Amaging Tour</h4>
                            <p className="w-75 mx-auto">Take a sightseeing tour of London to explore the city's best attractions and famous landmarks with an expert guide or at your own pace. See the capital from a different perspective on a walking tour, a double decker bus tour, or a river Thames tour; or book a one-day hop-on hop-off bus tour.Take a sightseeing tour of London to explore the city's best attractions and famous landmarks with an expert guide or at your own pace. See the capital from a different perspective on a walking tour, a double decker bus tour, or a river Thames tour; or book a one-day hop-on hop-off bus tour.</p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <img src={blog} alt="" />
                            <h4 className="text-danger">India Amaging Tour</h4>
                            <p className="w-75 mx-auto">The idyllic hill station Munnar - famous for its tea estates, exotic lush greenery and craggy peaks, is located in the Western Ghats and is one of the best places to visit in Kerala. It serves as the commercial centre for some of the world's largest tea estates. In addition, Munnar has many protected areas which are home to endemic and highly endangered species like the Nilgiri Thar and the Neelakurinji.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;