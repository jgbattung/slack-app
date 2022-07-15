import React from 'react';

function Modal (props: any) {
	function closeHandler () {
		props.onCancel();
	}

	return (
		<div className="flex flex-col items-center justify-center w-maximum z-10 text-black rounded-sm shadow-xl bg-fuchsia-100 p-4 absolute top-1/3 left-1/3">
			<form className="mb-4">
				<h1 className="flex items-center justify-center mb-6 mt-6 text-lg font-semibold">Create a New Channel</h1>
				{/* <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="channelName">
					Channel Name
				</label> */}
				<input
					className="shadow appearance-none text-base border rounded w-96 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					type="text"
					id="channelName"
					name="channelName"
					placeholder="Channel name"
				/>
			</form>
			<form className="mb-4">
				{/* <label className="block mt-4 text-gray-700 text-lg font-bold mb-2" htmlFor="channelName">
					Users
				</label> */}
				<select
					className="shadow appearance-none text-base w-96 border rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="channelName"
					name="channelName"
				>
					<option defaultChecked>Add users to the channel</option>
					<option>User1</option>
				</select>
			</form>
			<div className="mb-6 flex justify-center text-base">
				<button
					className="bg-white border-2 border-fuchsia-300 text-black w-48 mt-5 transition-all hover:bg-gray-100 font-medium py-3 px-6 rounded focus:outline-none focus:shadow-outline"
					type="submit"
					onClick={closeHandler}
				>
					Cancel
				</button>
				<button
					className="bg-fuchsia-700 ml-3 w-48 mt-5 transition-all hover:bg-fuchsia-900 text-white font-medium py-3 px-6 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Create Channel
				</button>
			</div>
		</div>
	);
}

export default Modal;
