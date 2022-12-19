export function apiCall(url, method, body = null) {

    const fetchInitObject = {
        method: method,
        headers: {},
    };

    if (method === 'POST' || method === 'PUT') {
        fetchInitObject.body = body;
    }


    return fetch(url, fetchInitObject);
}
