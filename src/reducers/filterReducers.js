
export const filterReducers = (state, action) => {

    const { type, payload } = action;

    switch (type) {
        case "PRODUCT_LIST":
            return { ...state, productList: payload.products }

        case "SORT_BY":
            return { ...state, sortBy: payload.sortBy };

        case "RATINGS":
            return { ...state, ratings: payload.ratings };

        case "BEST_SELLER_ONLY":
            return { ...state, bestSellerOnly: payload.bestSellerOnly };

        case "ONLY_IN_STOCK":
            return { ...state, inStockOnly: payload.inStockOnly };

        case "CLEAR_FILTER":
            return {
                ...state,
                inStockOnly: false,
                bestSellerOnly: false,
                sortBy: null,
                ratings: null

            };

        default:
            return state

    }

}
