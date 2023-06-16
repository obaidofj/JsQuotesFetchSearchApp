document.addEventListener('DOMContentLoaded', () => {
    const filterInput = document.getElementById('filterInput');
    const quoteList = document.getElementById('quoteList');
  
    fetch('https://dummyjson.com/quotes')
      .then(response => response.json())
      .then(data => {
        const quotes = data.quotes;
  

        renderQuotes(quotes);
  

        filterInput.addEventListener('input', () => {
          const keyword = filterInput.value.toLowerCase();
  
          
          const filteredQuotes = quotes.filter(quote =>
            quote.quote.toLowerCase().includes(keyword)
          );
  
          
          renderQuotes(filteredQuotes);
        });
      })
      .catch(error => {
        
        quoteList.innerHTML = `<li>${error.message}</li>`;
      });
  });
  
  function renderQuotes(quotes) {
    const quoteList = document.getElementById('quoteList');
  

    quoteList.innerHTML = '';
  

    quotes.forEach(quote => {
      const listItem = document.createElement('li');
      listItem.textContent = quote.quote;
      quoteList.appendChild(listItem);
    });
  }


  
filterInput.addEventListener('input', () => {
    const keyword = filterInput.value.toLowerCase();
  
    
    const filteredQuotes = quotes.filter(quote =>
      quote.quote.toLowerCase().includes(keyword)
    );
  

    renderQuotes(filteredQuotes);
  });
  
  