import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductImage from '../../assets/product-1.jpg';
import { Ratings } from '../../components/Ratings';
import { useTitle } from '../../hooks/useTitle';
import { useCart } from '../../context';
import { getProduct } from '../../services';
import { toast } from 'react-toastify';

export const ProductDetails = () => {

    const { cartList, addToCart, removeFromCart } = useCart();
    const [product, setProduct] = useState({});
    const { id } = useParams();
    useTitle(product.name);

    useEffect(() => {

        async function fetchProducts() {

            try {

                const data = await getProduct(id);
                setProduct(data);

            } catch (error) {

                toast.error(error.userMessage, { position: "top-center", autoClose: false })
            }
        }

        fetchProducts()

    },)


    const exists = cartList.some(item => item.id === product.id);

    return (
        <>
            <main>
                <section>

                    <div className="flex flex-wrap justify-around text-left mt-5">
                        <div className="max-w-xl my-3">
                            <img className="rounded" src={product.poster} onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = ProductImage;
                            }} alt={product.name} />
                        </div>
                        <div className="max-w-xl my-3">

                            <h1 className="mt-2 mb-2 text-4xl text-left font-bold text-gray-900 dark:text-slate-200">{product.name}</h1>

                            <p className="mb-5 text-lg text-left text-gray-900 dark:text-slate-200">{product.overview}</p>

                            {
                                product.price && (
                                    <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                                        <span className="mr-1">$</span>
                                        <span className="">{product.price}</span>
                                    </p>
                                )
                            }

                            <p className="my-3">
                                <span>
                                    <Ratings ratings={product.rating} />

                                </span>
                            </p>
                            <p className="my-4 select-none">

                                {
                                    product.best_seller && (
                                        <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>
                                    )
                                }

                                {
                                    product.in_stock ? (
                                        <span className="font-semibold text-green-600 border bg-green-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span>
                                    ) : (
                                        <span className="font-semibold text-red-600	border bg-red-300 rounded-lg px-3 py-1 mr-2">Out Of STOCK</span>
                                    )
                                }

                                {
                                    product.size && (
                                        <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{product.size} MB </span>
                                    )
                                }

                            </p>
                            <p className="text-lg text-gray-900 dark:text-slate-200 mb-5">{product.long_description}</p>
                            <p className="my-3">

                                {
                                    exists ? (
                                        <button onClick={() => removeFromCart(product)} className="inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-600 ">Remove <i className="bi bi-trash-fill"></i>
                                        </button>
                                    ) : (
                                        <button disabled={product.in_stock ? false : true} onClick={() => addToCart(product)} className={`${product.in_stock ? '' : 'disabled:opacity-50'} inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 `}>Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
                                        </button>
                                    )
                                }


                            </p>
                        </div>
                    </div>
                </section>
            </main >
        </>
    )
}
