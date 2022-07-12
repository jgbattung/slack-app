import { MouseEventHandler, useEffect, useState } from 'react'
import listOfAllUsers from '../utilities/listOfAllUsers';

// ------API type
interface apiResponseTypes {
    success?: boolean;
    data: [];
    errors?: any;
}

interface listOfUsersParams {
    access_token: string
    client: string
    data?: {}
    errors?: []
    expiry: string
    success?: boolean
    uid: string
}
// ------API type

function DirectMessage (){

    // ------API register user
	const [userData, setUserData] = useState <apiResponseTypes>({
        data: []
    })

    useEffect( () => {
        console.log('fetching')
        const userData = JSON.parse(localStorage.getItem('userLogIn')  || '{}')
        console.log(userData)

        const getUsers = async (userData: listOfUsersParams) => {
            const response = await listOfAllUsers(userData)
            setUserData(response)
        }
        getUsers(userData)
    }, [])

    function handleChat (e: any) {
        console.log('start real time chat with', e.target.name, ' as its uid')
        // The sendMessage utility function
    }

    
    const listOfUsers = userData.data.map( (user: any, index: number) => {
        return <button className='rounded-full bg-purple-300 p-1 m-1 hover:ring-1 hover:ring-purple-600' key={user.id} onClick={handleChat} name={user.uid}>{user.uid}</button>
    })
    console.log(listOfUsers)

    return (
        <div className='flex flex-col justify-center items-start'>
            <div>DirectMessage</div>
            {listOfUsers.length === 0 ?  <div>Loading...</div> : listOfUsers }
        </div>
    )
}

export default DirectMessage;