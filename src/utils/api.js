const handleErrors = (r) => {
    if (r.status > 199 && r.status < 300) {
        return r;
    } else {
        throw r;
    }
}


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

    return fetch(url, fetchInitObject).then(handleErrors).catch(err => {
        if (err.status === 403) {
            return err
        }
    });
}
