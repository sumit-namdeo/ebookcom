import React, { createContext, useContext, useReducer } from 'react'
import { filterReducers } from '../reducers';


const filterInitialState = {
    productList: [],
    inStockOnly: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
}


const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {

    const [state, dispatch] = useReducer(filterReducers, filterInitialState);

    function setProductListFromAPI(products) {

        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products: products
            }
        })

    }

    function bestSeller(products) {
        return state.bestSellerOnly ? products.filter(product => product.best_seller === true) : products;
    }

    function inStock(products) {
        return state.inStockOnly ? products.filter(product => product.in_stock === true) : products;
    }

    function sort(products) {
        if (state.sortBy === "lowtohigh") {

            return products.sort((a, b) => Number(a.price) - Number(b.price))

        }

        if (state.sortBy === "hightolow") {
            return products.sort((a, b) => Number(b.price) - Number(a.price))
        }

        return products;
    }

    function ratings(products) {
        if (state.ratings === "4startabove") {
            return products.filter(product => product.rating >= 4);
        }
        if (state.ratings === "3startabove") {
            return products.filter(product => product.rating >= 3);
        }
        if (state.ratings === "2startabove") {
            return products.filter(product => product.rating >= 2);
        }

        if (state.ratings === "1startabove") {
            return products.filter(product => product.rating >= 1);
        }

        return products;
    }

    const filteredProductList = ratings(sort(inStock(bestSeller(state.productList))));

    const value = {
        state,
        dispatch,
        productList: filteredProductList, //current product list
        setProductListFromAPI //function to update
    }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext)