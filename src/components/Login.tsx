import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import logo from '../assets/logo.png';
import logIn from "../utilities/logIn";

interface apiResponseTypes {
    data?: any | null,
    success: boolean,
    response?: Response,
    access_token?: string | null,
    errors: [] | null
}

function Login () {
	let history = useHistory();
	// hooks
	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});

	const [ logInResponse, setLogInResponse ] = useState<apiResponseTypes>({
		success: false,
		errors: []
	});

	const [ invalidLogin, setinvalidLogin ] = useState(false);

	useEffect(()=> {
		if(logInResponse.success){
			history.push("/dashboard")
			localStorage.setItem('userLogIn', JSON.stringify(logInResponse));
		} else {
			console.log(logInResponse.errors)
		}
	},[logInResponse])

	// event handlers
	function handleChange (e: ChangeEvent<HTMLInputElement>) {
		setFormData((prevData) => {
			return {
				...prevData,
				[e.target.name]: e.target.value
			};
		});
	}

	async function handleSubmit (e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log('logging in...');
		const response = await logIn(formData);
		console.log(response);
		setLogInResponse(response);
		if (logInResponse.success === false) {
			setinvalidLogin(true);
		}
	}

	// variables for rendering
	const errors = logInResponse.errors;

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div className="flex justify-center items-center">
				<img src={logo} className="w-3/6" alt="logo" />
			</div>
			<div className="mb-8">
				<h2 className="flex justify-center text-5xl font-extrabold pb-3">Login to Your Account!</h2>
				<p className="flex justify-center text-xl">Start collaborating with your team!</p>
			</div>

			<div className="w-maximum">
				<form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
					<div className="mb-4">
						{logInResponse.data && <h2 className="text-l bg-green-400 flex justify-center items-center">Success</h2>}
						<label className="block mt-3 text-gray-700 text-2xl font-bold mb-4" htmlFor="email">
							Email
						</label>
						<input
							className="shadow mb-5 appearance-none text-lg border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="email"
							placeholder="Enter your email"
							name="email"
							value={formData.email}
							onChange={handleChange}
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
							placeholder="Enter your password"
							name="password"
							value={formData.password}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-4 flex justify-center text-2xl">
						<button
							className="bg-violet-700 w-full mt-5 transition-all hover:bg-violet-900 text-white font-medium py-3 px-6 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Log In
						</button>
					</div>
					<div className="flex justify-center text-lg font-medium">
						<p>
							Don't have an account?{' '}
							<span className="text-violet-500 font-bold transition-all hover:text-violet-800">
								<Link to="/registration">Register here.</Link>
							</span>
						</p>
					</div>
					{/* code for displaying login error */}
					{invalidLogin && (
						<div
							className="bg-red-100 border text-lg mt-5 border-red-400 text-red-700 px-4 py-3 rounded relative"
							role="alert"
						>
							<strong className="font-bold">Error! </strong>
							<span className="block sm:inline"> Invalid login credentials.</span>
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
	);
}

export default Login;
