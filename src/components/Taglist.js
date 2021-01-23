import React from 'react';
import {Link} from 'react-router-dom';

export default function Taglist(props) {
  const tagEls = props.data.map((tag, index) => <Link key={tag.name + ":" + index} to={{pathname: "/filter", search: `?tags=${tag.name}`}}>{tag.name} ({tag.count})</Link>)

  return (
    <div className="options">
      <h2>Filter by tag</h2>
      <div className="tags-container">
        {
          tagEls
        }
      </div>
    </div>
  )
}
