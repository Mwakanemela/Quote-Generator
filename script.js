// let apiQuotes = [];

function newQuote() {
  // const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  console.log(quote);
}
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
