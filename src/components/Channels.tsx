import { useEffect, useState } from 'react'
import getAllUsersChannels from '../utilities/getAllUsersChannels';


interface apiResponseTypes {
	success?: boolean;
	data: [];
	errors?: any;
}

interface getAllUsersChannelsParams {
	access_token: string;
	client: string;
	expiry: string;
	uid: string;
}

function Channels () {

    const [ userData, setUserData ] = useState<apiResponseTypes>({
		data: []
	});

    useEffect(() => {
		// console.log('fetching')
		const userData = JSON.parse(localStorage.getItem('userLogIn') || '{}');
		// console.log(userData)

		const getUsers = async (userData: getAllUsersChannelsParams) => {
			const response = await getAllUsersChannels(userData);
            
			setUserData(response);
		};
		getUsers(userData);
	}, []);

    const listOfChannels = userData.data.map((data: any, index: number) => {
        console.log('channel data', data)
		return (
            <div>test</div>
			// <button
			// 	className="rounded-full bg-purple-300 hover:ring-1 m-1 p-1 hover:ring-purple-600 truncate text-xs"
			// 	key={user.id}
			// 	name={user.uid}
			// 	id={user.id}
			// >
			// 	{user.uid}
			// </button>
		);
	});

    return (
        <div className="flex flex-col justify-between">
            list of all channels
			{listOfChannels.length === 0 ? <div>Loading...</div> : listOfChannels}
		</div>
    )
}

export default Channels;