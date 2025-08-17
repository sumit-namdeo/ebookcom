import React, { useEffect, useState } from 'react'
import { ProductCard } from '../../components'
import { FilterBar } from './FilterBar'
import { useSearchParams } from 'react-router-dom'
import { useTitle } from '../../hooks/useTitle'
import { useFilter } from '../../context'
import { getProductList } from '../../services'
import { toast } from 'react-toastify'

export const ProductList = () => {

    const [showDrawer, setShowDrawer] = useState(false)
    //const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    useTitle('Explore EBook collection');
    const { productList, setProductListFromAPI } = useFilter();

    const queryTerm = searchParams.get('name') ? searchParams.get('name') : "";

    useEffect(() => {

        async function fetchProducts() {

            try {

                let data = await getProductList();

                if (queryTerm) {

                    data = data.filter((item) =>
                        item.name.toLowerCase().includes(queryTerm.toLowerCase())
                    );

                }

                setProductListFromAPI(data);

            } catch (error) {

                toast.error(error.userMessage, { position: "top-center", autoClose: false })

            }

        }

        fetchProducts();


    }, [queryTerm])//eslint-disable-line

    return (
        <>
            <main>
                <section className="my-20">
                    <div className="my-5 flex justify-between">
                        <span className="text-left align mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">All Ebooks ({productList.length})</span>
                        <span>
                            <button onClick={() => setShowDrawer(!showDrawer)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button">
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                            </button>
                        </span>

                    </div>

                    <div className="flex flex-wrap justify-center lg:flex-row">

                        {
                            productList.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        }

                    </div>
                </section >

                <FilterBar showDrawer={showDrawer} setShowDrawer={setShowDrawer} />

            </main>
        </>
    )
}
