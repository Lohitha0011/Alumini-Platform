import React, { useState } from 'react';
import { student } from '../../constants/AdminDashboard';

const Students = ({ students }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterStudents = (students) => {
    return students.filter((s) => {
      const yearDifference = (2024 - new Date(s.st_from_year).getFullYear()).toString();

      return (
        s.st_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.st_cemail.toLowerCase().includes(searchTerm.toLowerCase()) ||
        yearDifference.includes(searchTerm)
      );
    });
  };

  return (
    <div className='m-4 w-full'>
      <div className='flex justify-between mx-4'>
        <h2 className='font-semibold text-2xl font-Montserrat'>Students</h2>
        <input
          type="text"
          placeholder="Search by name, email, or year"
          className='border border-charcoal rounded-full font-OpenSans px-4 py-2 w-72'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
        />
      </div>
      <div className='flex gap-6 font-OpenSans'>
        {filterStudents(students).map((s) => (
          <div key={s._id} className='my-4 bg-white py-4 gap-1 px-6 rounded-xl flex flex-col justify-center items-center shadow-sm'>
            <img src={student} alt="" className='w-14 rounded-full' />
            <h2 className='font-medium text-lg capitalize font-Roboto'>{s.st_name}</h2>
            <p>{s.st_cemail}</p>
            <span className='flex gap-3'>
            <p>{s.st_contact}</p>
            <p>{2024 - new Date(s.st_from_year).getFullYear()} Year</p>
            </span>
            <button className='bg-steel-blue px-4 py-1 rounded-lg font-medium text-smoke'><a href={s.st_linkedin} target='_blank' >View Profile</a></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
