interface getAllUsersChannelsParams {
	access_token: string;
	client: string;
	expiry: string;
	uid: string;
}

async function getAllUsersChannels (user: getAllUsersChannelsParams) {
    // HTTP Method: Get
    // URL: {{url}}/api/v1/channels
	// access-token	Yes
	// client	Yes
	// expiry	Yes
	// uid	Yes
    const apiSettings: RequestInit = {
		method: 'get',
		headers: {
			'access-token': user.access_token,
			expiry: user.expiry,
			uid: user.uid,
			client: user.client
		}
	};

    console.log('getting channels')
    const response = await fetch('http://206.189.91.54/api/v1/channels', apiSettings);
	const data = await response.json();

    console.log(response)
    console.log('data', data)

    const apiResponse = {
		success: response.ok,
		data: data.data,
		errors: data.data | data.errors
	};

	return apiResponse;
}

export default getAllUsersChannels;