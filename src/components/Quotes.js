import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuotes } from '../store/features/quoteSlice';
import '../styles/Quotes.css';

const Quotes = () => {
    const { quotes } = useSelector((store)=>store.quotes)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchQuotes());
    }, [dispatch]);
  return (
    <div className="quotes">
          <h2>Quote of the Day</h2>
            {quotes.map((item) => (
            <h4 key={item.author}>
            {' '}
            <p>{item.quote}</p>
            <div className="line"></div>
            <h3>{item.author}</h3>
            </h4>
        ))}
        </div>
  )
}

export default Quotes