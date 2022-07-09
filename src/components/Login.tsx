import { ChangeEvent, FormEvent, useState } from "react"
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
    // hooks
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    
    const [logInResponse, setLogInResponse] = useState<apiResponseTypes>({
        success: false,
        errors: []
    })
    // console.log('logInResponse', logInResponse)
    // event handlers
    function handleChange (e: ChangeEvent<HTMLInputElement>) {
        setFormData((prevData) => {
            return ({
                ...prevData,
                [e.target.name]: e.target.value
            })
        })
    }

    async function handleSubmit (e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log('logging in...')
        const response = await logIn(formData)
        console.log(response)
        setLogInResponse(response)
    }

    // variables for rendering
    const errors = logInResponse.errors;

    return (
    <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
            <img src={ logo } className="w-3/6" alt="logo" />
        </div>
        
        <div className="w-maximum">
            <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    {logInResponse.success ? 
                        <h2 className="text-l bg-green-400 flex justify-center items-center">Success</h2>
                        : 
                        <h2 className="text-l bg-red-400 flex justify-center items-center">{errors}</h2>
                    }
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
                        className="bg-violet-900 mt-5 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
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
