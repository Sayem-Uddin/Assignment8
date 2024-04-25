import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { SiPagekit } from "react-icons/si";
import { Link } from "react-router-dom";
const WishlistBooksCard = ({Books}) => {
    const {bookId,bookName,image,author,rating,category,tags,yearOfPublishing,totalPages,publisher} = Books
    return (
        <div>
     <div className="mx-16 ">
     <div className="card card-side bg-base-100 shadow-xl">
  <figure className=" my-2 mx-4"><img className=" w-36 m-4" src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{bookName}</h2>
    <p>By: {author}</p>
    <div className="flex items-center gap-5 ">
    <div className="flex gap-3 items-center  pb-4 ">
        <h3 className="font-bold text-lg ">Tag</h3>
      <h4 className=" px-6 py-2 bg-[#23BE0A0D] rounded-2xl text-[#23BE0A]">#{tags[0]}</h4>
    <h4 className=" px-6 py-2 bg-[#23BE0A0D] rounded-2xl text-[#23BE0A]">#{tags[1]}</h4>
      </div>
      <div className="flex items-center pb-4 ">
      <h4 className="text-2xl"><CiLocationOn /></h4>
      <h4 className="">Year of Publishing: {yearOfPublishing}</h4>
      </div>
    </div>
    <div className="flex gap-4 border-b-2 pb-4">
      <div className="flex gap-1 items-center"><GoPeople /><p>Publisher: {publisher}</p></div>
      <div className="flex gap-1 items-center"><SiPagekit /><p>Page {totalPages}</p>
      
      </div>
    </div>
    <div className="flex gap-4 items-center mt-2">
    <h4 className=" px-6 py-2 bg-[#328EFF26] rounded-2xl text-[#328EFF]"> Catagory:{category}</h4>
    <h4 className=" px-6 py-2 bg-[#FFAC3326] rounded-2xl text-[#FFAC33]">Rating:{rating}</h4>
    <Link to={`/Books/${bookId}`}>
        <button className="bg-[#23BE0A] text-white rounded-2xl px-6 py-2">View Details</button>
      </Link>
    </div>
  </div>
</div>
     </div>
        </div>
    );
};

export default WishlistBooksCard;