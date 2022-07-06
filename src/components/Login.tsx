import { FC, useRef } from "react"

interface LogInProps {
    logo: string;
}

const Login:FC<LogInProps> = ( props ) => {
    // const {  } = props

    // {
    //     "email": "meline@hotmail.com",
    //     "password": "12345678"
    // }

    const emailValue:any = useRef('');
    const passwordValue:any = useRef('');
    

    return (
    <div>
        <img src={ props.logo } className="" alt="logo" />
        <div className="w-maximum">
            <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <h2 className="flex justify-center text-3xl font-medium mb-6">LOG IN</h2>
                    <label className="block mt-3 text-gray-700 text-2xl font-bold mb-4" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow mb-5 appearance-none text-lg border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="Enter your email"
                        ref={emailValue}
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
                        ref={passwordValue}
                    />
                </div>
                <div className="mb-4 flex justify-center text-2xl">
                    <button
                        className="bg-violet-900 mt-5 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Log In
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Login