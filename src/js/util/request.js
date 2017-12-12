const exports = {};
const baseUrl = 'http://localhost:8080/';

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

exports.delete = function(url) {
    return exports.fetch(url, { method: 'DELETE' });
}

// Wrapper to handle error status codes in the catch method.
exports.fetch = function(url, options = {}) {
	const path = baseUrl + url;
	const p = new Promise((resolve, reject) => {
		fetch(path, options)
			.then((response) => {
				if (response.ok) {
					resolve(response.json());
				} else {
					reject(response.json());
				}
			}).catch((error) => {
				reject(error);
			});
	});
	return p;
}

//const getJson = (response) => response.json();

export default exports;