export async function getProductList() {

    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products`);

    if (!response.ok) {

        throw { message: response.statusText, status: response.status, userMessage: "We couldn’t fetch the product list. Please try again later." }
    }

    let data = await response.json();
    return data;

}


export async function getProduct(id) {

    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);

    if (!response.ok) {

        throw { message: response.statusText, status: response.status, userMessage: "We couldn’t fetch the product. Please try again later." }
    }

    const data = await response.json();

    return data;

}

export async function getFeaturedProduct() {

    const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);

    if (!response.ok) {
        throw { message: response.statusText, status: response.status, userMessage: "We couldn’t fetch the product list. Please try again later." }
    }
    const data = await response.json();

    return data;

}