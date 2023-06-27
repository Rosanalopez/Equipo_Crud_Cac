import { get } from "../../utils/httpClient"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./BookDetail.css";

export const BookDetail = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    //llamado a la api
    get(`/libraries/book/${bookId}`).then((data) => {
      setBook(data);
    });
  }, [bookId]);

  if (!book) {
    return null;
  }
  const imgURL = book.image
  return (
    <div className="contenedorDetalle">
      <img className="col" src={imgURL} alt={book.title} />
      <div className="bookDetail">
        <p className="item">
          <strong>Titulo: </strong>
          {book.title}
        </p>
        <p>
          <strong>Description: </strong>
          {book.title}
        </p>

        <p>
          <strong>Género: </strong>
          {book.title}
        </p>
        <p>
          <strong>Autor: </strong>
          {book.author}
        </p>
      </div>
    </div>
  );
};