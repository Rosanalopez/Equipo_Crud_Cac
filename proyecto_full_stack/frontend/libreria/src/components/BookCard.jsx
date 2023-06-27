import "./BookCard.css"
import {Link} from "react-router-dom"
export const BookCard = ({ book }) => {

  const imgURL= book.image

  return (
    <li className="booksCard">
      <Link to={`/libraries/book/${book.id}`}>
      <img className="bookImage" src={imgURL} alt={book.title} />
      <div>{book.title}</div>
      </Link>
    </li>
  );
};