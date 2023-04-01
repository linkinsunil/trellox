import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem('user', user);
  };

  const handleChange = e => {
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(user);

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='p-6 bg-white rounded w-96'>
        <h1 className='mb-3 text-3xl font-semibold leading-9 text-center text-gray-900 '>
          Create an account
        </h1>
        <p className='mb-8 text-base font-normal text-center text-gray-600 '>
          It's quick and easy
        </p>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <input
              type='email'
              placeholder='Enter your email'
              name='email'
              className='w-full p-2 border border-gray-300 rounded-md'
              onChange={handleChange}
            />
          </div>

          <div className='mb-4'>
            <input
              type='password'
              placeholder='Enter your password'
              name='password'
              className='w-full p-2 border border-gray-300 rounded-md'
              onChange={handleChange}
            />
          </div>

          <button
            type='submit'
            className='w-full p-2 text-base font-semibold text-white transition-colors bg-blue-600 border rounded-lg shadow-lg '
          >
            Get started
          </button>
        </form>

        <p className='mt-8 text-sm font-normal leading-5 text-center text-gray-600 '>
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className='text-sm font-semibold leading-5 text-gray-600 cursor-pointer'
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
