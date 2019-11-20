export const customFetch = (url: string, method?: string, data?: any): any => {
	const localData = localStorage.getItem("auth");
	const apiToken = localData && JSON.parse(localData).apiToken;
	return new Promise((resolve, reject) => {
		fetch(url, {
			method: method || "GET",
			body: JSON.stringify(data),
			headers: {
				Authorization: apiToken
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

					reject(response);
				}
			})
			.catch((error) => {
				console.log(error);
				reject(error);
			});
	});
};
