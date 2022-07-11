interface retrieveMessageParams {
    receiver_id: number
    receiver_class: string
    body: string
    access_token: string,
    client: string,
    expiry: string,
    uid: string
}

async function retrieveMessage (user: retrieveMessageParams) {
    // HTTP Method: Get
    // URL: {{url}}/api/v1/messages?receiver_id=1&receiver_class=User


    // receiver_id	ID of the message's receiver	Yes
    // receiver_class	Type of the receiver. User for direct message, Channel for sending a message in a channel	Yes
    // access-token	Yes
    // client	Yes
    // expiry	Yes
    // uid	Yes
    const receiverId = 1
    const apiSettings = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'access-token': user.access_token,
            'expiry':user.expiry,
            'uid':user.uid,
            'client':user.client
        }
    }
    const response = await fetch(`http://206.189.91.54/api/v1/messages?receiver_id=${receiverId}&receiver_class=User`, apiSettings)
    const data = await response.json()

    const apiResponse = {
        success: response.ok,
        data: data.data,
        errors: data.data | data.errors
    }
    
    return apiResponse;
}

export default retrieveMessage;