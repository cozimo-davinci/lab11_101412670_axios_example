import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function PersonList() {

    const [persons, setPersons] = useState([])

    const getPersons = async () => {
        const response = await axios.get("https://randomuser.me/api/?results=12");
        const updatedPersons = response.data.results;
        setPersons(updatedPersons);
        console.log(response.data.results);
    }

    useEffect(() => {
        getPersons();
    }, [])

    return (
        <div className='w-auto h-auto p-12 bg-black rounded-md border-white border-solid shadow-2xl shadow-slate-100'>
            <h1 className='text-center text-white text-2xl font-bold mb-6 shadow-inner hover:bg-teal-900 rounded-lg'>List of Users</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {persons.map((person) => (
                    <div key={person.login.uuid} className='p-4 bg-white rounded-lg shadow-md border border-gray-300 hover:bg-teal-500 hover:-translate-y-8 hover:-inset-3'>
                        <img src={person.picture.thumbnail} alt="Person" className='w-16 h-16 rounded-full mx-auto' />
                        <h2 className='text-center text-lg font-semibold mt-2'>{person.name.first} {person.name.last}</h2>
                        <p className='text-center text-sm text-gray-600'>{person.email}</p>
                        <p className='text-center text-sm text-gray-600'>{person.location.city}, {person.location.state}</p>
                        <p className='text-center text-sm text-gray-600'>{person.location.country}, {person.location.postcode}</p>
                        <p className='text-center text-sm text-gray-600 mb-5'>{new Date(person.dob.date).toLocaleDateString()} ({person.dob.age} years old)</p>

                        <NavLink className='mt-12 w-auto text-center flex justify-center text-white bg-blue-900 rounded-md
                        border-solid border-black hover:bg-red-300 p-1' to={`/certainUser/${person.login.uuid}`} state={{ user: person }}>View Details</NavLink>


                    </div>
                ))}
            </div>
        </div >
    );
}
