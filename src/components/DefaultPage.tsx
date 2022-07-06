function DefaultPage () {
	return (
		<div>
			<h1 className="flex justify-center">SLACK LOGO HERE</h1>
			<div className="w-full max-w-lg">
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
				</form>
			</div>
		</div>
	);
}

export default DefaultPage;
