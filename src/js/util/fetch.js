const exports = {};

exports.get = function(url) {
    const req = fetch(url);
    return req
    	.then(getJson);
}

exports.post = function(url, body, options = {}) {
	const defaultOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
    };
	
	options = { ...defaultOptions, ...options }
    return fetch(url, options)
    	.then(getJson);
}

const getJson = (req) => req.json();

export default exports;