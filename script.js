// let apiQuotes=[];
const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')


function newQuotes(){

    const quote=localQuotes[Math.floor(Math.random()* localQuotes.length)];
    if(!quote.author){
        authorText.textContent='Unknown';
    }else{
        
    authorText.textContent=quote.author;
    }
    if(quote.text.length>120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote')
    }

    quoteText.textContent=quote.text;

}



// async function getQuotes(){
//     const apiUrl = 'https://type.fit/api/quotes';

//     try{
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         // console.log(apiQuotes);
//         newQuotes();
//     } 
    
//     catch(error)
//     {
//         alert
//     }


// }
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}- ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');

}

newQuoteBtn.addEventListener('click', newQuotes);
twitterBtn.addEventListener('click',tweetQuote)


// getQuotes();
newQuotes();