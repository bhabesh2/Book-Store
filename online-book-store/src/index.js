import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { AppProvider } from './context';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}>
          <Route exact path='/about' element={<About />} />
          <Route exact path='/book' element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Route>
      </Routes>
    </Router>
  </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
