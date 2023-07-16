import React, { useState, useContext, useEffect } from 'react';

const URL = 'https://openlibrary.org/search.json?title=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('The Lost World');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState('');

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchTerm}`);
      const data = await response.json();
      const { docs } = data;
      console.log(docs)

      if(docs){
        const newBooks = docs.slice(0, 20).map((booksSingle)=>{
            const {key, author_name, cover_i, edition_count,first_publish_year,title} = booksSingle;

            return{
                id: key,
                author: author_name,
                cover_id:  cover_i,
                edition: edition_count,
                first_publish_year: first_publish_year,
                title: title
            }
        });
        setBooks(newBooks)
        if(newBooks.length > 1){
            setResultTitle("your search result");
        }else{
            setResultTitle("No search result found")
        }
      }else{
        setBooks([]);
        setResultTitle("No search result found")
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        books,
        setSearchTerm,
        resultTitle,
        setResultTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };