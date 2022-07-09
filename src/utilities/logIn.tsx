interface logInParams {
    email: string
    password: string
}

async function logIn(user: logInParams) {
    // HTTP Method: POST
    // URL: {{url}}/api/v1/auth/sign_in
    // {
    //     "email": "meline@hotmail.com",
    //     "password": "12345678"
    // }
    const apiResponse = {
        data: {},
        status: {},
        response: {},
        errors: []
    }
    const apiSettings = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": user.email,
            "password": user.password,
        })
    
    }
    const response = await fetch('http://206.189.91.54/api/v1/auth/sign_in', apiSettings)
    const data = await response.json()

    apiResponse['response'] = response
    apiResponse['status'] = response.status
    apiResponse['data'] = data
    apiResponse['errors'] = data.errors ? data.errors[0] :  []

    return apiResponse;
}

export default logIn;