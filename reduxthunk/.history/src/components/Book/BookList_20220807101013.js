import React from 'react';
import { deleteBook } from '../../store/BookSlice';

const BooksList = () => {
    return(
<div>
<h2>Books List</h2>
<ul className="list-group">
<li class>
           <div className='btn-group' role='group'>
              <button
                type='button'
                className='btn btn-primary'

              >
                Read
              </button>
              <button
                type='button'
                className='btn btn-danger'
               
              >
                Delete
              </button>
            </div>
            </li>
            </ul>
         
      
  

 

    

    </div>
  );
};

export default BooksList;