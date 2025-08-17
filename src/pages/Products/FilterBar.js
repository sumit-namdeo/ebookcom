import React from 'react'
import { useFilter } from '../../context'

export const FilterBar = ({ showDrawer, setShowDrawer }) => {

    const { state, dispatch } = useFilter()

    return (
        <>

            <div id="drawer-example" className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform duration-300 bg-white w-80 dark:bg-gray-800 ${showDrawer ? "translate-x-0" : "-translate-x-full"
                }`} tabIndex="-1" aria-labelledby="drawer-label">
                <h5 id="drawer-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg className="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>Filters</h5>
                <button onClick={() => setShowDrawer(!showDrawer)} type="button" data-drawer-hide="drawer-example" aria-controls="drawer-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>


                {/* Filters */}

                {/* <!-- Sort By --> */}
                <div className='mb-5'>
                    <h3 className="text-sm font-medium mb-2 dark:text-gray-200 text-left">Sort by</h3>
                    <div className="space-y-1 dark:text-gray-500">
                        <label className="flex items-center space-x-2">
                            <input onChange={() => { dispatch({ type: "SORT_BY", payload: { sortBy: "lowtohigh" } }) }} type="radio" name="sort" checked={state.sortBy === "lowtohigh" || false} className="text-blue-500 focus:ring-blue-500" />
                            <span>Price - Low to High</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input onChange={() => { dispatch({ type: "SORT_BY", payload: { sortBy: "hightolow" } }) }} checked={state.sortBy === "hightolow" || false} type="radio" name="sort" className="text-blue-500 focus:ring-blue-500" />
                            <span>Price - High to Low</span>
                        </label>
                    </div>
                </div>

                {/* <!-- Rating --> */}
                <div className='mb-5'>
                    <h3 className="text-sm font-medium mb-2 dark:text-gray-200 text-left">Rating</h3>
                    <div className="space-y-1 dark:text-gray-500">
                        <label className="flex items-center space-x-2">
                            <input onChange={() => { dispatch({ type: "RATINGS", payload: { ratings: "4startabove" } }) }} checked={state.ratings === "4startabove"} type="radio" name="rating" className="text-blue-500 focus:ring-blue-500" />
                            <span>4 Stars &amp; Above</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input onChange={() => { dispatch({ type: "RATINGS", payload: { ratings: "3startabove" } }) }} checked={state.ratings === "3startabove"} type="radio" name="rating" className="text-blue-500 focus:ring-blue-500" />
                            <span>3 Stars &amp; Above</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input onChange={() => { dispatch({ type: "RATINGS", payload: { ratings: "2startabove" } }) }} checked={state.ratings === "2startabove"} type="radio" name="rating" className="text-blue-500 focus:ring-blue-500" />
                            <span>2 Stars &amp; Above</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input onChange={() => { dispatch({ type: "RATINGS", payload: { ratings: "1startabove" } }) }} checked={state.ratings === "1startabove"} type="radio" name="rating" className="text-blue-500 focus:ring-blue-500" />
                            <span>1 Star &amp; Above</span>
                        </label>
                    </div>
                </div>

                {/* <!-- Other Filters --> */}
                <div className='mb-5'>
                    <h3 className="text-sm font-medium mb-2 dark:text-gray-200 text-left">Other Filters</h3>
                    <div className="space-y-1 dark:text-gray-500">
                        <label className="flex items-center space-x-2">
                            <input onChange={() => dispatch({ type: "BEST_SELLER_ONLY", payload: { bestSellerOnly: !state.bestSellerOnly } })} type="checkbox" checked={state.bestSellerOnly || false} className="text-blue-500 focus:ring-blue-500" />
                            <span>Best Seller Only</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input onChange={() => dispatch({ type: "ONLY_IN_STOCK", payload: { inStockOnly: !state.inStockOnly } })} type="checkbox" checked={state.inStockOnly || false} className="text-blue-500 focus:ring-blue-500" />
                            <span>INSTOCK Only</span>
                        </label>
                    </div>
                </div>

                {/* <!-- Clear Button --> */}
                <div className='mb-5'>
                    <button onClick={() => dispatch({ type: "CLEAR_FILTER" })} className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">
                        Clear Filter
                    </button>
                </div>


            </div>

        </>
    )
}
