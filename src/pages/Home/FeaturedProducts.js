import React, { useEffect, useState } from 'react'
import { ProductCard } from '../../components'
import { getFeaturedProduct } from '../../services';
import { toast } from 'react-toastify';


export const FeaturedProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        async function fetchProducts() {

            try {
                const data = await getFeaturedProduct();
                setProducts(data);

            } catch (error) {

                toast.error(error.userMessage, { position: "top-center", autoClose: false })
            }

        }

        fetchProducts()

    }, [])

    return (
        <>

            <section className="my-20">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h1>
                <div className="flex flex-wrap justify-center lg:flex-row">

                    {
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }

                </div>
            </section >
        </>
    )
}
