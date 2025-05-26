import axios from 'axios';
import React, { useState } from 'react'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import Notification from './Notification';

export const Login = ({ setToken }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notification, setNotification] = useState({
        show: false,
        message: '',
        type: '',
    });

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post(backendUrl + '/api/user/admin', { email, password })
            if (response.data.sucess) {
                console.log("token_is" + response.data.token);
                setToken(response.data.token);
            } else {
                setNotification({ show: true, message: response.data.message || 'Login failed', type: 'error' });
            }
        } catch (error) {
            console.log(error);
            setNotification({ show: true, message: error.response?.data?.message || 'Something went wrong', type: 'error' });
        }
    }

    return (
        <>

            {notification.show && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification({ ...notification, show: false })}
                />
            )}

            <div className='w-full min-h-screen flex items-center justify-center'>
                <form className='w-[70%] max-w-[900px] bg-gray-100 py-10 px-5 items-center justify-center flex flex-col gap-5'>
                    <h1 className='text-5xl font-semibold'>Ecosium Partners Portal</h1>
                    <h1 className='text-3xl font-medium'>Login</h1>
                    <div className='w-[70%] flex flex-col gap-1 '>
                        <label>Email Address </label>
                        <input
                            className='w-[100%] text-lg py-2 pl-3 rounded-lg border-black border'
                            type="email"
                            placeholder='your@email.com'
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            value={email}
                            required
                        />
                    </div>
                    <div className='w-[70%] flex flex-col gap-1 '>
                        <label>Email Address </label>
                        <input
                            className='w-[100%] text-lg py-2 pl-3 rounded-lg border-black border'
                            type="password"
                            placeholder='Enter Your Password'
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            value={password}
                            required
                        />
                    </div>
                    <button onClick={onSubmitHandler} className='w-[40%] bg-blue-400 py-2 rounded-lg text-white text-xl font-bold [letter-spacing:1px]'>
                        Login
                    </button>
                </form>
            </div>
        </>
    )
}
