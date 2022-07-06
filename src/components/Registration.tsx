import logo from '/Users/jirehgbattung/AvionBatch19/slack-app/src/assets/logo.png';

function Registration () {
	return (
		<div>
			<div className="w-maximum">
				<img src={logo} alt="Slack Logo" />
			</div>
			<div className="mb-8">
				<h2 className="flex justify-center text-5xl font-extrabold pb-3">Create a New Account</h2>
				<p className="flex justify-center text-xl font-medium">Fill up the details below to create a new account</p>
			</div>
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
					<div className="mb-6 flex justify-center text-2xl">
						<button
							className="bg-violet-700 w-full mt-5 transition-all hover:bg-violet-800 text-white font-medium py-3 px-6 rounded focus:outline-none focus:shadow-outline"
							type="button"
						>
							Create Account
						</button>
					</div>
					<div className="flex justify-center text-lg font-medium">
						<p>
							Already have an account?{' '}
							<span className="text-violet-700 font-bold">
								<a href={'https://stackoverflow.com/questions/18913559/reactjs-anchor-tag-link'}>Login here.</a>
							</span>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Registration;
