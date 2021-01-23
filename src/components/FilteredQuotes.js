import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import {Link} from 'react-router-dom';
import Quote from './Quote';

export default function FilteredQuotes(props) {
  // Store the filtered quotes using setState
  const [chosenQuotes, setChosenQuotes] = useState([]);

  useEffect(() => {
    // Grab the filter options from the query string in the url
    const qParam = queryString.parse(window.location.search);
    // console.log('querystring is: ' + queryString.stringify(qParam));
    // Function to get filtered quotes from the server
    const getCertainQuotes = async () => {
      try {
        // Attatch the query strings to the fetch url
        const response = await fetch("https://mern-quote-base.herokuapp.com/filter?" + queryString.stringify(qParam));
        const data = await response.json();
        setChosenQuotes(data);
      } catch(err) {
        console.log(err);
      }
    };

    getCertainQuotes();
  }, []);
  let quoteEls = <div></div>;
  if(chosenQuotes.length > 0) {
    quoteEls = chosenQuotes.map((quote, index) => <Quote key={index} data={quote} />);
  } else {
    quoteEls = <div>...</div>;
  }
  return (
    <>
      <div className="quotes-container">
        {
          quoteEls
        }
      </div>
      <div className="footer">
        <Link to="/">Back to frontpage</Link>
      </div>
    </>
  )
}
