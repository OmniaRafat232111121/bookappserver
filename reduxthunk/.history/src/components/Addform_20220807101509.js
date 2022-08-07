import React from 'react';

const Addform = () => {
  
  

  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form onSubmit={formSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              className='form-control'
              ref={titleRef}
              id='title'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input
              type='number'
              className='form-control'
              ref={priceRef}
              id='price'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
              className='form-control'
              id='description'
              rows='3'
              required
              ref={descRef}
            ></textarea>
          </div>
          <button
            type='submit'
            className='btn btn-primary'
            disabled={!loggedIn}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;