import React, { Fragment, useEffect, useState, useCallback } from 'react';

import BookInfo from './BookInfo';
import BooksList from './BooksList';

import './book.css';

const BookContainer = () => {
  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList/>
        </div>
        <div className='col side-line'>
          <BookInfo  />
        </div>
      </div>
    </Fragment>
  );
};

export default BookContainer;