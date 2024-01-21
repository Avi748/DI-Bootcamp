import React, { useState } from 'react';
import quotes from './QuotesDatabase'


const Quotes = () => {
    const [quote, setQuote] = useState({
        quote: quotes[0].quote
    });

    const [author, setAuthor] = useState({
        author: quotes[0].author
    });

    const getQuote = () => {
        const quoteRandom = quotes[Math.floor(Math.random() * quotes.length)]
        setQuote(quoteRandom);
        setAuthor(quoteRandom);
    }

    const randomColor = () => {
        const color = `rgb(
          ${Math.floor(Math.random() * 155)},
          ${Math.floor(Math.random() * 155)},
          ${Math.floor(Math.random() * 155)})`;
        return color;
      }
  
    const handleClick = () => {
        getQuote();
        randomColor();
    }
    
    return (
        <div style={{background:randomColor(), height:'100vh'}}>
            <div id="quote-box" style={{color: randomColor()}}>
                <div id="text"><p>"{quote.quote}"</p></div>
                <div id="author"><p>-{author.author}-</p></div>
                <div id="buttons">
                    <button onClick={handleClick} id="new-quote" style={{color: randomColor()}}>New Quote</button>
                </div>
            </div>
        </div>
      )
}

export default Quotes;

