import React, {useState, useEffect} from 'react';
import Taglist from './Taglist';
import Quote from './Quote';

export default function Frontpage() {
  const [allQuotes, setAllQuotes] = useState([]);
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    const getQuotes = async () => {
        try {
        const response = await fetch("https://mern-quote-base.herokuapp.com/"); // Fetch data from our api server running on port 5000
        const data = await response.json(); // getting the json data
        // The data is an array with one item, that item has the props id and greeting
        // Set the greeting string as the data we recieve from the database
        setAllQuotes(data);
      } catch(err) {
        console.log(err);
      }
    };
    getQuotes();
  }, []);
  
  // When allQuotes updates, then acquire all the tags availble from the quote collection and count how many quotes exist of each tag
  useEffect(() => {
    const getTags = () => {
      const tags = [];
      // Go through the quote collection
      allQuotes.forEach(quote => {
        // Go through the tag collection in current quote
        quote.tags.forEach(tag => {
          // If the current tag exists in our tag collection increase the count property, otherwise push it to our list
          if(tags.some(item => item.name === tag)) {
            for(let i = 0; i < tags.length; i++) {
              if(tags[i].name === tag) {
                tags[i].count += 1;
              }
            }
          } else {
            tags.push({name: tag, count: 1});
          }
        });
      });
      setAllTags(tags);
    }
    getTags();
  }, [allQuotes]);

  // Map each quote object into a Quote component
  const quotesEls = allQuotes.map((quote, index) => <Quote key={index} data={quote} />);

  return (
    <>
      {
        <Taglist data={allTags}/>
      }
      <div className="quotes-container">
        {
          quotesEls
        }
      </div>
    </>
  )
}
