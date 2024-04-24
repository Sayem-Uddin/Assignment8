import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";


const BooksCard = ({Books}) => {
    const {bookName,image,author,rating,category,tags,bookId} = Books;
    return (
        <div>
       <Link to={`/Books/${bookId}`}>
       <div className="card w-96 bg-base-100 shadow-xl  h-5/6">
  <figure className="p-20 mt-10 h-fit lg:h-96"><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <div className=" flex gap-2 my-4 ">
    <h4 className=" px-6 py-2 bg-[#23BE0A0D] rounded-2xl text-[#23BE0A]">{tags[0]}</h4>
    <h4 className=" px-6 py-2 bg-[#23BE0A0D] rounded-2xl text-[#23BE0A]">{tags[1]}</h4>
    
    
    </div>
    <h2 className="card-title">
    {bookName}
    </h2>
    <div className="border-b-2 border-dashed">
    <p className="mb-4">By:{author}</p>
    </div>
    <div className="card-actions justify-between">
      <div className="">{category}</div> 
      <div className=" flex items-center gap-1 ">
      <FaRegStar />
        <p>{rating}</p></div>
    </div>
  </div>
</div>
       </Link>
        </div>
    );
};

export default BooksCard;