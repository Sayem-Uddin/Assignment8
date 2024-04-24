
import { useLoaderData } from "react-router-dom";
import ReadBooks from "../ReadBooks/ReadBooks";


const ListedBooks = () => {
    const Books = useLoaderData();
    console.log(Books)
    return (
        <div>
             <h1 className="text-black text-4xl ">this is ListedBooks</h1>
             <ReadBooks></ReadBooks>
        </div>
    );
};

export default ListedBooks;