import React from 'react'
import { useGlobalContext } from '../../context';
import Book from '../BookList/Book'
import Loading from "../Loader/Loader";
import coverImg from '../../Assets/coverBook.png'
import '../BookList/BookList.css'

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();
  const booksWitchCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });
  console.log(booksWitchCovers);

  if (loading) return <Loading />;
  return (
    <>
      <section className='booklist'>
        <div className="container">
          <div className="section-title">
            <h2>{resultTitle}</h2>
          </div>
          <div className="booklist-content grid">
            {
              booksWitchCovers.slice(0, 30).map((item, index) => {
                return (
                  <Book key={index}{...item} />
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default BookList
