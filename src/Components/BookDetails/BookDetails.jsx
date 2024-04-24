import { Link, useLoaderData, useParams } from "react-router-dom";
import { saveReadBooks } from "../../utility/localStorage";

const  BookDetails = () => {
    
    const Books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const Book = Books.find( Book => Book.bookId === idInt);
    
   const handleReadBook = () =>{
      saveReadBooks(idInt);
   }
    return (
        <div>
            <h1>boook no:{id}</h1>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{Book.bookName}</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button onClick={handleReadBook} className="btn btn-primary">Read Book</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetails;