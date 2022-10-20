import React from 'react';
import { Link } from 'gatsby';

const Pagination = ({ pageNumber, currentPage }: { pageNumber: number, currentPage: number }) => {

    return (
        <div className='mb-5'>
            <ul className='flex justify-center text-white font-bold gap-x-2'>
                {currentPage !== 1 && (
                    <li className='bg-[#9ccd3c]'><Link className='inline-block py-2 px-5' to={currentPage === 2 ? '/blog' : `/blog/${currentPage - 1}`}>Previous</Link></li>

                )}
                {currentPage !== pageNumber && (
                    <li className='bg-[#9ccd3c]'><Link  className='inline-block py-2 px-5' to={`/blog/${currentPage + 1}`}>Next</Link></li>

                )}
            </ul>

        </div>
    )

}


export default Pagination
