interface userRegistrationParams {
    email: string
    password: string
    password_confirmation: string
}


function userRegistration (params: userRegistrationParams) {
    // HTTP Method: POST
    // URL: {{url}}/api/v1/auth/
    // {
    //     "email": "user1@example.com",
    //     "password": "12345678",
    //     "password_confirmation": "12345678"
    // }
    

}

export default userRegistration;