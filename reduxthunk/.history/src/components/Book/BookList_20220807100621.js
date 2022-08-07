import React from 'react';
import { deleteBook } from '../../store/BookSlice';

const BooksList = () => {
  const bookList =
   
            <div className='btn-group' role='group'>
              <button
                type='button'
                className='btn btn-primary'
                onClick={() => getBook(book)}
              >
                Read
              </button>
              <button
                type='button'
                className='btn btn-danger'
                onClick={() => deleteBookHandler(book)}
                disabled={!isloggedIn}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      : 'no books found';
  return (
    <div>
      <h2>Books List</h2>
    
    </div>
  );
};

export default BooksList;