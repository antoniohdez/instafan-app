const exports = {};

exports.get = function(url) {
    return exports.fetch(url);
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
    return exports.fetch(url, options);
}

// Wrapper to handle error status codes in the catch method.
exports.fetch = function(url, options) {
	const p = new Promise((resolve, reject) => {
		const req = fetch(url, options);
		req.then((response) => {
			if (response.ok) {
				resolve(response.json());
			} else {
				reject(response.json());
			}
		});
		req.catch((error) => {
			reject(error);
		});
	});
	return p;
}

//const getJson = (response) => response.json();

export default exports;