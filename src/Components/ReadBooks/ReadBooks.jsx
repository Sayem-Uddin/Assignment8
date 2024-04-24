import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstoredReadBooks } from "../../utility/localStorage";
import ReadBooksCard from "../ReadBooksCard/ReadBooksCard";


const ReadBooks = () => {
    const Books = useLoaderData();
    console.log(Books)
    const [book,setBook] = useState([]);
    useEffect( ()=>{
        const storedBooks = getstoredReadBooks();
        if(Books.length > 0){
        const  BooksReaded = Books.filter(Book => storedBooks.includes(Book.bookId));
         setBook(BooksReaded)
        }
    },[]

    )
    
    return (
        <div>
            <h1>This is readbook section{book.length}</h1>
            <ul>
                {
                    book.map(Books => <ReadBooksCard key={book.bookid} Books ={Books}></ReadBooksCard>)
                }
            </ul>
        </div>
    );
};

export default ReadBooks;