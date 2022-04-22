import React from 'react';
import { Link } from 'next/link';
import '../styles/articlecard.module.scss';


function ArticleCard ({id,title,description,name,date}) {
 
   // link = '/article/${id}';

    return (
        <Link href="/home">
        <div className="article-card">
            <span className="title">{title}</span>
            <span className="summary">{description}</span>
            <div className="end">
              <span className="name">by {name}</span>
              <span className="time"> {date}</span>
            </div>

        </div>
            
        </Link>
    );
}

export default ArticleCard;