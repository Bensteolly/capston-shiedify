import React, { useState } from 'react';
import Logo from '../Assets/1 5.png';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../API/firebase.config'


const LoginForm = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    
  
      
    const login = async(e) => {
      e.preventDefault();
      setError('')
      try {
        await signInWithEmailAndPassword(auth, email, password);
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
            <h2 className='text-xl sm:text-4xl text-center pt-3'>Welcome back</h2>
          </div>
        </div>

        <div className=" w-full mx-auto self-center py:6 sm:ml-8">
          <form onSubmit={login}>
            <div className="mx-10 py-2 sm:pt-[50px]">
              <label type="email" className='text-[14px] sm:text-[20px]'>Email:</label>
              <input className='w-full h-10 border-2 rounded-md border-inherit px-4'
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mx-10">
              <label type="password" className='text-[14px] sm:text-[20px]'>Password:</label>
              <input className='w-full h-10 border-2 rounded-md border-inherit '
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <p className='text-right mx-10 cursor-pointer' onClick="submit">Forgot Password</p>
            {error && <p style={{ color: 'red', paddingLeft: '150px', paddingTop: '40px' }}>{error}</p>}
            <button type="submit" className="primary-button my-6 mx-[150px] [60px] text-3xl pt-8" >LOGIN</button>
          </form>
          <p className='text-center pb-6 sm:mb-4'>Don't have an account,<Link to="/sign-up"><span className='cursor-pointer'>Sign up!</span>
          </Link> </p>
        </div>

      </div>

    </div>

  );
}

export default LoginForm;



