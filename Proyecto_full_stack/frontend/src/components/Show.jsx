import {useState,useEffect} from "react"
import{collection,getDocs,deleteDoc,doc} from "firebase/firestore"
import { Link } from "react-router-dom";
import{db} from "../firebaseConfig/firebase"
import Swal from "sweetalert2"


export const Show = () =>{
    //1 configurar los hooks
const [books, setBooks] = useState([])
    //2 referenciamos a la db de firestore
const booksCollection = collection(db, "books")
    //3 funcion para mostrar todos los docs
const getBooks = async () =>{
    const data = await getDocs(booksCollection)
    console.log(data.docs);
    setBooks(                 //
        data.docs.map((doc)=>({...doc.data(), id:doc.id}))
    )
    console.log(books);
}
    //4 funcion para eliminar un doc

const deleteBook = async (id)=>{
    const booksDoc = doc(db, "books", id)
    await deleteDoc (booksDoc)
    getBooks()
}
    //5 funcion para la confirmacion de sweet alert
const confirmDelete=(id)=>{
    Swal.fire({
        title: 'Estas seguro/a?',
        text: "No podes revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, quiero borrarlo!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteBook(id)  //llamamos a la funcion eliminar
                Swal.fire(
                'Borrado!',
                'Borraste tu jugador.',
                'success'
                )
            }
        })
}

    //6 useEffect 
useEffect(()=>{
    getBooks()
})



// 7 devolvermos la vista de nuestro componente
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="d-grid gap-p">
                        <Link to="/create" className="btn btn-secondary mt-2 mb-2">Agregar Libro</Link>
                    </div>    
                </div>
            </div>

            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">Autor</th>
                    <th scope="col">Título</th>
                    <th scope="col">Genero</th>
                    <th scope="col">Año</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book)=>(
                        <tr key={book.id}>
                            <td>{book.author}</td>
                            <td>{book.title}</td>
                            <td>
                                {book.genres.map((genre) => genre).join(", ")}
                            </td>
                            <td>{book.year}</td>
                            <td>
                                <Link to={`/edit/${book.id}`} className="btn btn-light">
                                    <i class="fa-solid fa-pencil"></i>
                                </Link>
                                <button className="btn btn-danger" onClick={()=>confirmDelete(book.id)}>
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        )

}