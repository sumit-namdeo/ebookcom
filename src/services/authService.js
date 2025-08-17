export async function login(authDetails) {
    const requestOption = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(authDetails)
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestOption);

    if (!response.ok) {

        throw { message: response.statusText, status: response.status, userMessage: "We couldn’t log you in right now. Please try again later." }
    }

    const json = await response.json();

    if (json.accessToken) {

        sessionStorage.setItem("ebooktoken", JSON.stringify(json.accessToken))
        sessionStorage.setItem("ebid", JSON.stringify(json.user.id))
    }

    return json;
}

export async function register(authDetails) {

    const requestOptions = {

        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(authDetails)
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestOptions);

    if (!response.ok) {

        throw { message: response.statusText, status: response.status, userMessage: "We couldn’t register you in right now. Please try again later." }
    }

    const json = await response.json();


    if (json.accessToken) {

        sessionStorage.setItem("ebooktoken", JSON.stringify(json.accessToken))
        sessionStorage.setItem("ebid", JSON.stringify(json.user.id))
    }

    return json;
}

export async function logout() {
    sessionStorage.removeItem("ebooktoken")
    sessionStorage.removeItem("ebid")

}