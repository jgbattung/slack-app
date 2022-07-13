import React from 'react';
import logoWhite from '../assets/logo-white.png';
import { Link } from 'react-router-dom';

function DefaultPage () {
	return (
		<div className="h-screen w-screen bg-violet-900 flex items-center justify-center">
			<div>
				<div className="w-maximum m-auto ">
					<img src={logoWhite} />
				</div>
				<div className="m-4">
					<h1 className="text-white flex justify-center text-3xl subpixel-antialiased font-bold">Where the Future Works</h1>
				</div>
				<div className="mt-10 max-w-lg border-4 bg-slate-200 border-zinc-500 rounded overflow-hidden shadow-lg m-auto">
					<Link to="/log-in">
						<div className="flex justify-center space-x-10 px-6 py-4 mt-4">
							{/* <div className="text-black flex items-center text-lg font-medium justify-center">Already a member?</div> */}
							<div className="flex justify-center">
								<button
									type="button"
									className="text-white bg-gradient-to-r w-64 from-violet-700 via-violet-800 to-violet-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
								>
									Log in
								</button>
							</div>
						</div>
					</Link>
					<Link to="/registration">
						<div className="flex justify-center space-x-10 px-6 py-4 mb-4">
							{/* <div className="text-black flex items-center text-lg font-medium justify-center">Create a new account</div> */}
							<div className="flex justify-center">
								<button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 w-60 text-lg">
									<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-200 rounded-md group-hover:bg-opacity-0 w-60 text-black hover:text-white text-lg">
										Register
									</span>
								</button>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default DefaultPage;
