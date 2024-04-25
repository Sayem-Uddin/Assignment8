
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstoredReadBooks } from "../../utility/localStorage";
import ReadBooksCard from "../ReadBooksCard/ReadBooksCard";

const WishlistBooks = () => {
    const Books = useLoaderData();
   
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
           
           <div >
           <div className=" grid grid-cols-1 gap-3">
                {
                    book.map(Books => <ReadBooksCard key={book.bookid} Books ={Books}></ReadBooksCard>)
                }
            </div>
           </div>
        </div>
    );
};

export default WishlistBooks;