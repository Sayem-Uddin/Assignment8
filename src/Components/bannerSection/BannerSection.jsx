import { Link } from "react-router-dom";


const BannerSection = () => {
    return (
        <div className="">
            <div className="hero max-h-screen py-40 bg-base-200 rounded-2xl ">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-80">
  <div>
  <img src="https://i.ibb.co/pdc0wTs/19021605.jpg" className="max-w-sm rounded-lg shadow-2xl" /> 
  </div>
    <div>
      <h1 className="text-5xl font-bold">Books to freshen <br /> up your bookshelf</h1>

      <Link to='/ListedBooks'><button className="btn btn-primary bg-[#23BE0A] border-none hover:bg-[#23BE0A] text-white mt-10">View The List</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default BannerSection;