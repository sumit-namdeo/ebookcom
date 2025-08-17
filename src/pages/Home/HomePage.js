import React from 'react';
import { Hero } from './Hero';
import { FeaturedProducts } from './FeaturedProducts';
import { Testimonials } from './Testimonials';
import { Faq } from './Faq';
import { FilterBar } from '../Products/FilterBar'
import { useTitle } from '../../hooks/useTitle';

export const HomePage = () => {

    useTitle('EBook Home Page ');
    
    return (
        <main>
            <div>
                <Hero />
                <FeaturedProducts />
                <Testimonials />
                <Faq />
                <FilterBar />

            </div>
        </main>
    )
}
