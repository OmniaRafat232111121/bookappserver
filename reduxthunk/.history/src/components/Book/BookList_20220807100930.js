import React from 'react';
import { deleteBook } from '../../store/BookSlice';

const BooksList = () => {
    return(
<div>
<h2>Books List</h2>
<ul>
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
            </</ul>
         
      
  

 

    

    </div>
  );
};

export default BooksList;