import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import Loader from './Loader.js';
import axios from 'axios';

const Cards = () => {

    const categories = [
        'All',
       'National',
        'Business',
        'Sports',
        'World',
        'Politics',
        'Technology',
        'Startup',
        'Entertainment',
        'Miscellaneous',
        'Hatke',
        'Science',
        'Automobile'
    ];

    const [newsArticles, setNewsArticles] = useState({
        loading : true,
        articles : []
    });

    const [category, setCategory] = useState(categories[0].toLowerCase());
    
    
    const changeCategory = async (category) =>{

        setNewsArticles({
            loading : true,
            articles : []
        })
        
        setCategory(category);

        const {data} = await axios.get(`https://inshorts.deta.dev/news?category=${category.toLowerCase()}`);

        setNewsArticles({
           loading : false,
           articles : data.data,
        });

    }

    const searchKeyword = async () =>{

        alert('In Short Api Does not Provide Search Functionality! ')

    }

    const loadArticles = async ()=>{

        const {data} = await axios.get(`https://inshorts.deta.dev/news?category=${category}`);

        setNewsArticles({
           loading : false,
           articles : data.data,
        });
    }

    useEffect(()=>{
        loadArticles();
    })




    return (
        <div className="cardContainer">
            {
            newsArticles.loading ? <Loader/> : 
            <>
            <div className="filterbox">
                <input type="search" onChange={(e)=>searchKeyword(e.target.value)} placeholder='search a keyword' />
                <select value={category} onChange={(e)=>changeCategory(e.target.value)}>
                    {categories.map((category) => {
                        return <option key={category} value={category}>{category}</option>
                    })}
                </select>
            </div>
            <div className='cards'>
                {newsArticles.articles ? newsArticles.articles.map((news, i) => <NewsCard key={i} news={news} />)
                :
                <span>News Not Found</span>
                }
            </div>
            </>
            }
        </div>
    )
}

export default Cards
