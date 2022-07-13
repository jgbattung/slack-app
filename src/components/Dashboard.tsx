import { useEffect, useState } from 'react';
import DirectMessage from './DirectMessage';
import RealTimeChat from './RealTimeChat';
import logo from '../assets/logo-white.png';

function Dashboard () {
	const [ whoToChat, setWhoToChat ] = useState({
		uid: ''
	});

	useEffect(
		() => {
			// call the send message utility function here
			console.log(whoToChat.uid);
		},
		[ whoToChat ]
	);

	return (
		<div className="w-screen h-screen grid grid-rows-7 grid-cols-8 bg-white">
			<div className="grid grid-cols-3 place-content-around text-white row-span-1 col-span-8 bg-fuchsia-900 border border-t-0 border-b-0 border-l-0 border-solid border-white">
				<div className="ml-10 place-self-start">
					<img src={logo} className="w-32" alt="Slack Logo White" />
				</div>
				<div className="place-self-center text-black text-sm">
					<input
						type="text"
						placeholder="Search"
						className="p-2 w-80 bg-fuchsia-200 placeholder-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-fuchsia-600"
					/>
				</div>
				<button className="mr-10 place-self-end text-sm hover:text-slate-200 cursor-pointer transition-all">Logout</button>
			</div>
			<div className="row-span-2 col-span-1 bg-fuchsia-800 border border-solid border-b-0 border-l-0 border-white">
				<div className="flex justify-left mt-4 ml-6 text-white text-md font-medium">Channels</div>
			</div>
			<div className="row-span-5 col-span-7 border border-solid border-white bg-white">
				<div className="bg-white border border-zinc-400 border-solid border-b-1 border-t-0 border-l-0 border-r-0">
					<div className="ml-6 pt-4 pb-4 text-lg font-bold">Channel Name or Contact Name</div>
				</div>
				<div className="mt-4 ml-6">Chat Field</div>
			</div>

			<div className="row-span-4 col-span-1 bg-fuchsia-800 border border-solid border-l-0 border-white">
				<div className="flex justify-left mt-4 ml-6 text-white text-md font-medium">Direct Messages</div>
			</div>
			{/* <div className="grid place-content-center col-span-7 m-2 bg-white border-2 border-gray-300 rounded-2xl"> */}
			<textarea
				// type="text"
				placeholder="Message username/channel"
				className="rounded-2xl w-full bg-white col-span-7 border-2 border-gray-200 transition-all p-3 align-top focus:outline-none focus:ring ring-1 focus:ring-gray-600"
			/>
			{/* </div> */}
		</div>
	);
}

export default Dashboard;

// import { useEffect, useState } from 'react';
// import DirectMessage from './DirectMessage';
// import RealTimeChat from './RealTimeChat';

// function Dashboard () {
// 	const [ whoToChat, setWhoToChat ] = useState({
// 		uid: ''
// 	});
// 	useEffect(
// 		() => {
// 			// call the send message utility function here
// 			console.log(whoToChat.uid);
// 		},
// 		[ whoToChat ]
// 	);

// 	return (
// 		<div className="grid grid-cols-3 w-full">
// 			<div>Channel</div>
// 			<div>RealTimeChat</div>
// 			<div>{whoToChat.uid}</div>
// 			<DirectMessage setWhoToChat={setWhoToChat} />
// 		</div>
// 	);
// }

// export default Dashboard;
