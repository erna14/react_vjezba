export function apiCall(url, method, body = null) {

    const fetchInitObject = {
        method: method,
        headers: {
            'content-type': 'application/json',
            "accept": "application/json"
        },
    };

    if (method === 'POST' || method === 'PUT') {
        fetchInitObject.body = JSON.stringify(body);
    }

    return fetch(url, fetchInitObject);
}
