import { useEffect, useState } from "react";
import BooksCard from "../BooksCard/BooksCard";

const BooksContainer = () => {
    const [Books,SetBooks] = useState([]);
    useEffect(()=> {
        fetch("BooksContainer.json")
        .then(res => res.json())
        .then(data => SetBooks(data));
    },[]);

    return (
      <div>
          <div>
            <h1 className=" text-4xl justify-center item text-black font-bold text-center mt-24 mb-10">Books </h1>
  </div>
  <div className=" grid grid-cols-3 gap-2 mx-10">
    {
        Books.map(Books=> <BooksCard key={Books.bookId} Books={Books}></BooksCard>)
    }
  </div>
      </div>
    );
};

export default BooksContainer;