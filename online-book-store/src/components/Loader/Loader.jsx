import React from 'react';
import coverBook from '../../Assets/coverBook.png';
import '../Loader/Loader.css';
const Loader = () => {
  return (
    <>
      <div className='loader flex flex-c flex-column'>
        <img src={coverBook} alt="error" />
        <p >please wait...</p>
      </div>
    </>
  )
}

export default Loader
