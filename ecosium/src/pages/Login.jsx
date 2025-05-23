import React, { useEffect, useRef, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { assets } from '../assets/assets'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';


const Login = () => {
  const hightRef = useRef();
  const [hight1, setHiget] = useState();
  const [isRegiter, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    setHiget(hightRef.current.offsetHeight)
  }, [hightRef]);
  const handleRegister = () => {
    setIsRegister(!isRegiter)
  }
  console.log(isRegiter);

  useGSAP(() => {
    const tl = gsap.timeline();

    if (isRegiter) {
      tl.set("#lgimg", { display: 'none' })
        .set("#sgimg", { display: 'flex' });
      tl.to("#imgcont", { xPercent: 100, duration: 0.5 }, 0);
      tl.to("#discont", { xPercent: -100, duration: 0.5 }, 0);
    } else {
      tl.set("#sgimg", { display: 'none' })
        .set("#lgimg", { display: 'flex' });
      tl.to("#imgcont", { xPercent: 0, duration: 0.5 }, 0);
      tl.to("#discont", { xPercent: 0, duration: 0.5 }, 0);
    }
  }, [isRegiter]);
  return (
    <>
      <div className="w-full min-h-screen items-center justify-center flex bg-gray-100 relative overflow-hidden">
        <div className="w-screen h-screen items-center justify-center flex fixed z-[0] top-0 ">
          <img className='w-[100%] h-[100%] object-cover' src={assets.bglogin} alt="" />
        </div>
        <div className="w-full min-h-screen items-center justify-center flex bg-[#ffffffc7] z-[10] py-16">
          <div className="w-[80%] h-auto items-stretch justify-center flex bg-[#ffffff] rounded-3xl overflow-hidden border-[1px] border-gray-300 ">
            <div className="w-[50%] items-end justify-center flex flex-grow overflow-hidden bg-green rounded-3xl border-[1px] border-gray-300 relative z-[12]"
              style={{ height: hight1 }}
              id='imgcont'
            >
              {
                /* Back ground Images */
                /* Back ground Images */
                /* Back ground Images */
              }
              <div className='w-full h-full items-center justify-center flex overflow-hidden absolute top-0 left-0'>
                {
                  /* Sign In */
                  /* Sign In */
                  /* Sign In */
                }
                <img id='lgimg' className='w-[100%] h-[100%] object-cover z-[13]' src={assets.lgCu} alt="" />

                {
                  /* Register */
                  /* Register */
                  /* Register */
                }
                <img id='sgimg' className='w-[100%] h-[100%] object-cover z-[13] hidden' src={assets.siCu} alt="" />
              </div>
              {
                /* Contant */
                /* Contant */
                /* Contant */
              }
              {
                /* Sign In */
                /* Sign In */
                /* Sign In */
              }
              <div id='lgimg' className='z-[13] hidden flex-col bg-[#ffffffde] w-full h-[150px] items-center justify-center gap-[20px]'>
                <p className='text-lg font-medium '>
                  if You haven't Account, Register Here
                </p>
                <button onClick={handleRegister} className='w-[250px] bg-primary py-[10px] text-[16px] font-semibold text-white tracking-[1px] rounded-xl'>
                  Register
                </button>
              </div>
              {
                /* Register */
                /* Register */
                /* Register */
              }
              <div id='sgimg' className='z-[13] hidden flex-col bg-[#ffffffde] w-full h-[150px] items-center justify-center gap-[20px]'>
                <p className='text-lg font-medium '>
                  if You haven't Account, Register Here
                </p>
                <button id='' onClick={handleRegister} type='submit' className='w-[250px] bg-primary py-[10px] text-[16px] font-semibold text-white tracking-[1px] rounded-xl'>
                  logIn
                </button>
              </div>

            </div>
            <div id='discont' className="w-[50%] h-[100%] items-center justify-center flex flex-grow overflow-hidden pt-[100px] py-[30px] z[20]" ref={hightRef}>
              {
                /* Sign In */
                /* Sign In */
                /* Sign In */
              }
              <div className="w-[80%] h-[500px] py-[30px] items-center justify-center flex-col gap-[20px] flex" id='lgimg'>
                <h1 className="text-4xl font-bold text-gray-800 mt-[10px]">
                  Welcome Back!
                </h1>
                <p className="text-lg text-gray-600 mt-[10px]">
                  Sign in to manage your bookings, orders, and celebration services.
                </p>
                <form className='w-full items-center justify-center flex flex-col gap-[10px] text-[16px]' >
                  <input className='w-full px-[20px] py-[10px] rounded-xl outline-transparent border-[3px] border-gray-200' placeholder='Email' type="text" required />
                  <div className="relative w-full">
                    <input
                      className='w-full px-[20px] py-[10px] rounded-xl outline-transparent border-[3px] border-gray-200'
                      placeholder='Password'
                      type={showPassword ? 'text' : 'password'}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-[15px] top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>

                </form>
                <button type='submit' className='w-[250px] bg-primary py-[10px] text-[16px] font-semibold text-white tracking-[1px] rounded-xl'>
                  Sign In
                </button>
                <div className="w-full items-center justify-center flex gap-[25px]">
                  <hr className='w-full h-[2px] bg-gray-50' />
                  <p className='text-[18px] font-semibold'>
                    or
                  </p>
                  <hr className='w-full h-[2px] bg-gray-50' />
                </div>
                <button onClick={() => setShowInput(false)} className='w-[250px] bg-gray-50 py-[10px] text-[16px] font-semibold text-black tracking-[1px] border-[1px] border-gray-500 rounded-xl'>
                  Google
                </button>
              </div>
              {
                /* Register */
                /* Register */
                /* Register */
              }
              <div className="w-[80%] h-[500px] py-[30px] items-center justify-center flex-col gap-[20px] hidden" id='sgimg'>
                <h1 className="text-4xl font-bold text-gray-800 mt-[10px]">
                  Create Your Account
                </h1>
                <p className="text-lg text-gray-600 mt-[10px]">
                  Sign up and start planning amazing moments with us!
                </p>
                <form className='w-full items-center justify-center flex flex-col gap-[10px] text-[16px]' >
                  <input className='w-full px-[20px] py-[10px] rounded-xl outline-transparent border-[3px] border-gray-200' placeholder='Full Name' type="text" required />
                  <input className='w-full px-[20px] py-[10px] rounded-xl outline-transparent border-[3px] border-gray-200' placeholder='Email' type="text" required />
                  <input className='w-full px-[20px] py-[10px] rounded-xl outline-transparent border-[3px] border-gray-200' placeholder='Password' type="password" required />
                </form>
                <button type='submit' className='w-[250px] bg-primary py-[10px] text-[16px] font-semibold text-white tracking-[1px] rounded-xl'>
                  Register
                </button>
                <div className="w-full items-center justify-center flex gap-[25px]">
                  <hr className='w-full h-[2px] bg-gray-50' />
                  <p className='text-[18px] font-semibold'>
                    or
                  </p>
                  <hr className='w-full h-[2px] bg-gray-50' />
                </div>
                <button    onClick={() => window.history.back()} className='w-[250px] bg-gray-50 py-[10px] text-[16px] font-semibold text-black tracking-[1px] border-[1px] border-gray-500 rounded-xl'>
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login