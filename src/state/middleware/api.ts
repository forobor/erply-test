export const customFetch = (
	url: string,
	apiKey: string | null,
	method?: string,
	data?: any
): any => {
	if (apiKey) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: method || "GET",
				body: JSON.stringify(data),
				headers: {
					Authorization: apiKey
				}
			})
				.then((response) => {
					if (response.ok) {
						resolve(response.json());
					} else {
						switch (response.status) {
							case 404:
								console.log("Object not found");
								break;
							case 500:
								console.log("Internal server error");
								break;
							default:
								console.log("Some error occured");
								break;
						}
						response.json().then((error) => reject(error));
					}
				})
				.catch((error) => {
					console.log(error);
					reject(error);
				});
		});
	}
};
