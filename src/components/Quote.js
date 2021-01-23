import React from 'react';

export default function Quote(props) {
  // Go through the quote's tags and map them for displayal
  const tagEls = props.data.tags.map((tag, index) => <div key={index}>{tag}</div>);
  return (
    <div>
      {props.data.quote}
      <h3>{props.data.author}</h3>
      <div className="quote-tags">
        {
          tagEls
        }
      </div>
    </div>
  )
}
