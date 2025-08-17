function getUserSession() {
    const token = JSON.parse(sessionStorage.getItem("ebooktoken"));
    const ebid = JSON.parse(sessionStorage.getItem("ebid"));

    return { token: token, id: ebid }
}


export async function getUser() {

    const userSession = getUserSession();

    const headers = {
        method: "GET",
        headers: { 'Content-Type': "application/json", Authorization: `Bearer ${userSession.token}` }
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${userSession.id}`, headers)

    if (!response.ok) {

        throw { message: response.statusText, status: response.status, userMessage: "We couldn’t fetch the user. Please try again later." }
    }

    const json = await response.json();
    return json;

}

export async function getUserOrders() {

    const userSession = getUserSession();

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${userSession.id}`,
        {
            method: "GET",
            headers: { 'Content-Type': "application/json", Authorization: `Bearer ${userSession.token}` }

        });

    if (!response.ok) {

        throw { message: response.statusText, status: response.status, userMessage: "We couldn’t fetch the user. Please try again later." }
    }

    const data = await response.json();

    return data;

}


export async function createOrder(cartList, total, user) {

    const userSession = getUserSession();
    const headers = { 'Content-Type': "application/json", Authorization: `Bearer ${userSession.token}` }
    const orderInfo = {
        cartList: cartList,
        amount_paid: total,
        qty: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders/`, {

        method: "POST",
        headers: headers,
        body: JSON.stringify(orderInfo)
    });

    if (!response.ok) {

        throw { message: response.statusText, status: response.status, userMessage: "We couldn’t fetch the user. Please try again later." }
    }

    const data = await response.json();
    return data;

}

