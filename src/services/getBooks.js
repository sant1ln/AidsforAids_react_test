export const getBooks = () => {
  const URL = `https://www.googleapis.com/books/v1/volumes?q=intitle:javascript`;
  
 return fetch(URL)
    .then(response => response.json())
    .then(data => {
     return data.items.map((book)=> book.volumeInfo)
    })
}