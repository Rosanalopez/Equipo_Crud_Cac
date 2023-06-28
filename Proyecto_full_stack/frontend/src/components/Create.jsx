import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"


export const Create = () =>{
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [year, setYear] = useState(0);
    const [genres, setGenres] = useState([]);

    const navigate = useNavigate();

    const playersCollection = collection(db, "books");

    const createPlayer = async (e) => {
        e.preventDefault();
        await addDoc(playersCollection, {
          author: author,
          title: title,
          year: Number(year),
          genres: genres,
        });
        navigate("/");
      };
    
    const cancelCreate = () => {
        navigate("/");
    };

    return(
        <div className="container">
            <div className="row">
                <div className="row">
                <h1>Crear Libro</h1>
                <form onSubmit={createPlayer}>
                    <div className="mb-3">
                    <label className="form-label">Título</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                    </div>

                    <div className="mb-3">
                    <label className="form-label">Autor</label>
                    <input
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                    </div>

                    <div className="mb-3">
                    <label className="form-label">Año</label>
                    <input
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                    </div>

                    <div className="mb-3">
                    <label className="form-label">Géneros (separado por coma)</label>
                    <input
                        value={genres}
                        onChange={(e) => setGenres(e.target.value.split(","))}
                        type="text"
                        className="form-control"
                    />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Crear Libro
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger ms-2"
                        onClick={cancelCreate}
                    >
                        Cancelar
                    </button>
                </form>
                </div>
            </div>
        </div>
    )
}
