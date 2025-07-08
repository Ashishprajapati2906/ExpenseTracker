import React from 'react'

const Login = () => {
  return (
    <AuthLayout>
      <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Welcome back</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          please enter your Details to login <br />
          <b>19:00 minute tak dek liya hai</b>
        </p>
      </div>
    </AuthLayout>
  )
}

export default Login