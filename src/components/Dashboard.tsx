function Dashboard () {
	return (
		<div className="w-screen h-screen grid grid-rows-7 grid-cols-8">
			{/* <div className="col-span-3 row-span-1">Header</div>
			<div className="row-span-2 border-2 border-solid border-white bg-purple-900 text-white text-xl font-medium">
				<div className="flex justify-left mt-4 ml-6">Channels</div>
			</div>
			<div className="row-span-6 col-span-2 border-2 border-solid border-white bg-white text-white">Chat Field</div>
			<div className="row-span-5 border-2 border-solid border-white bg-purple-900 text-white text-xl font-medium">
				Direct Message
			</div> */}
			<div className="flex justify-center items-center text-white row-span-1 col-span-8 bg-fuchsia-900 border border-t-0 border-b-0 border-l-0 border-solid border-white">
				HEADER
			</div>
			<div className="row-span-2 col-span-1 bg-fuchsia-800 border border-solid border-b-0 border-l-0 border-white">
				<div className="flex justify-left mt-4 ml-6 text-white text-xl font-medium">Channels</div>
			</div>
			<div className="row-span-6 col-span-7 border border-solid border-white bg-white">
				<div className="bg-white border border-solid border-b-1 border-t-0 border-l-0 border-r-0">
					<div className="ml-6 pt-4 pb-4">Chat Name</div>
				</div>
				<div className="mt-4 ml-6">Chat Field</div>
			</div>
			<div className="row-span-4 col-span-1 bg-fuchsia-800 border border-solid border-l-0 border-white">
				<div className="flex justify-left mt-4 ml-6 text-white text-xl font-medium">Direct Messages</div>
			</div>
		</div>
	);
}

export default Dashboard;
