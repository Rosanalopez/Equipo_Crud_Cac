import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"


// Botón -> Link
// Redirect -> useNavigate

export const Edit = () =>{
    const [lastName, setLastName] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState(0);
    const [position, setPosition] = useState("");

    const navigate = useNavigate();
    const { id } = useParams();

    // const playersCollection = collection(db, "players");

    const updatePlayer = async (e) => {
        e.preventDefault();
        const playerDoc = doc(db, "players", id); // id es el id del documento
        await updateDoc(playerDoc, {
            lastName: lastName,
            name: name,
            number: Number(number),
            position: position,
        });
        navigate("/");
      };
    
    useEffect(() => {
        getPlayer(id);
    }, [id]);

    const getPlayer = async (id) => {
        const playerDoc = doc(db, "players", id);
        const playerSnap = await getDoc(playerDoc);
        if (playerSnap.exists()) {
            console.log("Document data:", playerSnap.data());
            setLastName(playerSnap.data().lastName);
            setName(playerSnap.data().name);
            setNumber(playerSnap.data().number);
            setPosition(playerSnap.data().position);
        } else {
            // doc.data() will be undefined in this case
            console.log("Documento no encontrado!");
        }
    }

    const cancelEdit = () => {
        navigate("/");
      };

    return(
        <div className="container">
            <div className="row">
                <div className="row">
                <h1>Editar Jugador</h1>
                <form onSubmit={updatePlayer}>
                    <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                    </div>

                    <div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                    </div>

                    <div className="mb-3">
                    <label className="form-label">Número</label>
                    <input
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                    </div>

                    <div className="mb-3">
                    <label className="form-label">Posición</label>
                    <input
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Crear Jugador
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger ms-2"
                        onClick={cancelEdit}
                    >
                        Cancelar
                    </button>
                </form>
                </div>
            </div>
        </div>
    )
}
