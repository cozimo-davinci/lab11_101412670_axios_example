import React from 'react'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

export default function CertainUser() {

    const location = useLocation();

    const certainUser = location.state?.user;

    return (
        <div className='bg-black hover:bg-slate-950 rounded-md mt-6 p-8 '>
            {!certainUser ? <div className='text-white text-center font-bold text-xl'>Loading...</div> :
                <p>
                    <div className='text-white font-mono ml-2 mt-2 p-4 bg-white rounded-lg shadow-md border border-gray-300 hover:bg-teal-500 hover:text-white hover:font-bold' key={certainUser.login.uuid}>
                        <img src={certainUser.picture.medium} alt="Person" className='w-16 h-16 rounded-full mx-auto' />
                        <h2 className='text-center text-black hover:text-white hover:text-bold text-lg font-semibold mt-2'>{certainUser.name.first} {certainUser.name.last}</h2>
                        <p className='text-center hover:text-white hover:text-bold text-sm text-gray-600'>{certainUser.email}</p>
                        <p className='text-center hover:text-white hover:text-bold text-sm text-gray-600'>{certainUser.location.city}, {certainUser.location.state}</p>
                        <p className='text-center hover:text-white hover:text-bold text-sm text-gray-600'>{certainUser.location.country}, {certainUser.location.postcode}</p>
                        <p className='text-center hover:text-white hover:text-bold text-sm text-gray-600'>{new Date(certainUser.dob.date).toLocaleDateString()} ({certainUser.dob.age} years old)</p>
                        <NavLink className='mt-12 w-auto text-center flex justify-center text-white bg-blue-900 rounded-md
                        border-solid border-black hover:bg-black p-2 shadow-2xl shadow-white' to={`/`}>Back</NavLink>

                    </div>
                </p>
            }
        </div>
    )
}
