
const ReadBooksCard = ({Books}) => {
    const {bookName,image,author,rating,category,tags} = Books
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
  <div className="">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  </div>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{bookName}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ReadBooksCard;