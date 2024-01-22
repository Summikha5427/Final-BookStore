
import BookSingleCard from "./BookSingleCard";
import images from "./../../assets/images.jpg"

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-cover" style={{backgroundImage:`url(${images})`}}>
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item}/>
      ))}
    </div>
  );
};

export default BooksCard;
