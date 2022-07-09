import React, { useState, useRef } from 'react';
import Login from './Login';
import logo from '../assets/logo.png';

import userRegistration from "../utilities/userRegistration";

// ------API type
interface apiResponseTypes {
    success?: boolean;
    data?: any;
    errors?: any;
}
// ------API type

function Registration () {
	const [ email, setEmail ] = React.useState<string | null>();
	const [ password, setPassword ] = React.useState<string | null>();
	const [ confirmPassword, setConfirmPassword ] = React.useState<string | null>();

	const [ alertIncomepleteInput, setalertIncomepleteInput ] = React.useState(false);
	const [ alertPasswordMatch, setalertPasswordMatch ] = React.useState(false);
	const [ loginPage, setLoginPage ] = React.useState(false);

	// ------API register user
	const [registerUserData, setRegisterInUserData] = React.useState <apiResponseTypes>({})
	console.log('registerUserData', registerUserData)
	// ------API register user

	// function for registering new account
	const registerHandler = async (e: any) => {
		e.preventDefault();

		const pass = e.target.password.value;
		const confirmPass = e.target.confirmPassword.value;
		console.log(`pw: ${pass}`);
		console.log(`confirm pw: ${confirmPass}`);

		if (!email || !password || !confirmPassword) {
			setalertIncomepleteInput(true);
			if (alertPasswordMatch) {
				setalertPasswordMatch(false);
			}
		} else if (confirmPass !== pass) {
			setalertPasswordMatch(true);
			if (alertIncomepleteInput) {
				setalertIncomepleteInput(false);
			}
		} else {
			setalertIncomepleteInput(false);
			setalertPasswordMatch(false);
			localStorage.setItem('email', JSON.stringify(email));
			localStorage.setItem('password', JSON.stringify(password));
			console.log('saved to localStorage');
			console.log('logged in');

			// ------API fetch
			console.log('logging in...')
			const response = await userRegistration({email: email, password: password, password_confirmation: confirmPass})
			setRegisterInUserData(response)
			// ------API fetch
		}

		
	};

	// function for logging in if user already has an account
	const logInHandler = () => {
		console.log('connect to Login component');
		setLoginPage(true);
	};

	const renderRegistrationForm = (
		<div>
			<div className="mt-24">
				<div className="flex justify-center w-96 m-auto">
					<img src={logo} className="object-cover" alt="Slack Logo" />
				</div>
				<div className="mb-8">
					<h2 className="flex justify-center text-5xl font-extrabold pb-3">Create a New Account</h2>
					<p className="flex justify-center text-xl">Register to start collaborating with your team!</p>
				</div>
				<div className="w-maximum m-auto">
					<form onSubmit={registerHandler} className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
						<div className="mb-4">
							<label className="block mt-3 text-gray-700 text-2xl font-bold mb-4" htmlFor="email">
								Email
							</label>
							<input
								className="shadow mb-5 appearance-none text-lg border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="email"
								type="text"
								placeholder="Enter your email"
								onChange={(e) => setEmail(e.target.value)}
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
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-2xl font-bold mb-4" htmlFor="confirmPassword">
								Confirm your password
							</label>
							<input
								className="shadow appearance-none text-lg border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="confirmPassword"
								type="password"
								placeholder="Retype your password"
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</div>
						<div className="mb-6 flex justify-center text-2xl">
							<button
								className="bg-violet-700 w-full mt-5 transition-all hover:bg-violet-900 text-white font-medium py-3 px-6 rounded focus:outline-none focus:shadow-outline"
								type="submit"
							>
								Create Account
							</button>
						</div>
						<div className="flex justify-center text-lg font-medium">
							<p>
								Already have an account?{' '}
								<span className="text-violet-500 font-bold transition-all hover:text-violet-800">
									<a href="#" onClick={logInHandler}>
										Login here.
									</a>
								</span>
							</p>
						</div>

						{alertIncomepleteInput && (
							<div
								className="bg-red-100 border text-lg mt-5 border-red-400 text-red-700 px-4 py-3 rounded relative"
								role="alert"
							>
								<strong className="font-bold">Error! </strong>
								<span className="block sm:inline"> Please accomplish all fields</span>
								<span className="absolute top-0 bottom-0 right-0 px-4 py-3">
									<svg
										className="fill-current h-6 w-6 text-red-500"
										role="button"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<title>Close</title>
										<path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
									</svg>
								</span>
							</div>
						)}

						{alertPasswordMatch && (
							<div
								className="bg-red-100 border text-lg mt-5 border-red-400 text-red-700 px-4 py-3 rounded relative"
								role="alert"
							>
								<strong className="font-bold">Error! </strong>
								<span className="block sm:inline"> Passwords do not match</span>
								<span className="absolute top-0 bottom-0 right-0 px-4 py-3">
									<svg
										className="fill-current h-6 w-6 text-red-500"
										role="button"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<title>Close</title>
										<path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
									</svg>
								</span>
							</div>
						)}
					</form>
				</div>
			</div>
		</div>
	);

	return <div>{loginPage ? <Login /> : renderRegistrationForm}</div>;
}

export default Registration;
