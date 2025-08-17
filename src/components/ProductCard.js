import { Link } from 'react-router-dom'
import ProductImage from '../assets/product-1.jpg';
import { Ratings } from './Ratings';
import { useCart } from '../context';

export const ProductCard = ({ product }) => {

    const { cartList, addToCart, removeFromCart } = useCart();

    function handleAddToCart(product) {

        addToCart(product)

    }

    const exists = cartList.some(item => item.id === product.id);

    return (
        <>
            <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <Link to={`/products/${product.id}`} className='relative'>

                    {
                        product.best_seller && (
                            <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
                                Best Seller</span>
                        )}

                    <img className="rounded-t-lg" src={product.poster} alt="" onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = ProductImage;
                    }} />
                </Link>
                <div className="p-5">
                    <Link to={`/products/${product.id}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-left">{product.name}</h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">{product.overview}</p>

                    <div className="flex items-center my-2">
                        <Ratings key={product.id} ratings={product.rating} />
                    </div>
                    <p className="flex justify-between items-center">
                        <span className="text-2xl dark:text-gray-200">
                            <span>$</span><span>{product.price}</span></span>


                        {
                            exists ? (
                                <button onClick={() => removeFromCart(product)} className="inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-600 ">Remove <i className="bi bi-trash-fill"></i>
                                </button>
                            ) : (
                                <button disabled={product.in_stock ? false : true} onClick={() => handleAddToCart(product)} className={`${product.in_stock ? '' : 'disabled:opacity-50'}  inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800`}>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>
                            )
                        }


                    </p>
                </div>
            </div>

        </>
    )
}
