import React from 'react';
import './NewsCard.css';

const NewsCard = ({news}) => {
  return (
    <div className='card'>
      <img src={news.imageUrl} className='image' alt={news.title.slice(0, 10)} />
      <h3 className='title'>
      {news.title}
      </h3>
      <p className="description">
        {news.content  ? news.content.slice(0, 179) : 'Description is not Found for this news :('} 
      </p>
      {news.author && <span className="author">{news.author}</span>}
      <a href={news.url} className="readmore">Read more...</a>
    </div>
  )
}

export default NewsCard
