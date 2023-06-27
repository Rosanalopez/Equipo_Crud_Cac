import { get } from "../../utils/httpClient"
import { useState, useEffect } from "react"
import { BookCard } from "./BookCard"
import "./BooksGrid.css"

export const BooksGrid=()=>{
    const [Books,setBooks] = useState([])
   
    useEffect(()=>{
        get("/libraries/book").then((data)=>{
            console.log(data)
            console.log(data.results)
            console.log(data.books)
            setBooks(data.results);
        })
    },[])

    return(
        <ul className="BooksGrid">
            {/* {Books.books.map((Book)=>(
                <BookCard key={Book.id} Book={Book}/>
            ))} */}
        </ul>
    )
}