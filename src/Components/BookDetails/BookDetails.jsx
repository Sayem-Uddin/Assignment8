import { useLoaderData, useParams } from "react-router-dom";
import { saveReadBooks } from "../../utility/localStorage";


const  BookDetails = () => {
    
    const Books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const Book = Books.find( Book => Book.bookId === idInt);
    const {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=Book
    
   const handleReadBook = () =>{
    
      saveReadBooks(idInt);
   }
    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <div className="  p-2">
      <h1 className="text-5xl font-bold ">{bookName}</h1>
       <p className="my-4 text-xl">By:{author}</p>
      </div>
      <div className=" p-3 border-y-2">
        <h3 className=" text-xl">{category}</h3>
      </div>
      <p className="py-6"><span className="font-bold">Review:</span>{review}</p>
      <div className="flex gap-3 items-center border-b-2 pb-4 ">
        <h3 className="font-bold text-lg ">Tag</h3>
      <h4 className=" px-6 py-2 bg-[#23BE0A0D] rounded-2xl text-[#23BE0A]">#{tags[0]}</h4>
    <h4 className=" px-6 py-2 bg-[#23BE0A0D] rounded-2xl text-[#23BE0A]">#{tags[1]}</h4>
      </div>
      <div className="mt-4">
      <div className="overflow-x-auto">
  <table className="table">
    
    <tbody>
      {/* row 1 */}
      <tr>
        
        <td>Number Of pages:</td>
        <td className="font-bold">{totalPages}</td>
       
      </tr>
      {/* row 2 */}
      <tr>
     
        <td>Publisher:</td>
        <td className="font-bold">{publisher}</td>
      
      </tr>
      {/* row 3 */}
      <tr>
   
   <td>Year Of Publishing:</td>
   <td className="font-bold">{yearOfPublishing}</td>

 </tr>
      <tr>
   
        <td>Rating:</td>
        <td className="font-bold">{rating}</td>
     
      </tr>
    </tbody>
  </table>
</div>
      </div>
      <div className=" mt-4">
      <button onClick={handleReadBook} className="btn btn-primary bg-white text-black border-none hover:bg-white font-bold">Read Book</button>
      
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetails;