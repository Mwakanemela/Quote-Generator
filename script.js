const qouteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// let apiQuotes = [];

function showLoading() {
  console.log("Loading..");
  loader.hidden = false;
  qouteContainer.hidden = true;
}

function hideLoading() {
  loader.hidden = true;
  qouteContainer.hidden = false;
}
function newQuote() {
  // const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  showLoading();
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

  if (quote.author == null) {
    //or !quote.author
    quote.author = "Unknown";
  } else {
    quoteAuthor.textContent = quote.author;
  }

  if (quote.text > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
  hideLoading();
  //   console.log(quote);
}

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;

  window.open(twitterUrl, "_blank");
}

newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);
//get quotes from api
// async function getQuotes() {
//   const apiUrl = "https://type.fit/api/quotes";
//   try {
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();
//     newQuote();
//     // console.log(apiQuotes);
//   } catch (error) {
//     // catch error
//     // console.log(error);
//   }
// }

newQuote();
//oN LOAD
// getQuotes();
