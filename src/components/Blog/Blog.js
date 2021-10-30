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
                            <p className="w-75 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quaerat quisquam harum iusto quas possimus, explicabo quidem cupiditate, in veritatis maiores officiis deleniti rerum temporibus, corporis ducimus distinctio esse perspiciatis tenetur ea tempora ab! Ipsa ratione tempora ab quis.</p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <img src={blog} alt="" />
                            <h4 className="text-danger">India Amaging Tour</h4>
                            <p className="w-75 mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quasi ex aliquam perspiciatis voluptatum voluptatibus unde, possimus laboriosam ullam rerum, aliquid dolorum consequuntur aut velit culpa? Excepturi veniam explicabo pariatur!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;