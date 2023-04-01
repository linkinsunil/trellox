import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('user');
  }, []);

  const handleSubmit = () => {
    console.log('submit');
  };

  const handleChange = e => {
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='p-6 bg-white rounded w-96'>
        <h1 className='mb-3 text-3xl font-semibold leading-9 text-center text-gray-900'>
          Log in to your account
        </h1>
        <p className='mb-8 text-base font-normal text-center text-gray-600'>
          Welcome back! Please enter your details.
        </p>
        <form onSubmit={handleSubmit}>
          <div className='mb-5'>
            <input
              name='email'
              type='email'
              placeholder='Enter your email'
              className='w-full p-2 border border-gray-300 rounded-md'
              onChange={handleChange}
            />
            <p>{}</p>
          </div>
          <div>
            <input
              name='Password'
              type='password'
              placeholder='*********'
              className='w-full p-2 border border-gray-300 rounded-md'
              onChange={handleChange}
            />
          </div>

          <button
            type='submit'
            className='w-full p-2 mt-4 text-base font-semibold text-white transition-colors bg-blue-600 border rounded-lg shadow-lg'
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
