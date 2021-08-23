import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import './productCategory.scss'
export const ProductCarousel = () => {

    const [category, setCategory] = useState();

    useEffect(() => {
        async function productCategory() {
            const productCategoryResults = await axios.get('https://fakestoreapi.com/products?limit=15')
            const data = productCategoryResults.data;
            setCategory(data);
            console.log(data);
        }
        productCategory();
    }, [])

    return (
        <>
            < section className="product-carousel">
                < Carousel >
                    {category ? category.map((category) => {
                        return <Carousel.Item className="product-background" key={`${category.id}`}>
                            <img
                                className="d-block mx-auto product-image"
                                src={`${category.image}`}
                                alt={`${category.id} slide`}
                            />
                            <Carousel.Caption>
                                <h3>{`${category.title}`}</h3>
                                <p>{`${category.description}`}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    })
                        : <p>Loading...</p>}
                </ Carousel>
            </section >

        </>
    )
}
