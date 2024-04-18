import React, { useState } from 'react';
import Logo from '../Assets/1 5.png';
import '../App.css';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../API/firebase.config'
import { useNavigate } from 'react-router-dom';





const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate()

    
  
      
    const signUp = async(e) => {
        e.preventDefault();
        setError('')
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          navigate('/home')
          
        }catch (e) {
          setError(e.message)
          console.log(error);
        }
         
      }       
  

   



    return (
        <div className="w-full h-full sm:h-full">
            <div className="w-full max-w-[800px] mx-auto sm:my-[150px] flex-row bg-[#E3E5E7] rounded-md overflow-hidden box-border sm:flex shadow-2xl">
                <div className=" w-full py-[100px]flex-row items-center bg-[#09122B] px-4">
                    <img src={Logo} alt="Shieldify-logo" className="w-[40%] mx-auto object-fit-cover pt-8" />
                    <div className='text-white text-left my-11 py-9'>
                        <h2 className='text-xl sm:text-4xl text-center pt-3'>Nice to have you!</h2>
                    </div>
                </div>
                <div className=" w-full mx-auto self-center sm:ml-8">
                    <form onSubmit={signUp}>
                        <div className="mx-10 py-2 sm:pt-[50px]">
                            <label type="first-name" className='text-[14px] sm:text-[20px] mb-2'>First Name:</label>
                            <input className='w-full h-10 border-2 rounded-md border-inherit px-4 p-2'
                                type="text"
                                id="first-name"
                                

                            />
                        </div>
                        <div className="mx-10 py-2">
                            <label type="last=name" className='text-[14px] sm:text-[20px] mb-2'>Last Name:</label>
                            <input className='w-full h-10 border-2 rounded-md border-inherit px-4 p-2'
                                type="text"
                                id="last-name"

                            />
                        </div>
                        <div className="mx-10 py-2">
                            <label type="email" className='text-[14px] sm:text-[20px] mb-2'>Email:</label>
                            <input className='w-full h-10 border-2 rounded-md border-inherit px-4 p-2'
                                type="text"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                             

                            />
                        </div>
                        <div className="mx-10">
                            <label type="password" className='text-[14px] sm:text-[20px] mb-2'>Password:</label>
                            <input className='w-full h-10 border-2 rounded-md border-inherit p-2'
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                                

                            />
                        </div>
                        <button type="submit" className='bg-[#09122B] text-white w-full max-w-[145px] h-full max-h-12 rounded-lg p-4 font-bold text-center text-sm my-6 mx-[150px] sm:text-xl'  >SIGN UP</button>
                    </form>
                    <p className='text-center pb-6 sm:mb-4'>Already have an account,
                        <Link to="../Pages/LoginForm.js"><span className='cursor-pointer'>Login!</span>
                        </Link>
                    </p>
                </div>

            </div>

        </div>

    )
}

export default Signup
