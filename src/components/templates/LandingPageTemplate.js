import React from 'react'
import { Container } from 'react-bootstrap';
import { MainNavBar } from '../uis/organisms/MainNavBar';
import { ProductCarousel } from '../uis/organisms/ProductCarousel/ProductCarousel';

export const LandingPageTemplate = () => {
    return (
        <main>
            <header>
                <MainNavBar />
            </header>
            <section>
                <Container>

                    <ProductCarousel />
                </Container>
            </section>
        </main>
    )
}

