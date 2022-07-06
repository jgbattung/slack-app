function DefaultPage () {
	return (
		<div>
			<h1 className="flex justify-center text-5xl font-bold mb-6">SLACK LOGO HERE</h1>
			<h2 className="flex justify-center text-3xl font-medium mb-6">Create a New Account</h2>
			<div className="w-maximum">
				<form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
					<div className="mb-4">
						<label className="block mt-3 text-gray-700 text-2xl font-bold mb-4" htmlFor="email">
							Email
						</label>
						<input
							className="shadow mb-5 appearance-none text-lg border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="text"
							placeholder="Enter your email"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-2xl font-bold mb-4" htmlFor="password">
							Password
						</label>
						<input
							className="shadow mb-5 appearance-none text-lg border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							placeholder="Create a password"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-2xl font-bold mb-4" htmlFor="cpassword">
							Confirm your password
						</label>
						<input
							className="shadow appearance-none text-lg border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="cpassword"
							type="password"
							placeholder="Retype your password"
						/>
					</div>
					<div className="mb-4 flex justify-center text-2xl">
						<button
							className="bg-violet-900 mt-5 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="button"
						>
							Register
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default DefaultPage;
