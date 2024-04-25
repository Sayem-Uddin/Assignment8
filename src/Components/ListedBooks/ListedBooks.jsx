
import { Link, useLoaderData } from "react-router-dom";
import ReadBooks from "../ReadBooks/ReadBooks";
import { FaAngleDown } from "react-icons/fa6";


const ListedBooks = () => {
    const Books = useLoaderData();
    console.log(Books)
    return (
        <div>
            <div className="bg-[#1313130D] py-6 mx-16 rounded-xl">
            <h2 className=" text-3xl font-bold text-center">Books</h2>
           </div>
           <div className="my-4">
            <button className="btn bg-[#23BE0A] flex gap-2 text-white font-bold justify-center items-center hover:bg-[#23BE0A] mx-auto  ">Short By<FaAngleDown /></button>
           </div>
           <div>
            <button className="  text-black px-4 py-2">Read Books</button>
           
           <button  className="  text-black px-4 py-2">Wish List</button>
           </div>
             <div className="grid grid-cols-1 gap-2">
             <ReadBooks></ReadBooks>
             </div>
        </div>
    );
};

export default ListedBooks;