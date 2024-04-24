const getstoredReadBooks = () =>{
    const storedBooks =localStorage.getItem('Read-Books');
    if(storedBooks){
        return JSON.parse(storedBooks);
    }
    return[]
}



const saveReadBooks = id =>{
  const storedBooks = getstoredReadBooks();
  const exists = storedBooks.find(jobId => jobId === id);
  if(!exists){
    storedBooks.push(id);
    localStorage.setItem('Read-Books',JSON.stringify(storedBooks));
  }
}
export{getstoredReadBooks,saveReadBooks}